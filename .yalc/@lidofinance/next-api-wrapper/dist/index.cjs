var $93IVf$lidofinanceapimetrics = require("@lidofinance/api-metrics");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b418837fe38f6af4$exports = {};

$parcel$export($b418837fe38f6af4$exports, "wrapRequest", function () { return $b418837fe38f6af4$export$b77e87d9092b0632; });
const $b418837fe38f6af4$export$b77e87d9092b0632 = (wrappers)=>(requestHandler)=>wrappers.reduce((acc, cur)=>(req, res)=>cur(req, res, ()=>acc(req, res)), requestHandler);


var $d48d8f2703fa966d$exports = {};

$parcel$export($d48d8f2703fa966d$exports, "defaultErrorHandler", function () { return $d48d8f2703fa966d$export$74226d5f34b9550e; });
$parcel$export($d48d8f2703fa966d$exports, "cacheControl", function () { return $d48d8f2703fa966d$export$935bfe081ea97cf4; });
$parcel$export($d48d8f2703fa966d$exports, "responseTimeMetric", function () { return $d48d8f2703fa966d$export$156cbc8f54439240; });

var $b042f7e98544cfc1$exports = {};

$parcel$export($b042f7e98544cfc1$exports, "DEFAULT_API_ERROR_MESSAGE", function () { return $b042f7e98544cfc1$export$c982278a0ddc4dbe; });
$parcel$export($b042f7e98544cfc1$exports, "CACHE_DEFAULT_HEADERS", function () { return $b042f7e98544cfc1$export$6bec5fc4117189a2; });
$parcel$export($b042f7e98544cfc1$exports, "CACHE_DEFAULT_ERROR_HEADERS", function () { return $b042f7e98544cfc1$export$a3368692186462a4; });
const $b042f7e98544cfc1$export$c982278a0ddc4dbe = "Something went wrong.";
const $b042f7e98544cfc1$export$6bec5fc4117189a2 = "public, max-age=180, stale-if-error=1200, stale-while-revalidate=60";
const $b042f7e98544cfc1$export$a3368692186462a4 = "no-store, must-revalidate";



const $ff2b7f149731334e$export$8cc545829c7461b0 = (error, defaultMessage)=>{
    if (typeof error === "string") return error;
    if (error instanceof Error) return error.message;
    return defaultMessage !== null && defaultMessage !== void 0 ? defaultMessage : (0, $b042f7e98544cfc1$export$c982278a0ddc4dbe);
};


const $d48d8f2703fa966d$export$74226d5f34b9550e = (args)=>{
    return async (req, res, next)=>{
        const { errorMessage: errorMessage = (0, $b042f7e98544cfc1$export$c982278a0ddc4dbe) , serverLogger: serverLogger  } = args || {};
        try {
            await (next === null || next === void 0 ? void 0 : next(req, res, next));
        } catch (error) {
            const isInnerError = res.statusCode === 200;
            const status = isInnerError ? 500 : res.statusCode || 500;
            if (error instanceof Error) {
                serverLogger === null || serverLogger === void 0 ? void 0 : serverLogger.error((0, $ff2b7f149731334e$export$8cc545829c7461b0)(error, errorMessage));
                res.status(status).json({
                    message: (0, $ff2b7f149731334e$export$8cc545829c7461b0)(error, errorMessage)
                });
            } else res.status(status).json({
                message: errorMessage
            });
        }
    };
};
const $d48d8f2703fa966d$export$935bfe081ea97cf4 = (args)=>{
    return async (req, res, next)=>{
        const { headers: headers = (0, $b042f7e98544cfc1$export$6bec5fc4117189a2) , errorHeaders: errorHeaders = (0, $b042f7e98544cfc1$export$a3368692186462a4)  } = args || {};
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
const $d48d8f2703fa966d$export$156cbc8f54439240 = (metrics, route)=>{
    return async (req, res, next)=>{
        let status = "2xx";
        const endMetric = metrics.startTimer({
            route: route
        });
        try {
            await (next === null || next === void 0 ? void 0 : next(req, res, next));
            status = (0, $93IVf$lidofinanceapimetrics.getStatusLabel)(res.statusCode);
        } catch (error) {
            status = (0, $93IVf$lidofinanceapimetrics.getStatusLabel)(res.statusCode);
            // throw error up the stack
            throw error;
        } finally{
            endMetric({
                status: status
            });
        }
    };
};



var $6025037db7f777fa$exports = {};


$parcel$exportWildcard(module.exports, $b418837fe38f6af4$exports);
$parcel$exportWildcard(module.exports, $d48d8f2703fa966d$exports);
$parcel$exportWildcard(module.exports, $b042f7e98544cfc1$exports);
$parcel$exportWildcard(module.exports, $6025037db7f777fa$exports);


//# sourceMappingURL=index.cjs.map
