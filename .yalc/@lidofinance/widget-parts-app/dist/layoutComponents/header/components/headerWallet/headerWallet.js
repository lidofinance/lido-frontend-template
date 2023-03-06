"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const constants_1 = require("@lido-sdk/constants");
const react_1 = require("@lido-sdk/react");
const web3_react_1 = require("@reef-knot/web3-react");
const lido_ui_1 = require("@lidofinance/lido-ui");
const walletButton_1 = __importDefault(require("./components/walletButton"));
const walletConnect_1 = __importDefault(require("./components/walletConnect"));
const styles_1 = require("./styles");
const HeaderWallet = () => {
    const { active } = (0, web3_react_1.useWeb3)();
    const { chainId } = (0, react_1.useSDK)();
    const chainName = constants_1.CHAINS[chainId];
    const testNet = chainId !== constants_1.CHAINS.Mainnet;
    const showNet = testNet && active;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [showNet && ((0, jsx_runtime_1.jsx)(styles_1.HeaderWalletChainStyle, { "$color": (0, constants_1.getChainColor)(chainId), children: chainName })), active ? (0, jsx_runtime_1.jsx)(walletButton_1.default, {}) : (0, jsx_runtime_1.jsx)(walletConnect_1.default, { size: "sm" }), (0, jsx_runtime_1.jsx)(lido_ui_1.ThemeToggler, {})] }));
};
exports.default = HeaderWallet;
