import { Readable } from 'node:stream';
import { Counter } from 'prom-client';
import { iterateUrls } from '@lidofinance/rpc';
export const DEFAULT_API_ERROR_MESSAGE = 'Something went wrong. Sorry, try again later :(';
export const HEALTHY_RPC_SERVICES_ARE_OVER = 'Healthy RPC services are over!';
export class UnsupportedChainIdError extends Error {
    constructor(message) {
        super(message || 'Unsupported chainId');
    }
}
export class UnsupportedHTTPMethodError extends Error {
    constructor(message) {
        super(message || 'Unsupported HTTP method');
    }
}
export const rpcFactory = ({ metrics: { prefix, registry }, providers, fetchRPC, serverLogger = console, defaultChain, allowedRPCMethods, }) => {
    const rpcRequestBlocked = new Counter({
        name: prefix + 'rpc_service_request_blocked',
        help: 'RPC service request blocked',
        labelNames: [],
        registers: [],
    });
    registry.registerMetric(rpcRequestBlocked);
    return async (req, res) => {
        try {
            // Accept only POST requests
            if (req.method !== 'POST') {
                // We don't care about tracking blocked requests here
                throw new UnsupportedHTTPMethodError();
            }
            const chainId = Number(req.query.chainId || defaultChain);
            // Allow only chainId of specified chains
            if (providers[chainId] == null) {
                // We don't care about tracking blocked requests here
                throw new UnsupportedChainIdError();
            }
            // TODO: consider returning array of validators instead of throwing error right away
            // Check if provided methods are allowed
            for (const { method } of Array.isArray(req.body) ? req.body : [req.body]) {
                if (typeof method !== 'string') {
                    throw new Error(`RPC method isn't string`);
                }
                if (!allowedRPCMethods.includes(method)) {
                    rpcRequestBlocked.inc();
                    throw new Error(`RPC method ${method} isn't allowed`);
                }
            }
            const requested = await iterateUrls(providers[chainId], 
            // TODO: consider adding verification that body is actually matches FetchRpcInitBody
            (url) => fetchRPC(url, { body: req.body }, { chainId }), serverLogger.error);
            res.setHeader('Content-Type', requested.headers.get('Content-Type') ?? 'application/json');
            if (requested.body) {
                Readable.fromWeb(requested.body).pipe(res);
            }
            else {
                res.status(requested.status).json(await requested.text());
            }
        }
        catch (error) {
            if (error instanceof Error) {
                // TODO: check if there are errors duplication with iterateUrls
                serverLogger.error(error.message ?? DEFAULT_API_ERROR_MESSAGE);
                res.status(500).json(error.message ?? DEFAULT_API_ERROR_MESSAGE);
            }
            else {
                res.status(500).json(HEALTHY_RPC_SERVICES_ARE_OVER);
            }
        }
    };
};
