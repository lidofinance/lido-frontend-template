"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lido_ui_1 = require("@lidofinance/lido-ui");
// eslint-disable-next-line import/no-extraneous-dependencies
const react_1 = require("@lido-sdk/react");
const styles_1 = require("./styles");
const TokenToWallet = (props) => {
    const { address, ...rest } = props;
    const { addToken } = (0, react_1.useTokenToWallet)(address);
    if (!addToken)
        return null;
    return ((0, jsx_runtime_1.jsx)(lido_ui_1.Tooltip, { placement: "bottomLeft", title: "Add tokens to wallet", children: (0, jsx_runtime_1.jsx)(styles_1.TokenToWalletStyle, { tabIndex: -1, onClick: addToken, ...rest }) }));
};
exports.default = TokenToWallet;
