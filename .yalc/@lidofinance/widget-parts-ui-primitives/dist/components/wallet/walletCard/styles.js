"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletCardStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const lido_ui_1 = require("@lidofinance/lido-ui");
exports.WalletCardStyle = (0, styled_components_1.default)(lido_ui_1.Block) `
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  margin-bottom: ${({ theme }) => -theme.borderRadiusesMap.xl}px;
  padding-bottom: ${({ theme }) => theme.borderRadiusesMap.xl + theme.spaceMap.xxl}px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: ${({ theme }) => theme.borderRadiusesMap.xl + theme.spaceMap.lg}px;
  }
`;
