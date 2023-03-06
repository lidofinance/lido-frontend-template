"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const Main = (props) => {
    return (0, jsx_runtime_1.jsx)(styles_1.MainStyle, { size: "tight", forwardedAs: "main", ...props });
};
exports.default = Main;
