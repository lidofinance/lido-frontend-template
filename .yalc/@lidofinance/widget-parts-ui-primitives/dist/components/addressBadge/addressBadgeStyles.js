"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBadgeStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const lido_ui_1 = require("@lidofinance/lido-ui");
exports.AddressBadgeStyle = (0, styled_components_1.default)(lido_ui_1.IdenticonBadge) `
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  & > * {
    flex-shrink: 0;
  }

  & > :first-child {
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
