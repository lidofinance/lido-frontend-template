"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalledButtonLoaderStyle = exports.WalledButtonBalanceStyle = exports.WalledButtonWrapperStyle = exports.WalledButtonStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const lido_ui_1 = require("@lidofinance/lido-ui");
exports.WalledButtonStyle = (0, styled_components_1.default)(lido_ui_1.Button) `
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`;
exports.WalledButtonWrapperStyle = styled_components_1.default.span `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -10px -18px;
`;
exports.WalledButtonBalanceStyle = styled_components_1.default.span `
  margin-right: 12px;
  margin-left: 4px;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
exports.WalledButtonLoaderStyle = (0, styled_components_1.default)(lido_ui_1.InlineLoader) `
  width: 60px;
`;
