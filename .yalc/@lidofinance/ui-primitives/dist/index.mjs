import {jsx as $9LU3C$jsx, jsxs as $9LU3C$jsxs} from "react/jsx-runtime";
import {useCallback as $9LU3C$useCallback} from "react";
import {useRouter as $9LU3C$useRouter} from "next/router";
import $9LU3C$nextlink from "next/link";
import $9LU3C$styledcomponents from "styled-components";
import {Block as $9LU3C$Block, useBreakpoint as $9LU3C$useBreakpoint, IdenticonBadge as $9LU3C$IdenticonBadge, InlineLoader as $9LU3C$InlineLoader} from "@lidofinance/lido-ui";
import $9LU3C$copytoclipboard from "copy-to-clipboard";

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
var $2edec60da2794fb1$exports = {};
var $15053db04efb3bba$exports = {};
var $89f5730a736d4546$exports = {};

$parcel$export($89f5730a736d4546$exports, "LocalLink", function () { return $89f5730a736d4546$export$eaf41e22530ae68d; });




const $89f5730a736d4546$export$eaf41e22530ae68d = (props)=>{
    const { href: href , ...rest } = props;
    const router = (0, $9LU3C$useRouter)();
    // TODO: for `ref` and `embed` (Andrey) do we need it?
    const { ref: ref , embed: embed  } = router.query;
    const extraQuery = {};
    if (ref) extraQuery.ref = ref;
    if (embed) extraQuery.embed = embed;
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$nextlink), {
        ...rest,
        href: {
            pathname: href,
            query: extraQuery
        }
    });
};


var $b79613d19ba93c17$exports = {};


$parcel$exportWildcard($15053db04efb3bba$exports, $89f5730a736d4546$exports);
$parcel$exportWildcard($15053db04efb3bba$exports, $b79613d19ba93c17$exports);


var $bee4c5e5a65c56cf$exports = {};
var $31d06770d11bf20e$exports = {};
var $14bfac055f2980c0$exports = {};

$parcel$export($14bfac055f2980c0$exports, "WalletCard", function () { return $14bfac055f2980c0$export$fa10365278598d8a; });




let $cca444b4a3633fd1$var$_ = (t)=>t, $cca444b4a3633fd1$var$t;
const $cca444b4a3633fd1$export$fe8257908279ce23 = (0, $9LU3C$styledcomponents)((0, $9LU3C$Block))($cca444b4a3633fd1$var$t || ($cca444b4a3633fd1$var$t = $cca444b4a3633fd1$var$_`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  margin-bottom: ${0}px;
  padding-bottom: ${0}px;

  ${0} {
    padding-bottom: ${0}px;
  }
`), ({ theme: theme  })=>-theme.borderRadiusesMap.xl, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.xxl, ({ theme: theme  })=>theme.mediaQueries.md, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.lg);


const $14bfac055f2980c0$export$fa10365278598d8a = (props)=>{
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $cca444b4a3633fd1$export$fe8257908279ce23), {
        color: "accent",
        ...props
    });
};


var $89c2ac5a977e85c3$exports = {};


$parcel$exportWildcard($31d06770d11bf20e$exports, $14bfac055f2980c0$exports);
$parcel$exportWildcard($31d06770d11bf20e$exports, $89c2ac5a977e85c3$exports);


var $debd5b9d56016368$exports = {};
var $24f5534c5a2a2725$exports = {};

$parcel$export($24f5534c5a2a2725$exports, "WalletCardAccount", function () { return $24f5534c5a2a2725$export$36be84b4aed0dcaa; });




let $0fb84f8a31124cdc$var$_ = (t)=>t, $0fb84f8a31124cdc$var$t;
const $0fb84f8a31124cdc$export$125159fec6480082 = (0, $9LU3C$styledcomponents).div($0fb84f8a31124cdc$var$t || ($0fb84f8a31124cdc$var$t = $0fb84f8a31124cdc$var$_`
  align-self: stretch;
  display: flex;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  & > * {
    cursor: pointer;
  }
`));


const $24f5534c5a2a2725$export$36be84b4aed0dcaa = (props)=>{
    const { account: account , onClickCb: onClickCb , ...rest } = props;
    const isMobile = (0, $9LU3C$useBreakpoint)("md");
    const mobileSymbols = 3;
    const desktopSymbols = 6;
    const symbols = isMobile ? mobileSymbols : desktopSymbols;
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $0fb84f8a31124cdc$export$125159fec6480082), {
        ...rest,
        children: /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$IdenticonBadge), {
            address: account !== null && account !== void 0 ? account : "",
            symbols: symbols,
            onClick: onClickCb,
            color: "accent"
        })
    });
};


$parcel$exportWildcard($debd5b9d56016368$exports, $24f5534c5a2a2725$exports);


var $5e4f3f5938f09cef$exports = {};
var $f979852e26257adb$exports = {};

$parcel$export($f979852e26257adb$exports, "WalletCardBalance", function () { return $f979852e26257adb$export$976f47e15d5defb0; });




let $ca8b781e1b38cbcc$var$_ = (t)=>t, $ca8b781e1b38cbcc$var$t, $ca8b781e1b38cbcc$var$t1, $ca8b781e1b38cbcc$var$t2, $ca8b781e1b38cbcc$var$t3, $ca8b781e1b38cbcc$var$t4;
const $ca8b781e1b38cbcc$export$2d1cff8340d03905 = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t || ($ca8b781e1b38cbcc$var$t = $ca8b781e1b38cbcc$var$_`
  margin-right: 18px;
  flex-basis: 50%;
  flex-grow: 1;
  font-size: ${0}px;
  line-height: 1.6em;

  :last-child {
    margin-right: 0;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $ca8b781e1b38cbcc$export$e4ca13e82989524a = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t1 || ($ca8b781e1b38cbcc$var$t1 = $ca8b781e1b38cbcc$var$_``));
const $ca8b781e1b38cbcc$export$623cde957a5a324e = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t2 || ($ca8b781e1b38cbcc$var$t2 = $ca8b781e1b38cbcc$var$_`
  margin-top: 2px;
  font-size: ${0}px;
  line-height: 1.4em;
  font-weight: 800;
  white-space: nowrap;
`), ({ theme: theme , $small: $small  })=>$small ? theme.fontSizesMap.sm : theme.fontSizesMap.md);
const $ca8b781e1b38cbcc$export$ed3240b66ab7bcea = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t3 || ($ca8b781e1b38cbcc$var$t3 = $ca8b781e1b38cbcc$var$_`
  margin-top: 2px;
  opacity: 0.5;
`));
const $ca8b781e1b38cbcc$export$8dce4e443c8afd41 = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t4 || ($ca8b781e1b38cbcc$var$t4 = $ca8b781e1b38cbcc$var$_`
  margin-top: 8px;
  opacity: ${0};
  pointer-events: ${0};
`), ({ $hidden: $hidden  })=>$hidden ? 0 : 1, ({ $hidden: $hidden  })=>$hidden ? "none" : "auto");


const $f979852e26257adb$export$976f47e15d5defb0 = (props)=>{
    const { title: title , small: small = false , extra: extra , loading: loading = false , children: children , value: value , ...rest } = props;
    const hasExtra = extra != null;
    const hasChildren = children != null;
    return /*#__PURE__*/ (0, $9LU3C$jsxs)((0, $ca8b781e1b38cbcc$export$2d1cff8340d03905), {
        ...rest,
        children: [
            /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$e4ca13e82989524a), {
                children: title
            }),
            /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$623cde957a5a324e), {
                $small: small,
                children: loading ? /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$InlineLoader), {}) : value
            }),
            hasExtra && /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$ed3240b66ab7bcea), {
                children: loading ? /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$InlineLoader), {}) : extra
            }),
            hasChildren && /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$8dce4e443c8afd41), {
                $hidden: loading,
                children: children
            })
        ]
    });
};


var $4ca907ef309e3a2e$exports = {};


$parcel$exportWildcard($5e4f3f5938f09cef$exports, $f979852e26257adb$exports);
$parcel$exportWildcard($5e4f3f5938f09cef$exports, $4ca907ef309e3a2e$exports);


var $12f586c8987d12ce$exports = {};
var $85abde3fc4d2318a$exports = {};

$parcel$export($85abde3fc4d2318a$exports, "WalletCardRow", function () { return $85abde3fc4d2318a$export$7d0c76f6a0418e11; });



let $850e0b5661e19f5b$var$_ = (t)=>t, $850e0b5661e19f5b$var$t;
const $850e0b5661e19f5b$export$d700fd35c768af1d = (0, $9LU3C$styledcomponents).div($850e0b5661e19f5b$var$t || ($850e0b5661e19f5b$var$t = $850e0b5661e19f5b$var$_`
  display: flex;
  margin: ${0}px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`), ({ theme: theme  })=>theme.spaceMap.lg);


const $85abde3fc4d2318a$export$7d0c76f6a0418e11 = ({ ...rest })=>{
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $850e0b5661e19f5b$export$d700fd35c768af1d), {
        ...rest
    });
};


$parcel$exportWildcard($12f586c8987d12ce$exports, $85abde3fc4d2318a$exports);


var $cd9ba9fc910e1e75$exports = {};
var $69868d219c84490b$exports = {};

$parcel$export($69868d219c84490b$exports, "WalletFallback", function () { return $69868d219c84490b$export$db542de45b23291e; });




let $bf0a356b24b10b1a$var$_ = (t)=>t, $bf0a356b24b10b1a$var$t;
const $bf0a356b24b10b1a$export$37593eea88cd94ab = (0, $9LU3C$styledcomponents)((0, $14bfac055f2980c0$export$fa10365278598d8a))($bf0a356b24b10b1a$var$t || ($bf0a356b24b10b1a$var$t = $bf0a356b24b10b1a$var$_`
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`));


const $69868d219c84490b$export$db542de45b23291e = (props)=>{
    const { error: error  } = props;
    if (error) return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $bf0a356b24b10b1a$export$37593eea88cd94ab), {
        ...props,
        children: error
    });
    return null;
};


var $cfb603dffcd9b1e6$exports = {};


$parcel$exportWildcard($cd9ba9fc910e1e75$exports, $69868d219c84490b$exports);
$parcel$exportWildcard($cd9ba9fc910e1e75$exports, $cfb603dffcd9b1e6$exports);


$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $31d06770d11bf20e$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $debd5b9d56016368$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $5e4f3f5938f09cef$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $12f586c8987d12ce$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $cd9ba9fc910e1e75$exports);


$parcel$exportWildcard($2edec60da2794fb1$exports, $15053db04efb3bba$exports);
$parcel$exportWildcard($2edec60da2794fb1$exports, $bee4c5e5a65c56cf$exports);


var $2aef88d4808430da$exports = {};
var $769c4b98231bad39$exports = {};

$parcel$export($769c4b98231bad39$exports, "DATA_UNAVAILABLE", function () { return $769c4b98231bad39$export$4872120a4614b963; });
const $769c4b98231bad39$export$4872120a4614b963 = "N/A";


$parcel$exportWildcard($2aef88d4808430da$exports, $769c4b98231bad39$exports);


var $fb78df27aae727e9$exports = {};
var $7ed617aa6b701fa6$exports = {};

$parcel$export($7ed617aa6b701fa6$exports, "useCopyToClipboard", function () { return $7ed617aa6b701fa6$export$b2199c37e85de4a7; });


const $7ed617aa6b701fa6$export$b2199c37e85de4a7 = (text)=>{
    return (0, $9LU3C$useCallback)(()=>{
        (0, $9LU3C$copytoclipboard)(text);
    }, [
        text
    ]);
};


$parcel$exportWildcard($fb78df27aae727e9$exports, $7ed617aa6b701fa6$exports);




export {$89f5730a736d4546$export$eaf41e22530ae68d as LocalLink, $14bfac055f2980c0$export$fa10365278598d8a as WalletCard, $24f5534c5a2a2725$export$36be84b4aed0dcaa as WalletCardAccount, $f979852e26257adb$export$976f47e15d5defb0 as WalletCardBalance, $85abde3fc4d2318a$export$7d0c76f6a0418e11 as WalletCardRow, $69868d219c84490b$export$db542de45b23291e as WalletFallback, $769c4b98231bad39$export$4872120a4614b963 as DATA_UNAVAILABLE, $7ed617aa6b701fa6$export$b2199c37e85de4a7 as useCopyToClipboard};
//# sourceMappingURL=index.mjs.map
