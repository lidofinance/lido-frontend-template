import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import * as LidoUI from '@lidofinance/lido-ui';
const { H1, Text } = LidoUI;
import { ServicePageStyle, ServicePageInsideStyle } from './styles.js';
const _ServicePage = ({ title, children, ...rest }, ref) => (_jsx(ServicePageStyle, { ...rest, ref: ref, children: _jsxs(ServicePageInsideStyle, { children: [_jsx(H1, { children: title }), _jsx(Text, { color: "secondary", children: children })] }) }));
export const ServicePage = forwardRef(_ServicePage);
