"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
// TODO: move to UI ???
const Section = (props) => {
    const { title, headerDecorator, children, ...rest } = props;
    return ((0, jsx_runtime_1.jsxs)(styles_1.SectionStyle, { ...rest, children: [title && ((0, jsx_runtime_1.jsxs)(styles_1.SectionHeaderStyle, { children: [(0, jsx_runtime_1.jsx)(styles_1.SectionTitleStyle, { children: title }), headerDecorator && (0, jsx_runtime_1.jsx)(styles_1.SectionHeaderDecoratorStyle, { children: headerDecorator })] })), children] }));
};
exports.default = Section;
