import { FC } from "react";
import { PluggableList } from "unified";
export type FAQItem = {
    answer: string;
    question: string;
};
export type FAQList = {
    faqList: FAQItem[];
};
export * from 'styled-components';
export const FaqItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export const FaqAccordion: FC<FAQList>;
export const getRawDataFromNetlifyOrCache: (url: string) => Promise<[boolean, string | null]>;
export const parseNetlifyFile: (md: string, remarkPlugins?: PluggableList) => Promise<{
    content: string;
    data: Record<string, any>;
}>;
export type pagesFAQ = {
    name: string;
    'q&a': FAQItem[];
};
export const parseNetlifyWidgetFAQ: (md: string) => Promise<pagesFAQ[]>;

//# sourceMappingURL=index.d.ts.map
