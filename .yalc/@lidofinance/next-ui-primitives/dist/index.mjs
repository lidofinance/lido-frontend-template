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
var $44bb3a54b8769ec1$exports = {};
var $5752003044ae7f91$exports = {};

$parcel$export($5752003044ae7f91$exports, "LidoLink", function () { return $5752003044ae7f91$export$d97afdf95912bfad; });




const $5752003044ae7f91$export$d97afdf95912bfad = (props)=>{
    const { href: href , external: external , ...rest } = props;
    const { // `ref` is needed for referral program
    // `embed` is needed for support of `staking widget` via iframe in `ledger-live`
    query: { ref: ref , embed: embed  }  } = (0, $7zhEJ$useRouter)();
    // Fix `Hydration failed...` when using `styled-component` with `next/link`
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-2622885
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-4166807
    const [mounted, setMounted] = (0, $7zhEJ$useState)(false);
    (0, $7zhEJ$useEffect)(()=>setMounted(true), []);
    if (!mounted) return null;
    if (external) return /*#__PURE__*/ (0, $7zhEJ$jsx)("a", {
        target: "_blank",
        ...props
    });
    const searchParams = new URLSearchParams();
    if (ref) searchParams === null || searchParams === void 0 ? void 0 : searchParams.set("ref", ref);
    if (embed) searchParams === null || searchParams === void 0 ? void 0 : searchParams.set("embed", embed);
    const searchParamsString = searchParams.toString();
    const queryString = searchParamsString ? `?${searchParamsString}` : "";
    const pathWithQuery = href + `${queryString}`;
    return /*#__PURE__*/ (0, $7zhEJ$jsx)((0, $7zhEJ$nextlink), {
        ...rest,
        href: pathWithQuery
    });
};


var $2804d34e8f9bfbcf$exports = {};


$parcel$exportWildcard($44bb3a54b8769ec1$exports, $5752003044ae7f91$exports);
$parcel$exportWildcard($44bb3a54b8769ec1$exports, $2804d34e8f9bfbcf$exports);


$parcel$exportWildcard($748bcbb776d77e87$exports, $44bb3a54b8769ec1$exports);




export {$5752003044ae7f91$export$d97afdf95912bfad as LidoLink};
//# sourceMappingURL=index.mjs.map
