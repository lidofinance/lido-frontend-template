"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lido_ui_1 = require("@lidofinance/lido-ui");
const addressBadgeStyles_1 = require("./addressBadgeStyles");
// TODO: move to UI
const AddressBadge = (props) => {
    const { address, ...rest } = props;
    const isMobile = (0, lido_ui_1.useBreakpoint)('md');
    const mobileSymbols = 3;
    const desktopSymbols = 6;
    const symbols = isMobile ? mobileSymbols : desktopSymbols;
    return (0, jsx_runtime_1.jsx)(addressBadgeStyles_1.AddressBadgeStyle, { symbols: symbols, address: address ?? '', ...rest });
};
exports.default = AddressBadge;
