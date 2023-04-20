var $eRrQA$reactjsxruntime = require("react/jsx-runtime");
var $eRrQA$react = require("react");
var $eRrQA$ethers = require("ethers");
var $eRrQA$lidofinancelidoui = require("@lidofinance/lido-ui");
var $eRrQA$lidosdkreact = require("@lido-sdk/react");
var $eRrQA$styledcomponents = require("styled-components");
var $eRrQA$lidofinanceuiprimitives = require("@lidofinance/ui-primitives");
var $eRrQA$reefknotweb3react = require("@reef-knot/web3-react");
var $eRrQA$lidosdkconstants = require("@lido-sdk/constants");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $d3acdc1d2b74caac$exports = {};
var $8b804b2f1a2e1cea$exports = {};
var $9699ed71cbc0201a$exports = {};

$parcel$export($9699ed71cbc0201a$exports, "FormatToken", function () { return $9699ed71cbc0201a$export$2bbae861424212a5; });


var $0371126a9166b1fc$exports = {};
var $5868ea3002458cf7$exports = {};

$parcel$export($5868ea3002458cf7$exports, "formatFloorEtherBalance", function () { return $5868ea3002458cf7$export$f9c87f30bf8ee9ba; });

const { formatEther: $5868ea3002458cf7$var$formatEther  } = (0, $eRrQA$ethers.utils);
const { Zero: $5868ea3002458cf7$var$Zero  } = (0, $eRrQA$ethers.constants);
const $5868ea3002458cf7$export$f9c87f30bf8ee9ba = (balance = $5868ea3002458cf7$var$Zero, maxDecimalDigits = 4)=>{
    // ETH is divisible to 18 decimal places
    const modulo = (0, $eRrQA$ethers.BigNumber).from(10).pow(Math.max(0, 18 - maxDecimalDigits));
    return $5868ea3002458cf7$var$formatEther(balance.sub(balance.mod(modulo)));
};


$parcel$exportWildcard($0371126a9166b1fc$exports, $5868ea3002458cf7$exports);


const $9699ed71cbc0201a$export$2bbae861424212a5 = (props)=>{
    const { amount: amount , symbol: symbol , approx: approx = false , ...rest } = props;
    const prefix = !approx || (amount === null || amount === void 0 ? void 0 : amount.isZero()) ? "" : "≈ ";
    return /*#__PURE__*/ (0, $eRrQA$reactjsxruntime.jsxs)("span", {
        ...rest,
        children: [
            prefix,
            (0, $5868ea3002458cf7$export$f9c87f30bf8ee9ba)(amount),
            "\xa0",
            symbol
        ]
    });
};


$parcel$exportWildcard($8b804b2f1a2e1cea$exports, $9699ed71cbc0201a$exports);


var $4f8ae82e84511f7e$exports = {};
var $606a8c96c5ff1511$exports = {};

$parcel$export($606a8c96c5ff1511$exports, "TokenToWallet", function () { return $606a8c96c5ff1511$export$8c8f4b533d324773; });





let $9e8f2b4e08e0d692$var$_ = (t)=>t, $9e8f2b4e08e0d692$var$t;
const $9e8f2b4e08e0d692$export$38a986a8dd613d5c = (0, ($parcel$interopDefault($eRrQA$styledcomponents))).button($9e8f2b4e08e0d692$var$t || ($9e8f2b4e08e0d692$var$t = $9e8f2b4e08e0d692$var$_`
  border: 0;
  padding: 0;
  width: 15px;
  height: 15px;
  line-height: 0;
  vertical-align: middle;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -2px;
  margin-left: 4px;
  // more info: https://github.com/lidofinance/ui/tree/main/packages/theme
  background: var(--lido-color-accentDarken);

  &:before,
  &:after {
    content: '';
    position: absolute;
    // more info: https://github.com/lidofinance/ui/tree/main/packages/theme
    background: var(--lido-color-accentContrast);
    width: 7px;
    height: 1px;
    top: 7px;
    left: 4px;
    border-radius: 0.5px;
  }

  &:after {
    height: 7px;
    width: 1px;
    top: 4px;
    left: 7px;
  }
`));


const $606a8c96c5ff1511$export$8c8f4b533d324773 = (props)=>{
    const { address: address , ...rest } = props;
    const { addToken: addToken  } = (0, $eRrQA$lidosdkreact.useTokenToWallet)(address);
    if (!addToken) return null;
    return /*#__PURE__*/ (0, $eRrQA$reactjsxruntime.jsx)((0, $eRrQA$lidofinancelidoui.Tooltip), {
        placement: "bottomLeft",
        title: "Add tokens to wallet",
        children: /*#__PURE__*/ (0, $eRrQA$reactjsxruntime.jsx)((0, $9e8f2b4e08e0d692$export$38a986a8dd613d5c), {
            tabIndex: -1,
            onClick: addToken,
            ...rest
        })
    });
};


$parcel$exportWildcard($4f8ae82e84511f7e$exports, $606a8c96c5ff1511$exports);


var $7e3f35bd8dd96f70$exports = {};
var $afec180ce0ab0379$exports = {};

$parcel$export($afec180ce0ab0379$exports, "WalletFallback", function () { return $afec180ce0ab0379$export$db542de45b23291e; });






const $6c34dc2a0e313f07$export$23759efdd2d2dae9 = ()=>{
    const { error: error  } = (0, $eRrQA$reefknotweb3react.useWeb3)();
    const { isUnsupported: isUnsupported , supportedChains: supportedChains  } = (0, $eRrQA$reefknotweb3react.useSupportedChains)();
    const chains = (0, $eRrQA$react.useMemo)(()=>{
        const _chains = supportedChains.map(({ chainId: chainId , name: name  })=>(0, $eRrQA$lidosdkconstants.CHAINS)[chainId] || name);
        return new Intl.ListFormat("en", {
            style: "long",
            type: "disjunction"
        }).format(_chains);
    }, [
        supportedChains
    ]);
    if (isUnsupported) return `Unsupported chain. Please switch to ${chains} in your wallet`;
    return error === null || error === void 0 ? void 0 : error.message;
};


const $afec180ce0ab0379$export$db542de45b23291e = (props)=>{
    const error = (0, $6c34dc2a0e313f07$export$23759efdd2d2dae9)();
    return /*#__PURE__*/ (0, $eRrQA$reactjsxruntime.jsx)((0, $eRrQA$lidofinanceuiprimitives.WalletFallback), {
        ...props,
        error: error
    });
};


$parcel$exportWildcard($7e3f35bd8dd96f70$exports, $afec180ce0ab0379$exports);


$parcel$exportWildcard($d3acdc1d2b74caac$exports, $8b804b2f1a2e1cea$exports);
$parcel$exportWildcard($d3acdc1d2b74caac$exports, $4f8ae82e84511f7e$exports);
$parcel$exportWildcard($d3acdc1d2b74caac$exports, $7e3f35bd8dd96f70$exports);



$parcel$exportWildcard(module.exports, $d3acdc1d2b74caac$exports);
$parcel$exportWildcard(module.exports, $0371126a9166b1fc$exports);


//# sourceMappingURL=index.cjs.map
