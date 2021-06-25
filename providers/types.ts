export type Provider<
  T extends Record<string, unknown> = Record<string, unknown>,
> = (props: { children?: React.ReactNode } & T) => JSX.Element;
