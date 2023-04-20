import {jsx as $7zhEJ$jsx} from "react/jsx-runtime";
import {useState as $7zhEJ$useState, useEffect as $7zhEJ$useEffect} from "react";
import {useRouter as $7zhEJ$useRouter} from "next/router";
import $7zhEJ$nextlink from "next/link";

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
var $748bcbb776d77e87$exports = {};
var $f4b56e66ba788353$exports = {};

$parcel$export($f4b56e66ba788353$exports, "LidoLink", function () { return $f4b56e66ba788353$export$d97afdf95912bfad; });




const $f4b56e66ba788353$export$d97afdf95912bfad = (props)=>{
    var _url_searchParams, _url_searchParams1;
    const { href: href , ...rest } = props;
    const { // `ref` is needed for referral program
    // `embed` is needed for support of `staking widget` via iframe in `ledger-live`
    query: { ref: ref , embed: embed  }  } = (0, $7zhEJ$useRouter)();
    // Fix `Hydration failed...` when using `styled-component` with `next/link`
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-2622885
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-4166807
    const [mounted, setMounted] = (0, $7zhEJ$useState)(false);
    (0, $7zhEJ$useEffect)(()=>setMounted(true), []);
    if (!mounted) return null;
    // Code below is only executed on the client side (due to line above)
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return /*#__PURE__*/ (0, $7zhEJ$jsx)("a", {
        target: "_blank",
        ...props,
        href: url.href
    });
    if (ref) (_url_searchParams = url.searchParams) === null || _url_searchParams === void 0 ? void 0 : _url_searchParams.set("ref", ref);
    if (embed) (_url_searchParams1 = url.searchParams) === null || _url_searchParams1 === void 0 ? void 0 : _url_searchParams1.set("embed", embed);
    return /*#__PURE__*/ (0, $7zhEJ$jsx)((0, $7zhEJ$nextlink), {
        ...rest,
        href: url.href
    });
};


$parcel$exportWildcard($748bcbb776d77e87$exports, $f4b56e66ba788353$exports);




export {$f4b56e66ba788353$export$d97afdf95912bfad as LidoLink};
//# sourceMappingURL=index.mjs.map
