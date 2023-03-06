"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../../utils");
// TODO: move to UI
const FormatToken = (props) => {
    const { amount, symbol, approx = false, ...rest } = props;
    const prefix = !approx || amount?.isZero() ? '' : '≈ ';
    return ((0, jsx_runtime_1.jsxs)("span", { ...rest, children: [prefix, (0, utils_1.formatBalance)(amount), "\u00A0", symbol] }));
};
exports.default = FormatToken;
