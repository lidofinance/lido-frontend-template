import { ReactNode, FC } from "react";
type PageErrorProps = {
    title: string;
    content: ReactNode;
};
type PartialPageErrorProps = Partial<PageErrorProps>;
export const PageError: FC<PageErrorProps>;
export const Page404: FC<PartialPageErrorProps>;
export const Page500: FC<PartialPageErrorProps>;

//# sourceMappingURL=index.d.ts.map
