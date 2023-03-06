"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterItemLink = exports.FooterItemText = exports.FooterTitle = exports.FooterGroup = exports.FooterLogo = exports.FooterDivider = exports.FooterStyle = void 0;
const lido_ui_1 = require("@lidofinance/lido-ui");
const styled_components_1 = __importDefault(require("styled-components"));
exports.FooterStyle = (0, styled_components_1.default)(lido_ui_1.Container) `
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 40px;
  }
`;
exports.FooterDivider = (0, styled_components_1.default)(lido_ui_1.Divider) `
  flex-basis: 100%;
  margin-bottom: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 40px;
  }
`;
exports.FooterLogo = styled_components_1.default.div `
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-basis: 100%;
    order: 2;
  }
`;
exports.FooterGroup = styled_components_1.default.div `
  flex-grow: 1;
  margin-bottom: 40px;
  padding-right: 20px;

  &:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-basis: 100%;
  }
`;
exports.FooterTitle = styled_components_1.default.h4 `
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  line-height: 1.4em;
`;
exports.FooterItemText = styled_components_1.default.div `
  display: block;
  margin: 0 0 0.8em;

  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.6em;
`;
exports.FooterItemLink = (0, styled_components_1.default)(lido_ui_1.Link) `
  display: block;
  margin: 0 0 0.8em;

  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.6em;
  text-decoration: none;
  opacity: 0.7;

  &,
  &:hover,
  &:visited {
    color: var(--lido-color-text);
  }

  &:hover {
    opacity: 1;
  }
`;
