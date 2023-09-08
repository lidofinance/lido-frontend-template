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
export const parseNetlifyFile: (md: string, remarkPlugins?: PluggableList) => Promise<{
    content: string;
    data: Record<string, any>;
}>;
export type pagesFAQ = {
    identification: string;
    faq: FAQItem[];
};
export const parseNetlifyWidgetFAQ: (fileContent: string) => Promise<pagesFAQ[] | Error>;

//# sourceMappingURL=index.d.ts.map
