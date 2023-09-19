import React from 'react';
import type { LidoComponentProps } from '@lidofinance/lido-ui';
export type ServicePageProps = LidoComponentProps<'div', {
    title: React.ReactNode;
}>;
export declare const ServicePage: React.ForwardRefExoticComponent<{
    title: React.ReactNode;
} & Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | undefined;
    forwardedAs?: keyof JSX.IntrinsicElements | undefined;
}, "title" | "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=servicePage.d.ts.map