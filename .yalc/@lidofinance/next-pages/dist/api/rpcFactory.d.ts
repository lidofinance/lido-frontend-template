import type { NextApiRequest, NextApiResponse } from 'next';
import { Registry } from 'prom-client';
import type { TrackedFetchRPC } from '@lidofinance/api-rpc';
import type { ServerLogger } from '@lidofinance/api-logger';
export type RpcProviders = Record<string | number, [string, ...string[]]>;
export declare const DEFAULT_API_ERROR_MESSAGE = "Something went wrong. Sorry, try again later :(";
export declare const HEALTHY_RPC_SERVICES_ARE_OVER = "Healthy RPC services are over!";
export declare class UnsupportedChainIdError extends Error {
    constructor(message?: string);
}
export declare class UnsupportedHTTPMethodError extends Error {
    constructor(message?: string);
}
export type RPCFactoryParams = {
    metrics: {
        prefix: string;
        registry: Registry;
    };
    providers: RpcProviders;
    fetchRPC: TrackedFetchRPC;
    /**
     * @deprecated you should mask logs via pino & satanizer, see policies
     * for additional details or reach out ui/secops
     */
    serverLogger?: ServerLogger;
    defaultChain: string | number;
    allowedRPCMethods: string[];
};
export declare const rpcFactory: ({ metrics: { prefix, registry }, providers, fetchRPC, serverLogger, defaultChain, allowedRPCMethods, }: RPCFactoryParams) => (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
//# sourceMappingURL=rpcFactory.d.ts.map