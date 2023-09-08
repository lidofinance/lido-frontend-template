require("isomorphic-fetch");

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

var $3d6d7d97961b05c0$exports = {};

$parcel$export($3d6d7d97961b05c0$exports, "fetchRpc", function () { return $3d6d7d97961b05c0$export$51ee03a558564558; });
const $3d6d7d97961b05c0$export$51ee03a558564558 = (url, init)=>fetch(url, {
        ...init,
        method: "POST",
        headers: {
            ...init.headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(init.body)
    });


var $f5c96785547d6405$exports = {};

$parcel$export($f5c96785547d6405$exports, "ExhaustedIterationError", function () { return $f5c96785547d6405$export$544290ca59c30f2b; });
$parcel$export($f5c96785547d6405$exports, "iterateUrls", function () { return $f5c96785547d6405$export$874e79e4fbe19379; });
class $f5c96785547d6405$export$544290ca59c30f2b extends Error {
    constructor(message){
        super(message ?? "Iteration ended without success");
    }
}
const $f5c96785547d6405$export$874e79e4fbe19379 = async (urls, callback, onError)=>{
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
    throw new $f5c96785547d6405$export$544290ca59c30f2b();
};


$parcel$exportWildcard(module.exports, $3d6d7d97961b05c0$exports);
$parcel$exportWildcard(module.exports, $f5c96785547d6405$exports);


//# sourceMappingURL=index.cjs.map
