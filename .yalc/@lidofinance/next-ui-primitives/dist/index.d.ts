import { LinkProps } from "next/link";
import React, { FC } from "react";
export type LidoLinkProps = LinkProps & {
    href: string;
    external: boolean | undefined;
};
export const LidoLink: FC<React.PropsWithChildren<LidoLinkProps>>;

//# sourceMappingURL=index.d.ts.map
