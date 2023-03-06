"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const router_1 = require("next/router");
const widget_parts_ui_primitives_1 = require("@lidofinance/widget-parts-ui-primitives");
const styles_1 = require("./styles");
const NavigationLink = (props) => {
    const { icon, title, href, external } = props;
    const router = (0, router_1.useRouter)();
    const searchParamsString = new URLSearchParams(router.query).toString();
    const queryString = searchParamsString ? `?${searchParamsString}` : '';
    const pathWithQuery = href + `${queryString}`;
    return external ? ((0, jsx_runtime_1.jsxs)(styles_1.NavigationLinkStyle, { href: pathWithQuery, active: router.pathname === href, target: "_blank", children: [icon, (0, jsx_runtime_1.jsx)("span", { children: title })] })) : (
    // Fix hydration error https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    (0, jsx_runtime_1.jsx)(widget_parts_ui_primitives_1.LocalLink, { href: href, passHref: true, legacyBehavior: true, children: (0, jsx_runtime_1.jsxs)(styles_1.NavigationLinkStyle, { active: router.pathname === href, children: [icon, (0, jsx_runtime_1.jsx)("span", { children: title })] }) }));
};
exports.default = NavigationLink;
