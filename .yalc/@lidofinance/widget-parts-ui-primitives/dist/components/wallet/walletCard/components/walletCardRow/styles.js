"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletCardRowStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.WalletCardRowStyle = styled_components_1.default.div `
  display: flex;
  margin: ${({ theme }) => theme.spaceMap.lg}px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
