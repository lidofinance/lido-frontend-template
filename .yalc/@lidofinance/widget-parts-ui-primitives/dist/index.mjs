import {jsx as $cqc51$jsx, jsxs as $cqc51$jsxs} from "react/jsx-runtime";
import {useMemo as $cqc51$useMemo, useCallback as $cqc51$useCallback} from "react";
import {useBreakpoint as $cqc51$useBreakpoint, IdenticonBadge as $cqc51$IdenticonBadge, Block as $cqc51$Block, Tooltip as $cqc51$Tooltip, InlineLoader as $cqc51$InlineLoader, ToastInfo as $cqc51$ToastInfo} from "@lidofinance/lido-ui";
import $cqc51$styledcomponents from "styled-components";
import {utils as $cqc51$utils, constants as $cqc51$constants} from "ethers";
import {useRouter as $cqc51$useRouter} from "next/router";
import $cqc51$nextlink from "next/link";
import {useWeb3 as $cqc51$useWeb3, useSupportedChains as $cqc51$useSupportedChains} from "@reef-knot/web3-react";
import {CHAINS as $cqc51$CHAINS} from "@lido-sdk/constants";
import {useTokenToWallet as $cqc51$useTokenToWallet} from "@lido-sdk/react";
import {useModal as $cqc51$useModal, WALLET_MODAL as $cqc51$WALLET_MODAL} from "@lidofinance/widget-parts-wallet-modal";
import $cqc51$copytoclipboard from "copy-to-clipboard";

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
var $923136ed2f7ac15c$exports = {};
var $103d883ed4798e2e$exports = {};

$parcel$export($103d883ed4798e2e$exports, "AddressBadge", function () { return $ec74824758b6a786$export$2e2bcd8739ae039; });





let $82efce1a3fb363a0$var$_ = (t)=>t, $82efce1a3fb363a0$var$t;
const $82efce1a3fb363a0$export$1afccb3bf4453be2 = (0, $cqc51$styledcomponents)((0, $cqc51$IdenticonBadge))($82efce1a3fb363a0$var$t || ($82efce1a3fb363a0$var$t = $82efce1a3fb363a0$var$_`
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  & > * {
    flex-shrink: 0;
  }

  & > :first-child {
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`));


// TODO: move to UI
const $ec74824758b6a786$var$AddressBadge = (props)=>{
    const { address: address , ...rest } = props;
    const isMobile = (0, $cqc51$useBreakpoint)("md");
    const mobileSymbols = 3;
    const desktopSymbols = 6;
    const symbols = isMobile ? mobileSymbols : desktopSymbols;
    return /*#__PURE__*/ (0, $cqc51$jsx)((0, $82efce1a3fb363a0$export$1afccb3bf4453be2), {
        symbols: symbols,
        address: address !== null && address !== void 0 ? address : "",
        ...rest
    });
};
var $ec74824758b6a786$export$2e2bcd8739ae039 = $ec74824758b6a786$var$AddressBadge;




var $afd4a47c2d70ca12$exports = {};

$parcel$export($afd4a47c2d70ca12$exports, "FormatToken", function () { return $35caf64245636567$export$2e2bcd8739ae039; });


var $602c00e770c1621d$exports = {};
var $27a2dc0d0fc943c0$exports = {};

$parcel$export($27a2dc0d0fc943c0$exports, "formatBalance", function () { return $27a2dc0d0fc943c0$export$cc3bc0b518c1c6b8; });

const { formatEther: $27a2dc0d0fc943c0$var$formatEther  } = (0, $cqc51$utils);
const { Zero: $27a2dc0d0fc943c0$var$Zero  } = (0, $cqc51$constants);
const $27a2dc0d0fc943c0$export$cc3bc0b518c1c6b8 = (balance = $27a2dc0d0fc943c0$var$Zero, maxDecimalDigits = 4)=>{
    const balanceString = $27a2dc0d0fc943c0$var$formatEther(balance);
    if (balanceString.includes(".")) {
        const parts = balanceString.split(".");
        return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
    }
    return balanceString;
};


$parcel$exportWildcard($602c00e770c1621d$exports, $27a2dc0d0fc943c0$exports);


// TODO: move to UI
const $35caf64245636567$var$FormatToken = (props)=>{
    const { amount: amount , symbol: symbol , approx: approx = false , ...rest } = props;
    const prefix = !approx || (amount === null || amount === void 0 ? void 0 : amount.isZero()) ? "" : "≈ ";
    return /*#__PURE__*/ (0, $cqc51$jsxs)("span", {
        ...rest,
        children: [
            prefix,
            (0, $27a2dc0d0fc943c0$export$cc3bc0b518c1c6b8)(amount),
            "\xa0",
            symbol
        ]
    });
};
var $35caf64245636567$export$2e2bcd8739ae039 = $35caf64245636567$var$FormatToken;




var $a213eb5cccc29eec$exports = {};

$parcel$export($a213eb5cccc29eec$exports, "LocalLink", function () { return $d5260c81c149afdf$export$2e2bcd8739ae039; });




const $d5260c81c149afdf$var$LocalLink = (props)=>{
    const { href: href , ...rest } = props;
    const router = (0, $cqc51$useRouter)();
    const { ref: ref , embed: embed  } = router.query;
    const extraQuery = {};
    if (ref) extraQuery.ref = ref;
    if (embed) extraQuery.embed = embed;
    return /*#__PURE__*/ (0, $cqc51$jsx)((0, $cqc51$nextlink), {
        ...rest,
        href: {
            pathname: href,
            query: extraQuery
        }
    });
};
var $d5260c81c149afdf$export$2e2bcd8739ae039 = $d5260c81c149afdf$var$LocalLink;


var $c5eb7ef5e0a8edf1$exports = {};


$parcel$exportWildcard($a213eb5cccc29eec$exports, $c5eb7ef5e0a8edf1$exports);


var $6ba32ae9483d16c0$exports = {};

$parcel$export($6ba32ae9483d16c0$exports, "Section", function () { return $160e36af9be126c6$export$2e2bcd8739ae039; });



let $725733803fab14ea$var$_ = (t)=>t, $725733803fab14ea$var$t, $725733803fab14ea$var$t1, $725733803fab14ea$var$t2, $725733803fab14ea$var$t3;
const $725733803fab14ea$export$cd87aee0bbf87c7e = (0, $cqc51$styledcomponents).section($725733803fab14ea$var$t || ($725733803fab14ea$var$t = $725733803fab14ea$var$_`
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.xxl);
const $725733803fab14ea$export$1bd64a0c872eae5f = (0, $cqc51$styledcomponents).div($725733803fab14ea$var$t1 || ($725733803fab14ea$var$t1 = $725733803fab14ea$var$_`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $725733803fab14ea$export$3cbb88b8e1425ee9 = (0, $cqc51$styledcomponents).h2($725733803fab14ea$var$t2 || ($725733803fab14ea$var$t2 = $725733803fab14ea$var$_`
  margin-right: auto;
  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.3em;
`), ({ theme: theme  })=>theme.fontSizesMap.md);
const $725733803fab14ea$export$41f4a0193a23e802 = (0, $cqc51$styledcomponents).div($725733803fab14ea$var$t3 || ($725733803fab14ea$var$t3 = $725733803fab14ea$var$_`
  margin-left: ${0}px;
  font-size: ${0}px;
  line-height: 1.5em;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.fontSizesMap.xxs);


// TODO: move to UI ???
const $160e36af9be126c6$var$Section = (props)=>{
    const { title: title , headerDecorator: headerDecorator , children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $cqc51$jsxs)((0, $725733803fab14ea$export$cd87aee0bbf87c7e), {
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, $cqc51$jsxs)((0, $725733803fab14ea$export$1bd64a0c872eae5f), {
                children: [
                    /*#__PURE__*/ (0, $cqc51$jsx)((0, $725733803fab14ea$export$3cbb88b8e1425ee9), {
                        children: title
                    }),
                    headerDecorator && /*#__PURE__*/ (0, $cqc51$jsx)((0, $725733803fab14ea$export$41f4a0193a23e802), {
                        children: headerDecorator
                    })
                ]
            }),
            children
        ]
    });
};
var $160e36af9be126c6$export$2e2bcd8739ae039 = $160e36af9be126c6$var$Section;




var $43f763c51e2b66b6$exports = {};
var $74a762ffab4ec409$exports = {};

$parcel$export($74a762ffab4ec409$exports, "FallbackWallet", function () { return $e69c7ce07a24e80d$export$2e2bcd8739ae039; });





const $2bee52b711318c0a$export$23759efdd2d2dae9 = ()=>{
    const { error: error  } = (0, $cqc51$useWeb3)();
    const { isUnsupported: isUnsupported , supportedChains: supportedChains  } = (0, $cqc51$useSupportedChains)();
    const chains = (0, $cqc51$useMemo)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const chains = supportedChains.map(({ chainId: chainId , name: name  })=>(0, $cqc51$CHAINS)[chainId] || name);
        const lastChain = chains.pop();
        return [
            chains.join(", "),
            lastChain
        ].filter((chain)=>chain).join(" or ");
    }, [
        supportedChains
    ]);
    if (isUnsupported) return `Unsupported chain. Please switch to ${chains} in your wallet`;
    return error === null || error === void 0 ? void 0 : error.message;
};



var $9c5e96ad49c70c0b$exports = {};

$parcel$export($9c5e96ad49c70c0b$exports, "WalletCard", function () { return $398fbe9556b1a705$export$2e2bcd8739ae039; });




let $dbd1ac3d8a1e9993$var$_ = (t)=>t, $dbd1ac3d8a1e9993$var$t;
const $dbd1ac3d8a1e9993$export$fe8257908279ce23 = (0, $cqc51$styledcomponents)((0, $cqc51$Block))($dbd1ac3d8a1e9993$var$t || ($dbd1ac3d8a1e9993$var$t = $dbd1ac3d8a1e9993$var$_`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  margin-bottom: ${0}px;
  padding-bottom: ${0}px;

  ${0} {
    padding-bottom: ${0}px;
  }
`), ({ theme: theme  })=>-theme.borderRadiusesMap.xl, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.xxl, ({ theme: theme  })=>theme.mediaQueries.md, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.lg);


const $398fbe9556b1a705$var$WalletCard = (props)=>{
    return /*#__PURE__*/ (0, $cqc51$jsx)((0, $dbd1ac3d8a1e9993$export$fe8257908279ce23), {
        color: "accent",
        ...props
    });
};
var $398fbe9556b1a705$export$2e2bcd8739ae039 = $398fbe9556b1a705$var$WalletCard;


var $09ad6b80cd733b79$exports = {};


$parcel$exportWildcard($9c5e96ad49c70c0b$exports, $09ad6b80cd733b79$exports);


let $44bfd61beb0adfca$var$_ = (t)=>t, $44bfd61beb0adfca$var$t;
const $44bfd61beb0adfca$export$37593eea88cd94ab = (0, $cqc51$styledcomponents)((0, $398fbe9556b1a705$export$2e2bcd8739ae039))($44bfd61beb0adfca$var$t || ($44bfd61beb0adfca$var$t = $44bfd61beb0adfca$var$_`
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`));


const $e69c7ce07a24e80d$var$FallbackWallet = (props)=>{
    const error = (0, $2bee52b711318c0a$export$23759efdd2d2dae9)();
    if (error) return /*#__PURE__*/ (0, $cqc51$jsx)((0, $44bfd61beb0adfca$export$37593eea88cd94ab), {
        ...props,
        children: error
    });
    return null;
};
var $e69c7ce07a24e80d$export$2e2bcd8739ae039 = $e69c7ce07a24e80d$var$FallbackWallet;


var $4a44d3217259092b$exports = {};


$parcel$exportWildcard($74a762ffab4ec409$exports, $4a44d3217259092b$exports);


var $95f24c943e8e426a$exports = {};

$parcel$export($95f24c943e8e426a$exports, "TokenToWallet", function () { return $61f6402152897310$export$2e2bcd8739ae039; });





let $ad871f3546128268$var$_ = (t)=>t, $ad871f3546128268$var$t;
const $ad871f3546128268$export$38a986a8dd613d5c = (0, $cqc51$styledcomponents).button($ad871f3546128268$var$t || ($ad871f3546128268$var$t = $ad871f3546128268$var$_`
  border: 0;
  padding: 0;
  width: 15px;
  height: 15px;
  line-height: 0;
  vertical-align: middle;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -2px;
  margin-left: 4px;
  background: var(--lido-color-accentDarken);

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: var(--lido-color-accentContrast);
    width: 7px;
    height: 1px;
    top: 7px;
    left: 4px;
    border-radius: 0.5px;
  }

  &:after {
    height: 7px;
    width: 1px;
    top: 4px;
    left: 7px;
  }
`));


const $61f6402152897310$var$TokenToWallet = (props)=>{
    const { address: address , ...rest } = props;
    const { addToken: addToken  } = (0, $cqc51$useTokenToWallet)(address);
    if (!addToken) return null;
    return /*#__PURE__*/ (0, $cqc51$jsx)((0, $cqc51$Tooltip), {
        placement: "bottomLeft",
        title: "Add tokens to wallet",
        children: /*#__PURE__*/ (0, $cqc51$jsx)((0, $ad871f3546128268$export$38a986a8dd613d5c), {
            tabIndex: -1,
            onClick: addToken,
            ...rest
        })
    });
};
var $61f6402152897310$export$2e2bcd8739ae039 = $61f6402152897310$var$TokenToWallet;





var $f8e16c193e133f49$exports = {};

$parcel$export($f8e16c193e133f49$exports, "WalletCardAccount", function () { return $cfc1303f6ebd532b$export$2e2bcd8739ae039; });





let $dc5c032917b4a39b$var$_ = (t)=>t, $dc5c032917b4a39b$var$t;
const $dc5c032917b4a39b$export$125159fec6480082 = (0, $cqc51$styledcomponents).div($dc5c032917b4a39b$var$t || ($dc5c032917b4a39b$var$t = $dc5c032917b4a39b$var$_`
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


const $cfc1303f6ebd532b$var$WalletCardAccount = (props)=>{
    const { account: account , ...rest } = props;
    const { openModal: openModal  } = (0, $cqc51$useModal)((0, $cqc51$WALLET_MODAL).wallet);
    return /*#__PURE__*/ (0, $cqc51$jsx)((0, $dc5c032917b4a39b$export$125159fec6480082), {
        ...rest,
        children: /*#__PURE__*/ (0, $cqc51$jsx)((0, $ec74824758b6a786$export$2e2bcd8739ae039), {
            address: account,
            onClick: openModal,
            color: "accent"
        })
    });
};
var $cfc1303f6ebd532b$export$2e2bcd8739ae039 = $cfc1303f6ebd532b$var$WalletCardAccount;




var $c1c036bfb4a84350$exports = {};

$parcel$export($c1c036bfb4a84350$exports, "WalletCardBalance", function () { return $2fe04c397bb42087$export$2e2bcd8739ae039; });




let $91558b63cd6cf5d5$var$_ = (t)=>t, $91558b63cd6cf5d5$var$t, $91558b63cd6cf5d5$var$t1, $91558b63cd6cf5d5$var$t2, $91558b63cd6cf5d5$var$t3, $91558b63cd6cf5d5$var$t4;
const $91558b63cd6cf5d5$export$2d1cff8340d03905 = (0, $cqc51$styledcomponents).div($91558b63cd6cf5d5$var$t || ($91558b63cd6cf5d5$var$t = $91558b63cd6cf5d5$var$_`
  margin-right: 18px;
  flex-basis: 50%;
  flex-grow: 1;
  font-size: ${0}px;
  line-height: 1.6em;

  :last-child {
    margin-right: 0;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $91558b63cd6cf5d5$export$e4ca13e82989524a = (0, $cqc51$styledcomponents).div($91558b63cd6cf5d5$var$t1 || ($91558b63cd6cf5d5$var$t1 = $91558b63cd6cf5d5$var$_``));
const $91558b63cd6cf5d5$export$623cde957a5a324e = (0, $cqc51$styledcomponents).div($91558b63cd6cf5d5$var$t2 || ($91558b63cd6cf5d5$var$t2 = $91558b63cd6cf5d5$var$_`
  margin-top: 2px;
  font-size: ${0}px;
  line-height: 1.4em;
  font-weight: 800;
  white-space: nowrap;
`), ({ theme: theme , $small: $small  })=>$small ? theme.fontSizesMap.sm : theme.fontSizesMap.md);
const $91558b63cd6cf5d5$export$ed3240b66ab7bcea = (0, $cqc51$styledcomponents).div($91558b63cd6cf5d5$var$t3 || ($91558b63cd6cf5d5$var$t3 = $91558b63cd6cf5d5$var$_`
  margin-top: 2px;
  opacity: 0.5;
`));
const $91558b63cd6cf5d5$export$8dce4e443c8afd41 = (0, $cqc51$styledcomponents).div($91558b63cd6cf5d5$var$t4 || ($91558b63cd6cf5d5$var$t4 = $91558b63cd6cf5d5$var$_`
  margin-top: 8px;
  opacity: ${0};
  pointer-events: ${0};
`), ({ $hidden: $hidden  })=>$hidden ? 0 : 1, ({ $hidden: $hidden  })=>$hidden ? "none" : "auto");


const $2fe04c397bb42087$var$WalletCardBalance = (props)=>{
    const { title: title , small: small = false , extra: extra , loading: loading = false , children: children , value: value , ...rest } = props;
    const hasExtra = !!extra;
    const hasChildren = !!children;
    return /*#__PURE__*/ (0, $cqc51$jsxs)((0, $91558b63cd6cf5d5$export$2d1cff8340d03905), {
        ...rest,
        children: [
            /*#__PURE__*/ (0, $cqc51$jsx)((0, $91558b63cd6cf5d5$export$e4ca13e82989524a), {
                children: title
            }),
            /*#__PURE__*/ (0, $cqc51$jsx)((0, $91558b63cd6cf5d5$export$623cde957a5a324e), {
                $small: small,
                children: loading ? /*#__PURE__*/ (0, $cqc51$jsx)((0, $cqc51$InlineLoader), {}) : value
            }),
            hasExtra && /*#__PURE__*/ (0, $cqc51$jsx)((0, $91558b63cd6cf5d5$export$ed3240b66ab7bcea), {
                children: loading ? /*#__PURE__*/ (0, $cqc51$jsx)((0, $cqc51$InlineLoader), {}) : extra
            }),
            hasChildren && /*#__PURE__*/ (0, $cqc51$jsx)((0, $91558b63cd6cf5d5$export$8dce4e443c8afd41), {
                $hidden: loading,
                children: children
            })
        ]
    });
};
var $2fe04c397bb42087$export$2e2bcd8739ae039 = $2fe04c397bb42087$var$WalletCardBalance;


var $324a4a7421c03786$exports = {};


$parcel$exportWildcard($c1c036bfb4a84350$exports, $324a4a7421c03786$exports);


$parcel$exportWildcard($43f763c51e2b66b6$exports, $74a762ffab4ec409$exports);
$parcel$exportWildcard($43f763c51e2b66b6$exports, $95f24c943e8e426a$exports);
$parcel$exportWildcard($43f763c51e2b66b6$exports, $9c5e96ad49c70c0b$exports);
$parcel$exportWildcard($43f763c51e2b66b6$exports, $f8e16c193e133f49$exports);
$parcel$exportWildcard($43f763c51e2b66b6$exports, $c1c036bfb4a84350$exports);


$parcel$exportWildcard($923136ed2f7ac15c$exports, $103d883ed4798e2e$exports);
$parcel$exportWildcard($923136ed2f7ac15c$exports, $afd4a47c2d70ca12$exports);
$parcel$exportWildcard($923136ed2f7ac15c$exports, $a213eb5cccc29eec$exports);
$parcel$exportWildcard($923136ed2f7ac15c$exports, $6ba32ae9483d16c0$exports);
$parcel$exportWildcard($923136ed2f7ac15c$exports, $43f763c51e2b66b6$exports);


var $75f8432b7a45a69c$exports = {};
var $2fcbc051caa86a22$exports = {};

$parcel$export($2fcbc051caa86a22$exports, "DATA_UNAVAILABLE", function () { return $2fcbc051caa86a22$export$4872120a4614b963; });
const $2fcbc051caa86a22$export$4872120a4614b963 = "N/A";


$parcel$exportWildcard($75f8432b7a45a69c$exports, $2fcbc051caa86a22$exports);


var $8f65bb60902e216c$exports = {};
var $3c2e791eb6eb053b$exports = {};

$parcel$export($3c2e791eb6eb053b$exports, "useCopyToClipboard", function () { return $3c2e791eb6eb053b$export$b2199c37e85de4a7; });



const $3c2e791eb6eb053b$export$b2199c37e85de4a7 = (text)=>{
    return (0, $cqc51$useCallback)(()=>{
        (0, $cqc51$copytoclipboard)(text);
        // TODO: without ToastInfo?
        (0, $cqc51$ToastInfo)("Copied to clipboard");
    }, [
        text
    ]);
};


$parcel$exportWildcard($8f65bb60902e216c$exports, $3c2e791eb6eb053b$exports);


var $d7cc169c16f2ba7d$exports = {};
var $80e37cad4f8c040a$exports = {};


$parcel$exportWildcard($d7cc169c16f2ba7d$exports, $80e37cad4f8c040a$exports);





export {$2fcbc051caa86a22$export$4872120a4614b963 as DATA_UNAVAILABLE, $3c2e791eb6eb053b$export$b2199c37e85de4a7 as useCopyToClipboard, $27a2dc0d0fc943c0$export$cc3bc0b518c1c6b8 as formatBalance};
//# sourceMappingURL=index.mjs.map
