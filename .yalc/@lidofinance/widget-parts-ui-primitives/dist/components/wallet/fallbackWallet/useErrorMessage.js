"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorMessage = void 0;
const react_1 = require("react");
// eslint-disable-next-line import/no-extraneous-dependencies
const web3_react_1 = require("@reef-knot/web3-react");
// eslint-disable-next-line import/no-extraneous-dependencies
const constants_1 = require("@lido-sdk/constants");
const useErrorMessage = () => {
    const { error } = (0, web3_react_1.useWeb3)();
    const { isUnsupported, supportedChains } = (0, web3_react_1.useSupportedChains)();
    const chains = (0, react_1.useMemo)(() => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const chains = supportedChains.map(({ chainId, name }) => constants_1.CHAINS[chainId] || name);
        const lastChain = chains.pop();
        return [chains.join(', '), lastChain].filter((chain) => chain).join(' or ');
    }, [supportedChains]);
    if (isUnsupported) {
        return `Unsupported chain. Please switch to ${chains} in your wallet`;
    }
    return error?.message;
};
exports.useErrorMessage = useErrorMessage;
