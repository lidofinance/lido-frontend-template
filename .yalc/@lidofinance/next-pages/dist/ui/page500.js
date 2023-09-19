import { jsx as _jsx } from "react/jsx-runtime";
import { PageError } from './pageError.js';
export const Page500 = ({ title, content }) => (_jsx(PageError, { title: title ?? 'Internal Server Error', content: content ?? 'Oops! Something went wrong.' }));
