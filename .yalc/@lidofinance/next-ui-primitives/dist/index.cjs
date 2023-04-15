var $93xws$reactjsxruntime = require("react/jsx-runtime");
var $93xws$react = require("react");
var $93xws$nextrouter = require("next/router");
var $93xws$nextlink = require("next/link");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9eb49ab02efff021$exports = {};
var $d3b4970e2efa4eeb$exports = {};
var $466cb55d4d6a4bd9$exports = {};

$parcel$export($466cb55d4d6a4bd9$exports, "LidoLink", function () { return $466cb55d4d6a4bd9$export$d97afdf95912bfad; });




const $466cb55d4d6a4bd9$export$d97afdf95912bfad = (props)=>{
    const { href: href , external: external , ...rest } = props;
    const { // `ref` is needed for referral program
    // `embed` is needed for support of `staking widget` via iframe in `ledger-live`
    query: { ref: ref , embed: embed  }  } = (0, $93xws$nextrouter.useRouter)();
    // Fix `Hydration failed...` when using `styled-component` with `next/link`
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-2622885
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-4166807
    const [mounted, setMounted] = (0, $93xws$react.useState)(false);
    (0, $93xws$react.useEffect)(()=>setMounted(true), []);
    if (!mounted) return null;
    if (external) return /*#__PURE__*/ (0, $93xws$reactjsxruntime.jsx)("a", {
        target: "_blank",
        ...props
    });
    const searchParams = new URLSearchParams();
    if (ref) searchParams === null || searchParams === void 0 ? void 0 : searchParams.set("ref", ref);
    if (embed) searchParams === null || searchParams === void 0 ? void 0 : searchParams.set("embed", embed);
    const searchParamsString = searchParams.toString();
    const queryString = searchParamsString ? `?${searchParamsString}` : "";
    const pathWithQuery = href + `${queryString}`;
    return /*#__PURE__*/ (0, $93xws$reactjsxruntime.jsx)((0, ($parcel$interopDefault($93xws$nextlink))), {
        ...rest,
        href: pathWithQuery
    });
};


var $2db163e5be929f49$exports = {};


$parcel$exportWildcard($d3b4970e2efa4eeb$exports, $466cb55d4d6a4bd9$exports);
$parcel$exportWildcard($d3b4970e2efa4eeb$exports, $2db163e5be929f49$exports);


$parcel$exportWildcard($9eb49ab02efff021$exports, $d3b4970e2efa4eeb$exports);


$parcel$exportWildcard(module.exports, $9eb49ab02efff021$exports);


//# sourceMappingURL=index.cjs.map
