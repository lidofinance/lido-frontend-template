import {
  CHAINS,
  getMooniswapAddress,
  getMooniswapContractFactory,
  getPoolContractFactory,
  getRewardsAddress,
  getRewardsContractFactory,
  getRpcJsonUrls,
  getTokenAddress,
  getTokenContractFactory,
  TOKENS,
} from 'config';
import { WeiPerEther } from '@ethersproject/constants';
import { JsonRpcProvider } from '@ethersproject/providers';
import { BigNumber } from '@ethersproject/bignumber';
import {
  MetapoolAbi,
  MooniswapAbi,
  PoolAbi,
  RewardsAbi,
  WstethAbi,
} from 'generated';

const PRECISION = 6;

const DAYS_IN_YEAR = 365.2425;
const SECONDS_IN_YEAR = 60 * 60 * 24 * DAYS_IN_YEAR;

export const getRewardsProgramApr = async (
  chainId: CHAINS,
): Promise<number> => {
  const contracts = await getContracts(chainId);

  const [
    ldoplToLdo, // 1 LDOPL = ${ldoplToLdo} LDO
    totalLdopl, // total staked in rewards program
    ldoRewardsPerSecond,
  ] = await Promise.all([
    getLdoplToLdoCost(contracts),
    getTotalLdoplAmount(contracts),
    getRewardsRate(contracts),
  ]);

  const ldoRewardsPerYear = multiplyWithPrecision(
    ldoRewardsPerSecond,
    SECONDS_IN_YEAR,
  );

  const totalStakedLdoplInLdo = multiplyWithPrecision(totalLdopl, ldoplToLdo);
  const aprFraction = divideWithPrecision(
    ldoRewardsPerYear,
    totalStakedLdoplInLdo,
  );

  return aprFraction;
};

type Contracts = {
  metaPool: MetapoolAbi;
  rewards: RewardsAbi;
  pool: PoolAbi;
  wsteth: WstethAbi;
  mooniswap: MooniswapAbi;
};

const getLibrary = (chainId: CHAINS) => {
  const urls = getRpcJsonUrls(chainId);
  return new JsonRpcProvider(urls[0], chainId);
};

const getContracts = async (chainId: CHAINS): Promise<Contracts> => {
  const currentChainLibrary = getLibrary(chainId);

  const metaPoolAddress = getTokenAddress(chainId, TOKENS.ldopl);
  const metaPoolContractFactory = getTokenContractFactory(TOKENS.ldopl);
  const metaPool = metaPoolContractFactory.connect(
    metaPoolAddress,
    currentChainLibrary,
  );

  const rewardsAddress = getRewardsAddress(chainId);
  const rewardsContractFactory = getRewardsContractFactory();
  const rewards = rewardsContractFactory.connect(
    rewardsAddress,
    currentChainLibrary,
  );

  const poolAddress = await metaPool.pool();
  const poolContractFactory = getPoolContractFactory();
  const pool = poolContractFactory.connect(poolAddress, currentChainLibrary);

  // Connect the main network to contracts, they are used to calculate the cost of tokens

  const mainnetLibrary = getLibrary(CHAINS.Mainnet);

  const wstethAddress = getTokenAddress(CHAINS.Mainnet, TOKENS.wsteth);
  const wstethContractFactory = getTokenContractFactory(TOKENS.wsteth);
  const wsteth = wstethContractFactory.connect(wstethAddress, mainnetLibrary);

  const mooniswapAddress = getMooniswapAddress(CHAINS.Mainnet);
  const mooniswapContractFactory = getMooniswapContractFactory();
  const mooniswap = mooniswapContractFactory.connect(
    mooniswapAddress,
    mainnetLibrary,
  );

  return {
    metaPool,
    rewards,
    pool,
    wsteth,
    mooniswap,
  };
};

const getTotalLdoplAmount = (contracts: Contracts): Promise<BigNumber> => {
  return contracts.rewards.totalSupply();
};

const getRewardsRate = (contracts: Contracts): Promise<BigNumber> => {
  return contracts.rewards.rewardRate();
};

const getLdoplToLdoCost = async (contracts: Contracts): Promise<number> => {
  const [
    [wstethWeiInLdopl, wethWeiInLdopl],
    stethToLdo, // 1 STETH = ${stethToLdo} LDO
    stethToWsteth, // 1 STETH = ${stethToWsteth} WSTETH
    wstethToWeth, // 1 WSTETH = ${wstethToWeth} WETH
  ] = await Promise.all([
    contracts.metaPool.previewBurn(WeiPerEther),
    getStethToLdoCost(contracts),
    getStethToWstethCost(contracts),
    getWstethToWethCost(contracts),
  ]);

  // 1 LDOPL = ${wstethInLdopl} WSTETH + ${wethInLdopl} WETH
  const wstethInLdopl = divideWithPrecision(wstethWeiInLdopl, WeiPerEther);
  const wethInLdopl = divideWithPrecision(wethWeiInLdopl, WeiPerEther);

  // 1 WSTETH = ${wstethToLdo} LDO
  const wstethToLdo = stethToWsteth ? stethToLdo / stethToWsteth : 0;

  // 1 WETH = ${wethToLdo} LDO
  const wethToLdo = wstethToWeth ? wstethToLdo / wstethToWeth : 0;

  const ldoplToLdo = wstethInLdopl * wstethToLdo + wethInLdopl * wethToLdo;
  return ldoplToLdo;
};

const x96ToDecimal = (x96: BigNumber): number => {
  return divideWithPrecision(x96, BigNumber.from(2).pow(96));
};

const getWstethToWethCost = async (contracts: Contracts): Promise<number> => {
  // The current price of the pool as a sqrt(token1/token0) Q64.96 value
  const { sqrtPriceX96 } = await contracts.pool.slot0();
  if (sqrtPriceX96.isZero()) return 0;

  const wstethToWeth = Math.pow(x96ToDecimal(sqrtPriceX96), 2);
  return wstethToWeth;
};

const getStethToWstethCost = async (contracts: Contracts): Promise<number> => {
  const stethWeiToWsteth = await contracts.wsteth.tokensPerStEth();
  const stethToWsteth = divideWithPrecision(stethWeiToWsteth, WeiPerEther);
  return stethToWsteth;
};

const getStethToLdoCost = async (contracts: Contracts): Promise<number> => {
  const { chainId } = await contracts.mooniswap.provider.getNetwork();

  const ldoAddress = getTokenAddress(chainId, TOKENS.ldo);
  const stethAddress = getTokenAddress(chainId, TOKENS.steth);

  const stethToLdo = await contracts.mooniswap.getReturn(
    stethAddress,
    ldoAddress,
    WeiPerEther,
  );

  return divideWithPrecision(stethToLdo, WeiPerEther);
};

const divideWithPrecision = (
  number: BigNumber,
  divider: BigNumber,
  precision = PRECISION,
): number => {
  const multiplier = 10 ** precision;
  return number.mul(multiplier).div(divider).toNumber() / multiplier;
};

const multiplyWithPrecision = (
  number: BigNumber,
  ratio: number,
  precision = PRECISION,
): BigNumber => {
  const multiplier = 10 ** precision;
  return number.mul(Math.floor(ratio * multiplier)).div(multiplier);
};
