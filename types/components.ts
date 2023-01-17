import { AppProps } from 'next/app';
import { EnvConfig } from 'common/providers';
import { FC, ReactNode } from 'react';

// todo: will be splitted

export type ComponentProps<
  T extends keyof JSX.IntrinsicElements,
  P extends Record<string, unknown> = { children?: ReactNode },
> = Omit<JSX.IntrinsicElements[T], 'ref' | 'key' | keyof P> & P;

// TODO: if it not using - remove
export type Component<
  T extends keyof JSX.IntrinsicElements,
  P extends Record<string, unknown> = { children?: ReactNode },
> = FC<ComponentProps<T, P>>;

export type Override<
  T extends Record<string, unknown>,
  P extends Record<string, unknown>,
> = Omit<T, keyof P> & P;

export type CustomAppProps = AppProps & { config: EnvConfig };
