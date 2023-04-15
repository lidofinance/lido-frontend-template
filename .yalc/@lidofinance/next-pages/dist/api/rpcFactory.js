"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpcFactory = exports.UnsupportedHTTPMethodError = exports.UnsupportedChainIdError = exports.HEALTHY_RPC_SERVICES_ARE_OVER = exports.DEFAULT_API_ERROR_MESSAGE = void 0;
const prom_client_1 = require("prom-client");
const rpc_1 = require("@lidofinance/rpc");
exports.DEFAULT_API_ERROR_MESSAGE = 'Something went wrong. Sorry, try again later :(';
exports.HEALTHY_RPC_SERVICES_ARE_OVER = 'Healthy RPC services are over!';
class UnsupportedChainIdError extends Error {
    constructor(message) {
        super(message || 'Unsupported chainId');
    }
}
exports.UnsupportedChainIdError = UnsupportedChainIdError;
class UnsupportedHTTPMethodError extends Error {
    constructor(message) {
        super(message || 'Unsupported HTTP method');
    }
}
exports.UnsupportedHTTPMethodError = UnsupportedHTTPMethodError;
const rpcFactory = ({ metrics: { prefix, registry }, providers, fetchRPC, serverLogger, defaultChain, allowedRPCMethods, }) => {
    const rpcRequestBlocked = new prom_client_1.Counter({
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
            const requested = await (0, rpc_1.iterateUrls)(providers[chainId], 
            // TODO: consider adding verification that body is actually matches FetchRpcInitBody
            (url) => fetchRPC(url, { body: req.body }, { chainId }), serverLogger.error);
            res.setHeader('Content-Type', requested.headers.get('Content-Type') ?? 'application/json');
            res.status(requested.status).send(requested.body);
        }
        catch (error) {
            if (error instanceof Error) {
                // TODO: check if there are errors duplication with iterateUrls
                serverLogger.error(error.message ?? exports.DEFAULT_API_ERROR_MESSAGE);
                res.status(500).json(error.message ?? exports.DEFAULT_API_ERROR_MESSAGE);
            }
            else {
                res.status(500).json(exports.HEALTHY_RPC_SERVICES_ARE_OVER);
            }
        }
    };
};
exports.rpcFactory = rpcFactory;
