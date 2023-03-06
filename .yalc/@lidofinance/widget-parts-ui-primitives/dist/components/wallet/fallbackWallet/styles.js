"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackWalletStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const walletCard_1 = require("../walletCard");
exports.FallbackWalletStyle = (0, styled_components_1.default)(walletCard_1.WalletCard) `
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`;
