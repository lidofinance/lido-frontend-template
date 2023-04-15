"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageError = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const head_1 = __importDefault(require("next/head"));
const lido_ui_1 = require("@lidofinance/lido-ui");
const PageError = ({ title, content }) => ((0, jsx_runtime_1.jsxs)(lido_ui_1.ServicePage, { title: title, children: [(0, jsx_runtime_1.jsx)(head_1.default, { children: (0, jsx_runtime_1.jsxs)("title", { children: ["Lido | ", title] }) }), content] }));
exports.PageError = PageError;
