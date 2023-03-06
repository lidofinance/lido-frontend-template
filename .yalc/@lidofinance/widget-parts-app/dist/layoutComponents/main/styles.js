"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const lido_ui_1 = require("@lidofinance/lido-ui");
exports.MainStyle = (0, styled_components_1.default)(lido_ui_1.Container) `
  position: relative;
  margin-top: ${({ theme }) => theme.spaceMap.sm}px;
  margin-bottom: ${({ theme }) => theme.spaceMap.sm}px;
`;
