"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page404 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const pageError_1 = require("./pageError");
const DefaultContent = () => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Page Not Found \u00AF\\_(\u30C4)_/\u00AF'" });
const Page404 = ({ title, content, ...rest }) => ((0, jsx_runtime_1.jsx)(pageError_1.PageError, { ...rest, title: title ?? '404', content: content ?? (0, jsx_runtime_1.jsx)(DefaultContent, {}) }));
exports.Page404 = Page404;
