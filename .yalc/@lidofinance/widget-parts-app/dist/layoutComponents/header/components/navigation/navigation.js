"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigationLink_1 = __importDefault(require("./components/navigationLink"));
const styles_1 = require("./styles");
const Navigation = (0, react_1.memo)((props) => {
    const { pages } = props;
    if (!pages) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    return ((0, jsx_runtime_1.jsx)(styles_1.NavigationStyle, { children: pages.map((pageProps) => ((0, jsx_runtime_1.jsx)(navigationLink_1.default, { ...pageProps }, pageProps.href))) }));
});
Navigation.displayName = 'Navigation';
exports.default = Navigation;
