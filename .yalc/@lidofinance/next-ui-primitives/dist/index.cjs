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
var $abd0d426949c0843$exports = {};

$parcel$export($abd0d426949c0843$exports, "LidoLink", function () { return $abd0d426949c0843$export$d97afdf95912bfad; });




const $abd0d426949c0843$export$d97afdf95912bfad = (props)=>{
    var _url_searchParams, _url_searchParams1;
    const { href: href , ...rest } = props;
    const { // `ref` is needed for referral program
    // `embed` is needed for support of `staking widget` via iframe in `ledger-live`
    query: { ref: ref , embed: embed  }  } = (0, $93xws$nextrouter.useRouter)();
    // Fix `Hydration failed...` when using `styled-component` with `next/link`
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-2622885
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-4166807
    const [mounted, setMounted] = (0, $93xws$react.useState)(false);
    (0, $93xws$react.useEffect)(()=>setMounted(true), []);
    if (!mounted) return null;
    // Code below is only executed on the client side (due to line above)
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return /*#__PURE__*/ (0, $93xws$reactjsxruntime.jsx)("a", {
        target: "_blank",
        ...props,
        href: url.href
    });
    if (ref) (_url_searchParams = url.searchParams) === null || _url_searchParams === void 0 ? void 0 : _url_searchParams.set("ref", ref);
    if (embed) (_url_searchParams1 = url.searchParams) === null || _url_searchParams1 === void 0 ? void 0 : _url_searchParams1.set("embed", embed);
    return /*#__PURE__*/ (0, $93xws$reactjsxruntime.jsx)((0, ($parcel$interopDefault($93xws$nextlink))), {
        ...rest,
        href: url.href
    });
};


$parcel$exportWildcard($9eb49ab02efff021$exports, $abd0d426949c0843$exports);


$parcel$exportWildcard(module.exports, $9eb49ab02efff021$exports);


//# sourceMappingURL=index.cjs.map
