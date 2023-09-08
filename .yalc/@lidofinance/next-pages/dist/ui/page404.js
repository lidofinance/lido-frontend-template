import { jsx as _jsx } from "react/jsx-runtime";
import { PageError } from './pageError.js';
export const Page404 = ({ title, content }) => (_jsx(PageError, { title: title ?? 'Page Not Found', content: content ?? '¯\\_(ツ)_/¯' }));
