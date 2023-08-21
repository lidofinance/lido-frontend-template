import { FC } from "react";
export type FAQItem = {
    id: string;
    content: string;
    title: string;
};
export type FAQList = {
    faqList: FAQItem[];
};
export * from 'styled-components';
export const FaqItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export const Faq: FC<FAQList>;

//# sourceMappingURL=index.d.ts.map
