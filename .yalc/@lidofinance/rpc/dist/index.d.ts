export type FetchRpcInitBody = {
    jsonrpc: '1.0' | '2.0' | string;
    method: string;
    params?: unknown;
    id?: string | number | null;
};
export type FetchRpcInit = Omit<RequestInit, 'body' | 'method'> & {
    method?: 'POST';
    body: FetchRpcInitBody | FetchRpcInitBody[];
};
export type FetchRpc<Extension extends Record<string | number, unknown> | void = void> = (url: string, init: FetchRpcInit, extension: Extension) => Promise<Response>;
export const fetchRpc: FetchRpc;
export class ExhaustedIterationError extends Error {
    constructor(message?: string);
}
export const iterateUrls: <T>(urls: [string, ...string[]], callback: (url: string) => T | Promise<T>, onError?: ((error: unknown) => unknown) | undefined) => Promise<T>;

//# sourceMappingURL=index.d.ts.map
