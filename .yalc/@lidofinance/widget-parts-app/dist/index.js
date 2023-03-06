"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetApp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lido_ui_1 = require("@lidofinance/lido-ui");
const widget_parts_wallet_modal_1 = require("@lidofinance/widget-parts-wallet-modal");
const web3_react_1 = require("@reef-knot/web3-react");
const globalStyles_1 = __importDefault(require("./globalStyles"));
const layoutComponents_1 = require("./layoutComponents");
// Migrations old cookies to new cross domain cookies
(0, lido_ui_1.migrationThemeCookiesToCrossDomainCookiesClientSide)();
const WidgetApp = ({ ...props }) => ((0, jsx_runtime_1.jsxs)(lido_ui_1.CookieThemeProvider, { children: [(0, jsx_runtime_1.jsx)(globalStyles_1.default, {}), (0, jsx_runtime_1.jsx)(web3_react_1.ProviderWeb3, { ...props.web3, children: (0, jsx_runtime_1.jsxs)(widget_parts_wallet_modal_1.ProviderWalletModal, { ...props.reefKnot, children: [(0, jsx_runtime_1.jsx)(layoutComponents_1.Header, { pages: props?.pages }), (0, jsx_runtime_1.jsx)(layoutComponents_1.Main, { children: props.children }), (0, jsx_runtime_1.jsx)(layoutComponents_1.Footer, {}), (0, jsx_runtime_1.jsx)(lido_ui_1.CookiesTooltip, {}), (0, jsx_runtime_1.jsx)(lido_ui_1.ToastContainer, {})] }) })] }));
exports.WidgetApp = WidgetApp;
