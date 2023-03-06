"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletModalActionsStyle = exports.WalletModalAddressStyle = exports.WalletModalAccountStyle = exports.WalletModalDisconnectStyle = exports.WalletModalConnectorStyle = exports.WalletModalConnectedStyle = exports.WalletModalContentStyle = void 0;
const lido_ui_1 = require("@lidofinance/lido-ui");
const styled_components_1 = __importDefault(require("styled-components"));
exports.WalletModalContentStyle = styled_components_1.default.div `
  padding: ${({ theme }) => theme.spaceMap.lg}px;
  background-color: var(--lido-color-background);
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
`;
exports.WalletModalConnectedStyle = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.WalletModalConnectorStyle = styled_components_1.default.div `
  flex-grow: 1;
  margin: ${({ theme }) => theme.spaceMap.sm}px 0;
  margin-right: auto;
  padding-right: ${({ theme }) => theme.spaceMap.md}px;

  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`;
exports.WalletModalDisconnectStyle = (0, styled_components_1.default)(lido_ui_1.Button) `
  flex-shrink: 0;
`;
exports.WalletModalAccountStyle = styled_components_1.default.div `
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spaceMap.sm}px 0;
`;
exports.WalletModalAddressStyle = styled_components_1.default.div `
  margin-left: ${({ theme }) => theme.spaceMap.sm}px;

  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  font-weight: 800;
  line-height: 1.2em;
`;
exports.WalletModalActionsStyle = styled_components_1.default.div `
  margin: 0 ${({ theme }) => -theme.spaceMap.sm}px;
  margin-top: ${({ theme }) => theme.spaceMap.md}px;

  button {
    margin-right: ${({ theme }) => theme.spaceMap.sm}px;
    padding-left: ${({ theme }) => theme.spaceMap.sm}px;
    padding-right: ${({ theme }) => theme.spaceMap.sm}px;
  }
`;
