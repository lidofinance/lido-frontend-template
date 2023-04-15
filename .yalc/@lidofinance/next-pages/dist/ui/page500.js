"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page500 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const pageError_1 = require("./pageError");
const DefaultContent = () => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Oops! Something went wrong.'" });
const Page500 = ({ title, content, ...rest }) => ((0, jsx_runtime_1.jsx)(pageError_1.PageError, { ...rest, title: title ?? '500', content: content ?? (0, jsx_runtime_1.jsx)(DefaultContent, {}) }));
exports.Page500 = Page500;
