"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCopyToClipboard = void 0;
const lido_ui_1 = require("@lidofinance/lido-ui");
const react_1 = require("react");
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const useCopyToClipboard = (text) => {
    return (0, react_1.useCallback)(() => {
        (0, copy_to_clipboard_1.default)(text);
        // TODO: without ToastInfo?
        (0, lido_ui_1.ToastInfo)('Copied to clipboard');
    }, [text]);
};
exports.useCopyToClipboard = useCopyToClipboard;
