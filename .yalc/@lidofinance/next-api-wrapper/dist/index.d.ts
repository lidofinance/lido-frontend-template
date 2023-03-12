import { NextApiResponse, NextApiRequest } from "next";
import { ServerLogger } from "@lidofinance/api-logger";
import { Histogram } from "prom-client";
export type API<T = void> = (req: NextApiRequest, res: NextApiResponse) => Promise<T> | T;
export type RequestWrapper<T = void> = (req: NextApiRequest, res: NextApiResponse, next?: API<T> | RequestWrapper<T>) => Promise<T> | T;
export type MixedWrapper = <T = void>(api: API<T>) => RequestWrapper<T>;
export type DefaultErrorHandlerArgs = {
    errorMessage?: string;
    serverLogger?: ServerLogger;
};
export type CacheControlArgs = {
    headers?: string;
    errorHeaders?: string;
};
export const wrapRequest: <T = void>(wrappers: RequestWrapper<T>[]) => (requestHandler: API<T>) => RequestWrapper<T>;
export const DEFAULT_API_ERROR_MESSAGE = "Something went wrong.";
export const CACHE_DEFAULT_HEADERS = "public, max-age=180, stale-if-error=1200, stale-while-revalidate=60";
export const CACHE_DEFAULT_ERROR_HEADERS = "no-store, must-revalidate";
export const defaultErrorHandler: (args?: DefaultErrorHandlerArgs) => RequestWrapper;
export const cacheControl: (args?: CacheControlArgs) => RequestWrapper;
export const responseTimeMetric: (metrics: Histogram<string>, route: string) => RequestWrapper;

//# sourceMappingURL=index.d.ts.map
