import { MatomoEventType } from "@lidofinance/analytics-matomo";
import { FC } from "react";
import { Axios } from "axios";
import { MemoryConfig } from "cache-manager";
import { PluggableList } from "unified";
export type FAQItem = {
    answer: string;
    question: string;
};
export type FAQAccordionProps = {
    faqList: FAQItem[];
    matomoEventMap?: Map<string, MatomoEventType> | undefined;
};
export const isFAQItem: (obj: any) => obj is FAQItem;
export const isFAQAccordionProps: (obj: any) => obj is FAQAccordionProps;
export * from 'styled-components';
export const FaqItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export const FaqAccordion: FC<FAQAccordionProps>;
export const parseYamlFileWithMdContent: (md: string, remarkPlugins?: PluggableList) => Promise<{
    content: string;
    data: Record<string, any>;
}>;
export type PageFAQ = {
    identification: string;
    faq: FAQItem[];
};
export const isPageFAQ: (obj: any) => obj is PageFAQ;
export type GetFaqOptionsProps = {
    axiosInstance: Axios;
    cache?: boolean;
    memoryCacheConfig?: MemoryConfig | undefined;
};
export const getFAQ: (faqUrl: string, { axiosInstance, cache, memoryCacheConfig }?: GetFaqOptionsProps) => Promise<PageFAQ[]>;

//# sourceMappingURL=index.d.ts.map
