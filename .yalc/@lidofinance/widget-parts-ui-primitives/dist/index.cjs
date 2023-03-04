var $7nGks$reactjsxruntime = require("react/jsx-runtime");
var $7nGks$react = require("react");
var $7nGks$lidofinancelidoui = require("@lidofinance/lido-ui");
var $7nGks$styledcomponents = require("styled-components");
var $7nGks$ethers = require("ethers");
var $7nGks$nextrouter = require("next/router");
var $7nGks$nextlink = require("next/link");
var $7nGks$reefknotweb3react = require("@reef-knot/web3-react");
var $7nGks$lidosdkconstants = require("@lido-sdk/constants");
var $7nGks$lidosdkreact = require("@lido-sdk/react");
var $7nGks$lidofinancewidgetpartswalletmodal = require("@lidofinance/widget-parts-wallet-modal");
var $7nGks$copytoclipboard = require("copy-to-clipboard");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $b582d1d9518be14b$exports = {};
var $be9141a1da942f5b$exports = {};

$parcel$export($be9141a1da942f5b$exports, "AddressBadge", function () { return $2bbebaba94aa6cae$export$2e2bcd8739ae039; });





let $fe29bdde94477ac6$var$_ = (t)=>t, $fe29bdde94477ac6$var$t;
const $fe29bdde94477ac6$export$1afccb3bf4453be2 = (0, ($parcel$interopDefault($7nGks$styledcomponents)))((0, $7nGks$lidofinancelidoui.IdenticonBadge))($fe29bdde94477ac6$var$t || ($fe29bdde94477ac6$var$t = $fe29bdde94477ac6$var$_`
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
const $2bbebaba94aa6cae$var$AddressBadge = (props)=>{
    const { address: address , ...rest } = props;
    const isMobile = (0, $7nGks$lidofinancelidoui.useBreakpoint)("md");
    const mobileSymbols = 3;
    const desktopSymbols = 6;
    const symbols = isMobile ? mobileSymbols : desktopSymbols;
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $fe29bdde94477ac6$export$1afccb3bf4453be2), {
        symbols: symbols,
        address: address !== null && address !== void 0 ? address : "",
        ...rest
    });
};
var $2bbebaba94aa6cae$export$2e2bcd8739ae039 = $2bbebaba94aa6cae$var$AddressBadge;




var $20a1c48b2739e288$exports = {};

$parcel$export($20a1c48b2739e288$exports, "FormatToken", function () { return $2144f2f9714f359c$export$2e2bcd8739ae039; });


var $f32a75f711eb8dbf$exports = {};
var $0678368a714475eb$exports = {};

$parcel$export($0678368a714475eb$exports, "formatBalance", function () { return $0678368a714475eb$export$cc3bc0b518c1c6b8; });

const { formatEther: $0678368a714475eb$var$formatEther  } = (0, $7nGks$ethers.utils);
const { Zero: $0678368a714475eb$var$Zero  } = (0, $7nGks$ethers.constants);
const $0678368a714475eb$export$cc3bc0b518c1c6b8 = (balance = $0678368a714475eb$var$Zero, maxDecimalDigits = 4)=>{
    const balanceString = $0678368a714475eb$var$formatEther(balance);
    if (balanceString.includes(".")) {
        const parts = balanceString.split(".");
        return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
    }
    return balanceString;
};


$parcel$exportWildcard($f32a75f711eb8dbf$exports, $0678368a714475eb$exports);


// TODO: move to UI
const $2144f2f9714f359c$var$FormatToken = (props)=>{
    const { amount: amount , symbol: symbol , approx: approx = false , ...rest } = props;
    const prefix = !approx || (amount === null || amount === void 0 ? void 0 : amount.isZero()) ? "" : "≈ ";
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsxs)("span", {
        ...rest,
        children: [
            prefix,
            (0, $0678368a714475eb$export$cc3bc0b518c1c6b8)(amount),
            "\xa0",
            symbol
        ]
    });
};
var $2144f2f9714f359c$export$2e2bcd8739ae039 = $2144f2f9714f359c$var$FormatToken;




var $2f504bd3a28c57c9$exports = {};

$parcel$export($2f504bd3a28c57c9$exports, "LocalLink", function () { return $ced8fa0dcea0a6db$export$2e2bcd8739ae039; });




const $ced8fa0dcea0a6db$var$LocalLink = (props)=>{
    const { href: href , ...rest } = props;
    const router = (0, $7nGks$nextrouter.useRouter)();
    const { ref: ref , embed: embed  } = router.query;
    const extraQuery = {};
    if (ref) extraQuery.ref = ref;
    if (embed) extraQuery.embed = embed;
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, ($parcel$interopDefault($7nGks$nextlink))), {
        ...rest,
        href: {
            pathname: href,
            query: extraQuery
        }
    });
};
var $ced8fa0dcea0a6db$export$2e2bcd8739ae039 = $ced8fa0dcea0a6db$var$LocalLink;


var $248338323415c305$exports = {};


$parcel$exportWildcard($2f504bd3a28c57c9$exports, $248338323415c305$exports);


var $0a500bf77d6f7319$exports = {};

$parcel$export($0a500bf77d6f7319$exports, "Section", function () { return $8acc15d1933928ba$export$2e2bcd8739ae039; });



let $5dd423063fb9dff4$var$_ = (t)=>t, $5dd423063fb9dff4$var$t, $5dd423063fb9dff4$var$t1, $5dd423063fb9dff4$var$t2, $5dd423063fb9dff4$var$t3;
const $5dd423063fb9dff4$export$cd87aee0bbf87c7e = (0, ($parcel$interopDefault($7nGks$styledcomponents))).section($5dd423063fb9dff4$var$t || ($5dd423063fb9dff4$var$t = $5dd423063fb9dff4$var$_`
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.xxl);
const $5dd423063fb9dff4$export$1bd64a0c872eae5f = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($5dd423063fb9dff4$var$t1 || ($5dd423063fb9dff4$var$t1 = $5dd423063fb9dff4$var$_`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $5dd423063fb9dff4$export$3cbb88b8e1425ee9 = (0, ($parcel$interopDefault($7nGks$styledcomponents))).h2($5dd423063fb9dff4$var$t2 || ($5dd423063fb9dff4$var$t2 = $5dd423063fb9dff4$var$_`
  margin-right: auto;
  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.3em;
`), ({ theme: theme  })=>theme.fontSizesMap.md);
const $5dd423063fb9dff4$export$41f4a0193a23e802 = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($5dd423063fb9dff4$var$t3 || ($5dd423063fb9dff4$var$t3 = $5dd423063fb9dff4$var$_`
  margin-left: ${0}px;
  font-size: ${0}px;
  line-height: 1.5em;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.fontSizesMap.xxs);


// TODO: move to UI ???
const $8acc15d1933928ba$var$Section = (props)=>{
    const { title: title , headerDecorator: headerDecorator , children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsxs)((0, $5dd423063fb9dff4$export$cd87aee0bbf87c7e), {
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsxs)((0, $5dd423063fb9dff4$export$1bd64a0c872eae5f), {
                children: [
                    /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $5dd423063fb9dff4$export$3cbb88b8e1425ee9), {
                        children: title
                    }),
                    headerDecorator && /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $5dd423063fb9dff4$export$41f4a0193a23e802), {
                        children: headerDecorator
                    })
                ]
            }),
            children
        ]
    });
};
var $8acc15d1933928ba$export$2e2bcd8739ae039 = $8acc15d1933928ba$var$Section;




var $c086826fbaadeccd$exports = {};
var $4943f0d112f9b527$exports = {};

$parcel$export($4943f0d112f9b527$exports, "FallbackWallet", function () { return $2a4d1d818441d0ed$export$2e2bcd8739ae039; });





const $c5c16c4b447cd8aa$export$23759efdd2d2dae9 = ()=>{
    const { error: error  } = (0, $7nGks$reefknotweb3react.useWeb3)();
    const { isUnsupported: isUnsupported , supportedChains: supportedChains  } = (0, $7nGks$reefknotweb3react.useSupportedChains)();
    const chains = (0, $7nGks$react.useMemo)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const chains = supportedChains.map(({ chainId: chainId , name: name  })=>(0, $7nGks$lidosdkconstants.CHAINS)[chainId] || name);
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



var $33e7c1d5f33ab601$exports = {};

$parcel$export($33e7c1d5f33ab601$exports, "WalletCard", function () { return $df70ae50b2c470dc$export$2e2bcd8739ae039; });




let $c5028ed8257db167$var$_ = (t)=>t, $c5028ed8257db167$var$t;
const $c5028ed8257db167$export$fe8257908279ce23 = (0, ($parcel$interopDefault($7nGks$styledcomponents)))((0, $7nGks$lidofinancelidoui.Block))($c5028ed8257db167$var$t || ($c5028ed8257db167$var$t = $c5028ed8257db167$var$_`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  margin-bottom: ${0}px;
  padding-bottom: ${0}px;

  ${0} {
    padding-bottom: ${0}px;
  }
`), ({ theme: theme  })=>-theme.borderRadiusesMap.xl, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.xxl, ({ theme: theme  })=>theme.mediaQueries.md, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.lg);


const $df70ae50b2c470dc$var$WalletCard = (props)=>{
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $c5028ed8257db167$export$fe8257908279ce23), {
        color: "accent",
        ...props
    });
};
var $df70ae50b2c470dc$export$2e2bcd8739ae039 = $df70ae50b2c470dc$var$WalletCard;


var $a9a2ccb6f9dcd648$exports = {};


$parcel$exportWildcard($33e7c1d5f33ab601$exports, $a9a2ccb6f9dcd648$exports);


let $4d918e810e705e2e$var$_ = (t)=>t, $4d918e810e705e2e$var$t;
const $4d918e810e705e2e$export$37593eea88cd94ab = (0, ($parcel$interopDefault($7nGks$styledcomponents)))((0, $df70ae50b2c470dc$export$2e2bcd8739ae039))($4d918e810e705e2e$var$t || ($4d918e810e705e2e$var$t = $4d918e810e705e2e$var$_`
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`));


const $2a4d1d818441d0ed$var$FallbackWallet = (props)=>{
    const error = (0, $c5c16c4b447cd8aa$export$23759efdd2d2dae9)();
    if (error) return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $4d918e810e705e2e$export$37593eea88cd94ab), {
        ...props,
        children: error
    });
    return null;
};
var $2a4d1d818441d0ed$export$2e2bcd8739ae039 = $2a4d1d818441d0ed$var$FallbackWallet;


var $9a069170d01e20ba$exports = {};


$parcel$exportWildcard($4943f0d112f9b527$exports, $9a069170d01e20ba$exports);


var $18d2968a6315067d$exports = {};

$parcel$export($18d2968a6315067d$exports, "TokenToWallet", function () { return $6ae1458d5a8202ee$export$2e2bcd8739ae039; });





let $5f1ef32ce235977f$var$_ = (t)=>t, $5f1ef32ce235977f$var$t;
const $5f1ef32ce235977f$export$38a986a8dd613d5c = (0, ($parcel$interopDefault($7nGks$styledcomponents))).button($5f1ef32ce235977f$var$t || ($5f1ef32ce235977f$var$t = $5f1ef32ce235977f$var$_`
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


const $6ae1458d5a8202ee$var$TokenToWallet = (props)=>{
    const { address: address , ...rest } = props;
    const { addToken: addToken  } = (0, $7nGks$lidosdkreact.useTokenToWallet)(address);
    if (!addToken) return null;
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $7nGks$lidofinancelidoui.Tooltip), {
        placement: "bottomLeft",
        title: "Add tokens to wallet",
        children: /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $5f1ef32ce235977f$export$38a986a8dd613d5c), {
            tabIndex: -1,
            onClick: addToken,
            ...rest
        })
    });
};
var $6ae1458d5a8202ee$export$2e2bcd8739ae039 = $6ae1458d5a8202ee$var$TokenToWallet;





var $37e27f8128fa258c$exports = {};

$parcel$export($37e27f8128fa258c$exports, "WalletCardAccount", function () { return $b7ff0ffcbaf971b5$export$2e2bcd8739ae039; });





let $6760760a48ccc2a4$var$_ = (t)=>t, $6760760a48ccc2a4$var$t;
const $6760760a48ccc2a4$export$125159fec6480082 = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($6760760a48ccc2a4$var$t || ($6760760a48ccc2a4$var$t = $6760760a48ccc2a4$var$_`
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


const $b7ff0ffcbaf971b5$var$WalletCardAccount = (props)=>{
    const { account: account , ...rest } = props;
    const { openModal: openModal  } = (0, $7nGks$lidofinancewidgetpartswalletmodal.useModal)((0, $7nGks$lidofinancewidgetpartswalletmodal.WALLET_MODAL).wallet);
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $6760760a48ccc2a4$export$125159fec6480082), {
        ...rest,
        children: /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $2bbebaba94aa6cae$export$2e2bcd8739ae039), {
            address: account,
            onClick: openModal,
            color: "accent"
        })
    });
};
var $b7ff0ffcbaf971b5$export$2e2bcd8739ae039 = $b7ff0ffcbaf971b5$var$WalletCardAccount;




var $9eb60cbb1c15d5b4$exports = {};

$parcel$export($9eb60cbb1c15d5b4$exports, "WalletCardBalance", function () { return $f6cb242f61ed2cc4$export$2e2bcd8739ae039; });




let $121d75747159b7aa$var$_ = (t)=>t, $121d75747159b7aa$var$t, $121d75747159b7aa$var$t1, $121d75747159b7aa$var$t2, $121d75747159b7aa$var$t3, $121d75747159b7aa$var$t4;
const $121d75747159b7aa$export$2d1cff8340d03905 = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($121d75747159b7aa$var$t || ($121d75747159b7aa$var$t = $121d75747159b7aa$var$_`
  margin-right: 18px;
  flex-basis: 50%;
  flex-grow: 1;
  font-size: ${0}px;
  line-height: 1.6em;

  :last-child {
    margin-right: 0;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $121d75747159b7aa$export$e4ca13e82989524a = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($121d75747159b7aa$var$t1 || ($121d75747159b7aa$var$t1 = $121d75747159b7aa$var$_``));
const $121d75747159b7aa$export$623cde957a5a324e = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($121d75747159b7aa$var$t2 || ($121d75747159b7aa$var$t2 = $121d75747159b7aa$var$_`
  margin-top: 2px;
  font-size: ${0}px;
  line-height: 1.4em;
  font-weight: 800;
  white-space: nowrap;
`), ({ theme: theme , $small: $small  })=>$small ? theme.fontSizesMap.sm : theme.fontSizesMap.md);
const $121d75747159b7aa$export$ed3240b66ab7bcea = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($121d75747159b7aa$var$t3 || ($121d75747159b7aa$var$t3 = $121d75747159b7aa$var$_`
  margin-top: 2px;
  opacity: 0.5;
`));
const $121d75747159b7aa$export$8dce4e443c8afd41 = (0, ($parcel$interopDefault($7nGks$styledcomponents))).div($121d75747159b7aa$var$t4 || ($121d75747159b7aa$var$t4 = $121d75747159b7aa$var$_`
  margin-top: 8px;
  opacity: ${0};
  pointer-events: ${0};
`), ({ $hidden: $hidden  })=>$hidden ? 0 : 1, ({ $hidden: $hidden  })=>$hidden ? "none" : "auto");


const $f6cb242f61ed2cc4$var$WalletCardBalance = (props)=>{
    const { title: title , small: small = false , extra: extra , loading: loading = false , children: children , value: value , ...rest } = props;
    const hasExtra = !!extra;
    const hasChildren = !!children;
    return /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsxs)((0, $121d75747159b7aa$export$2d1cff8340d03905), {
        ...rest,
        children: [
            /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $121d75747159b7aa$export$e4ca13e82989524a), {
                children: title
            }),
            /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $121d75747159b7aa$export$623cde957a5a324e), {
                $small: small,
                children: loading ? /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $7nGks$lidofinancelidoui.InlineLoader), {}) : value
            }),
            hasExtra && /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $121d75747159b7aa$export$ed3240b66ab7bcea), {
                children: loading ? /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $7nGks$lidofinancelidoui.InlineLoader), {}) : extra
            }),
            hasChildren && /*#__PURE__*/ (0, $7nGks$reactjsxruntime.jsx)((0, $121d75747159b7aa$export$8dce4e443c8afd41), {
                $hidden: loading,
                children: children
            })
        ]
    });
};
var $f6cb242f61ed2cc4$export$2e2bcd8739ae039 = $f6cb242f61ed2cc4$var$WalletCardBalance;


var $8d56e1a6120548cb$exports = {};


$parcel$exportWildcard($9eb60cbb1c15d5b4$exports, $8d56e1a6120548cb$exports);


$parcel$exportWildcard($c086826fbaadeccd$exports, $4943f0d112f9b527$exports);
$parcel$exportWildcard($c086826fbaadeccd$exports, $18d2968a6315067d$exports);
$parcel$exportWildcard($c086826fbaadeccd$exports, $33e7c1d5f33ab601$exports);
$parcel$exportWildcard($c086826fbaadeccd$exports, $37e27f8128fa258c$exports);
$parcel$exportWildcard($c086826fbaadeccd$exports, $9eb60cbb1c15d5b4$exports);


$parcel$exportWildcard($b582d1d9518be14b$exports, $be9141a1da942f5b$exports);
$parcel$exportWildcard($b582d1d9518be14b$exports, $20a1c48b2739e288$exports);
$parcel$exportWildcard($b582d1d9518be14b$exports, $2f504bd3a28c57c9$exports);
$parcel$exportWildcard($b582d1d9518be14b$exports, $0a500bf77d6f7319$exports);
$parcel$exportWildcard($b582d1d9518be14b$exports, $c086826fbaadeccd$exports);


var $6a2416df6ee388bf$exports = {};
var $acd53d6946c287c6$exports = {};

$parcel$export($acd53d6946c287c6$exports, "DATA_UNAVAILABLE", function () { return $acd53d6946c287c6$export$4872120a4614b963; });
const $acd53d6946c287c6$export$4872120a4614b963 = "N/A";


$parcel$exportWildcard($6a2416df6ee388bf$exports, $acd53d6946c287c6$exports);


var $a5b9efb1272e2e42$exports = {};
var $0cd7156ca49d65e8$exports = {};

$parcel$export($0cd7156ca49d65e8$exports, "useCopyToClipboard", function () { return $0cd7156ca49d65e8$export$b2199c37e85de4a7; });



const $0cd7156ca49d65e8$export$b2199c37e85de4a7 = (text)=>{
    return (0, $7nGks$react.useCallback)(()=>{
        (0, ($parcel$interopDefault($7nGks$copytoclipboard)))(text);
        // TODO: without ToastInfo?
        (0, $7nGks$lidofinancelidoui.ToastInfo)("Copied to clipboard");
    }, [
        text
    ]);
};


$parcel$exportWildcard($a5b9efb1272e2e42$exports, $0cd7156ca49d65e8$exports);


var $af5d252a43eab50d$exports = {};
var $d8c047f32c8d3b43$exports = {};


$parcel$exportWildcard($af5d252a43eab50d$exports, $d8c047f32c8d3b43$exports);



$parcel$exportWildcard(module.exports, $b582d1d9518be14b$exports);
$parcel$exportWildcard(module.exports, $6a2416df6ee388bf$exports);
$parcel$exportWildcard(module.exports, $a5b9efb1272e2e42$exports);
$parcel$exportWildcard(module.exports, $af5d252a43eab50d$exports);
$parcel$exportWildcard(module.exports, $f32a75f711eb8dbf$exports);


//# sourceMappingURL=index.cjs.map
