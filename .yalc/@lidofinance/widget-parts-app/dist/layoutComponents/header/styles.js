"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderActionsStyle = exports.HeaderLogoStyle = exports.HeaderStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const lido_ui_1 = require("@lidofinance/lido-ui");
exports.HeaderStyle = (0, styled_components_1.default)(lido_ui_1.Container) `
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`;
exports.HeaderLogoStyle = styled_components_1.default.div `
  overflow: hidden;
  flex-shrink: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 14px;
  }
`;
exports.HeaderActionsStyle = styled_components_1.default.div `
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`;
