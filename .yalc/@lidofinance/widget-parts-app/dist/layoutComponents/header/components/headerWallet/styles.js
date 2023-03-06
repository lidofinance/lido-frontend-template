"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderWalletChainStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.HeaderWalletChainStyle = styled_components_1.default.span `
  margin-right: ${({ theme }) => theme.spaceMap.xl}px;
  color: ${({ $color }) => $color};
  line-height: 1.2em;
`;
