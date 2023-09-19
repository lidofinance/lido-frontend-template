import "isomorphic-fetch";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $c4a16dc5cb85fe9d$exports = {};

$parcel$export($c4a16dc5cb85fe9d$exports, "fetchRpc", function () { return $c4a16dc5cb85fe9d$export$51ee03a558564558; });
const $c4a16dc5cb85fe9d$export$51ee03a558564558 = (url, init)=>fetch(url, {
        ...init,
        method: "POST",
        headers: {
            ...init.headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(init.body)
    });


var $83a6df06ccf0d0e9$exports = {};

$parcel$export($83a6df06ccf0d0e9$exports, "ExhaustedIterationError", function () { return $83a6df06ccf0d0e9$export$544290ca59c30f2b; });
$parcel$export($83a6df06ccf0d0e9$exports, "iterateUrls", function () { return $83a6df06ccf0d0e9$export$874e79e4fbe19379; });
class $83a6df06ccf0d0e9$export$544290ca59c30f2b extends Error {
    constructor(message){
        super(message ?? "Iteration ended without success");
    }
}
const $83a6df06ccf0d0e9$export$874e79e4fbe19379 = async (urls, callback, onError)=>{
    let lastResponse;
    let lastError;
    for (const url of urls)try {
        const response = await callback(url);
        lastResponse = response;
        // We want to return first succeeded response
        if (typeof Response !== "undefined" && response instanceof Response && !response.ok) continue;
        return response;
    } catch (error) {
        onError?.(error);
        lastError = error;
    }
    // If there are no succeeded responses, return last not thrown
    if (lastResponse != null) return lastResponse;
    // If there are no responses at all, throw last error
    if (lastError != null) throw lastError;
    // This should not be reachable
    throw new $83a6df06ccf0d0e9$export$544290ca59c30f2b();
};




export {$c4a16dc5cb85fe9d$export$51ee03a558564558 as fetchRpc, $83a6df06ccf0d0e9$export$544290ca59c30f2b as ExhaustedIterationError, $83a6df06ccf0d0e9$export$874e79e4fbe19379 as iterateUrls};
//# sourceMappingURL=index.mjs.map
