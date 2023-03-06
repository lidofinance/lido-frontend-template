"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useErrorMessage_1 = require("./useErrorMessage");
const styles_1 = require("./styles");
const FallbackWallet = (props) => {
    const error = (0, useErrorMessage_1.useErrorMessage)();
    if (error) {
        return (0, jsx_runtime_1.jsx)(styles_1.FallbackWalletStyle, { ...props, children: error });
    }
    return null;
};
exports.default = FallbackWallet;
