import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Head from 'next/head.js'; // TODO: import without extension
import { ServicePage } from '@lidofinance/ui-pages';
export const PageError = ({ title, content }) => (_jsxs(ServicePage, { title: title, children: [_jsx(Head, { children: _jsx("title", { children: title }) }), content] }));
