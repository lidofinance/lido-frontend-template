"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const lido_ui_1 = require("@lidofinance/lido-ui");
const headerWallet_1 = __importDefault(require("./components/headerWallet"));
const navigation_1 = __importDefault(require("./components/navigation"));
const styles_1 = require("./styles");
const Header = (props) => {
    const { pages } = props;
    return ((0, jsx_runtime_1.jsxs)(styles_1.HeaderStyle, { size: "full", forwardedAs: "header", children: [(0, jsx_runtime_1.jsx)(styles_1.HeaderLogoStyle, { children: (0, jsx_runtime_1.jsx)(link_1.default, { href: "/", legacyBehavior: true, children: (0, jsx_runtime_1.jsx)("a", { children: (0, jsx_runtime_1.jsx)(lido_ui_1.LidoLogo, {}) }) }) }), (0, jsx_runtime_1.jsx)(navigation_1.default, { pages: pages }), (0, jsx_runtime_1.jsx)(styles_1.HeaderActionsStyle, { children: (0, jsx_runtime_1.jsx)(headerWallet_1.default, {}) })] }));
};
exports.default = Header;
