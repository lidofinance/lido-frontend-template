"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletCardContentStyle = exports.WalletCardExtraStyle = exports.WalletCardValueStyle = exports.WalletCardTitleStyle = exports.WalletCardBalanceStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.WalletCardBalanceStyle = styled_components_1.default.div `
  margin-right: 18px;
  flex-basis: 50%;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;

  :last-child {
    margin-right: 0;
  }
`;
exports.WalletCardTitleStyle = styled_components_1.default.div ``;
exports.WalletCardValueStyle = styled_components_1.default.div `
  margin-top: 2px;
  font-size: ${({ theme, $small }) => ($small ? theme.fontSizesMap.sm : theme.fontSizesMap.md)}px;
  line-height: 1.4em;
  font-weight: 800;
  white-space: nowrap;
`;
exports.WalletCardExtraStyle = styled_components_1.default.div `
  margin-top: 2px;
  opacity: 0.5;
`;
exports.WalletCardContentStyle = styled_components_1.default.div `
  margin-top: 8px;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? 'none' : 'auto')};
`;
