"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHeaderDecoratorStyle = exports.SectionTitleStyle = exports.SectionHeaderStyle = exports.SectionStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SectionStyle = styled_components_1.default.section `
  margin: ${({ theme }) => theme.spaceMap.xxl}px 0;
`;
exports.SectionHeaderStyle = styled_components_1.default.div `
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.fontSizesMap.xxs}px;
`;
exports.SectionTitleStyle = styled_components_1.default.h2 `
  margin-right: auto;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizesMap.md}px;
  line-height: 1.3em;
`;
exports.SectionHeaderDecoratorStyle = styled_components_1.default.div `
  margin-left: ${({ theme }) => theme.spaceMap.lg}px;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.5em;
`;
