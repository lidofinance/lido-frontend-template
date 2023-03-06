"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lido_ui_1 = require("@lidofinance/lido-ui");
const styles_1 = require("./styles");
const WalletCardBalance = (props) => {
    const { title, small = false, extra, loading = false, children, value, ...rest } = props;
    const hasExtra = !!extra;
    const hasChildren = !!children;
    return ((0, jsx_runtime_1.jsxs)(styles_1.WalletCardBalanceStyle, { ...rest, children: [(0, jsx_runtime_1.jsx)(styles_1.WalletCardTitleStyle, { children: title }), (0, jsx_runtime_1.jsx)(styles_1.WalletCardValueStyle, { "$small": small, children: loading ? (0, jsx_runtime_1.jsx)(lido_ui_1.InlineLoader, {}) : value }), hasExtra && (0, jsx_runtime_1.jsx)(styles_1.WalletCardExtraStyle, { children: loading ? (0, jsx_runtime_1.jsx)(lido_ui_1.InlineLoader, {}) : extra }), hasChildren && (0, jsx_runtime_1.jsx)(styles_1.WalletCardContentStyle, { "$hidden": loading, children: children })] }));
};
exports.default = WalletCardBalance;
