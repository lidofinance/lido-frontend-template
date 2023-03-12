import {getStatusLabel as $dU25M$getStatusLabel} from "@lidofinance/api-metrics";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bdaf63d697185839$exports = {};

$parcel$export($bdaf63d697185839$exports, "wrapRequest", function () { return $bdaf63d697185839$export$b77e87d9092b0632; });
const $bdaf63d697185839$export$b77e87d9092b0632 = (wrappers)=>(requestHandler)=>wrappers.reduce((acc, cur)=>(req, res)=>cur(req, res, ()=>acc(req, res)), requestHandler);


var $6ca930aaa4992525$exports = {};

$parcel$export($6ca930aaa4992525$exports, "defaultErrorHandler", function () { return $6ca930aaa4992525$export$74226d5f34b9550e; });
$parcel$export($6ca930aaa4992525$exports, "cacheControl", function () { return $6ca930aaa4992525$export$935bfe081ea97cf4; });
$parcel$export($6ca930aaa4992525$exports, "responseTimeMetric", function () { return $6ca930aaa4992525$export$156cbc8f54439240; });

var $b2dbcaa42773f73a$exports = {};

$parcel$export($b2dbcaa42773f73a$exports, "DEFAULT_API_ERROR_MESSAGE", function () { return $b2dbcaa42773f73a$export$c982278a0ddc4dbe; });
$parcel$export($b2dbcaa42773f73a$exports, "CACHE_DEFAULT_HEADERS", function () { return $b2dbcaa42773f73a$export$6bec5fc4117189a2; });
$parcel$export($b2dbcaa42773f73a$exports, "CACHE_DEFAULT_ERROR_HEADERS", function () { return $b2dbcaa42773f73a$export$a3368692186462a4; });
const $b2dbcaa42773f73a$export$c982278a0ddc4dbe = "Something went wrong.";
const $b2dbcaa42773f73a$export$6bec5fc4117189a2 = "public, max-age=180, stale-if-error=1200, stale-while-revalidate=60";
const $b2dbcaa42773f73a$export$a3368692186462a4 = "no-store, must-revalidate";



const $e74a3752b07b80f6$export$8cc545829c7461b0 = (error, defaultMessage)=>{
    if (typeof error === "string") return error;
    if (error instanceof Error) return error.message;
    return defaultMessage !== null && defaultMessage !== void 0 ? defaultMessage : (0, $b2dbcaa42773f73a$export$c982278a0ddc4dbe);
};


const $6ca930aaa4992525$export$74226d5f34b9550e = (args)=>{
    return async (req, res, next)=>{
        const { errorMessage: errorMessage = (0, $b2dbcaa42773f73a$export$c982278a0ddc4dbe) , serverLogger: serverLogger  } = args || {};
        try {
            await (next === null || next === void 0 ? void 0 : next(req, res, next));
        } catch (error) {
            const isInnerError = res.statusCode === 200;
            const status = isInnerError ? 500 : res.statusCode || 500;
            if (error instanceof Error) {
                serverLogger === null || serverLogger === void 0 ? void 0 : serverLogger.error((0, $e74a3752b07b80f6$export$8cc545829c7461b0)(error, errorMessage));
                res.status(status).json({
                    message: (0, $e74a3752b07b80f6$export$8cc545829c7461b0)(error, errorMessage)
                });
            } else res.status(status).json({
                message: errorMessage
            });
        }
    };
};
const $6ca930aaa4992525$export$935bfe081ea97cf4 = (args)=>{
    return async (req, res, next)=>{
        const { headers: headers = (0, $b2dbcaa42773f73a$export$6bec5fc4117189a2) , errorHeaders: errorHeaders = (0, $b2dbcaa42773f73a$export$a3368692186462a4)  } = args || {};
        try {
            res.setHeader("Cache-Control", headers);
            await (next === null || next === void 0 ? void 0 : next(req, res, next));
        } catch (error) {
            // for requests with cache-control headers
            // need set new headers otherwise error will be cached
            res.setHeader("Cache-Control", errorHeaders);
            // throw error up the stack
            throw error;
        }
    };
};
const $6ca930aaa4992525$export$156cbc8f54439240 = (metrics, route)=>{
    return async (req, res, next)=>{
        let status = "2xx";
        const endMetric = metrics.startTimer({
            route: route
        });
        try {
            await (next === null || next === void 0 ? void 0 : next(req, res, next));
            status = (0, $dU25M$getStatusLabel)(res.statusCode);
        } catch (error) {
            status = (0, $dU25M$getStatusLabel)(res.statusCode);
            // throw error up the stack
            throw error;
        } finally{
            endMetric({
                status: status
            });
        }
    };
};



var $f88c1e0fd4c47034$exports = {};




export {$bdaf63d697185839$export$b77e87d9092b0632 as wrapRequest, $6ca930aaa4992525$export$74226d5f34b9550e as defaultErrorHandler, $6ca930aaa4992525$export$935bfe081ea97cf4 as cacheControl, $6ca930aaa4992525$export$156cbc8f54439240 as responseTimeMetric, $b2dbcaa42773f73a$export$c982278a0ddc4dbe as DEFAULT_API_ERROR_MESSAGE, $b2dbcaa42773f73a$export$6bec5fc4117189a2 as CACHE_DEFAULT_HEADERS, $b2dbcaa42773f73a$export$a3368692186462a4 as CACHE_DEFAULT_ERROR_HEADERS};
//# sourceMappingURL=index.mjs.map
