var $41D0Z$reactjsxruntime = require("react/jsx-runtime");
var $41D0Z$lidofinancelidoui = require("@lidofinance/lido-ui");
var $41D0Z$styledcomponents = require("styled-components");
var $41D0Z$process = require("process");
var $41D0Z$fs = require("fs");
var $41D0Z$path = require("path");
var $41D0Z$graymatter = require("gray-matter");
var $41D0Z$remark = require("remark");
var $41D0Z$remarkhtml = require("remark-html");
var $41D0Z$remarkexternallinks = require("remark-external-links");
var $41D0Z$react = require("react");
var $41D0Z$nextrouter = require("next/router");
var $41D0Z$nextlink = require("next/link");
var $41D0Z$reefknotweb3react = require("@reef-knot/web3-react");
var $41D0Z$lidosdkconstants = require("@lido-sdk/constants");
var $41D0Z$lidosdkreact = require("@lido-sdk/react");
var $41D0Z$copytoclipboard = require("copy-to-clipboard");

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
var $f812b98c92824ab2$exports = {};
var $cc8b8a5508c6edd4$exports = {};
var $bac48d5c687a5510$exports = {};

$parcel$export($bac48d5c687a5510$exports, "Faq", function () { return $bac48d5c687a5510$export$7562e752e5ef1fad; });



let $f4ffaed52dfcc1d0$var$_ = (t)=>t, $f4ffaed52dfcc1d0$var$t;
const $f4ffaed52dfcc1d0$export$eb463a824a473e05 = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($f4ffaed52dfcc1d0$var$t || ($f4ffaed52dfcc1d0$var$t = $f4ffaed52dfcc1d0$var$_`
  p {
    margin: 0 0 1.6em;
  }

  p + ul,
  p + ol,
  ul + p,
  ol + p {
    margin-top: -1.6em;
  }

  ul > li,
  ol > li {
    margin-top: 0;
    margin-bottom: 0;

    & > p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: none;
  }
`));


const $bac48d5c687a5510$export$7562e752e5ef1fad = (props)=>{
    const { faqList: faqList  } = props;
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $41D0Z$reactjsxruntime.Fragment), {
        children: faqList.map(({ id: id , title: title , content: content  }, index)=>/*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $41D0Z$lidofinancelidoui.Accordion), {
                defaultExpanded: index === 0,
                summary: String(title),
                children: /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $f4ffaed52dfcc1d0$export$eb463a824a473e05), {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                })
            }, id))
    });
};


var $99468020df73a4cc$exports = {};


var $6a72821c8c345a3c$exports = {};


var $39d81cff88bd9aec$exports = {};

$parcel$export($39d81cff88bd9aec$exports, "getFaqList", function () { return $39d81cff88bd9aec$export$45c60b0bc8893fbe; });







const $39d81cff88bd9aec$var$faqDirectory = (0, ($parcel$interopDefault($41D0Z$path))).join($41D0Z$process.cwd(), "faq");
const $39d81cff88bd9aec$export$45c60b0bc8893fbe = async (list)=>{
    return Promise.all(list.map(async (id)=>{
        // TODO: Fetch from Netlify
        const fullPath = (0, ($parcel$interopDefault($41D0Z$path))).join($39d81cff88bd9aec$var$faqDirectory, `${id}.md`);
        const fileContents = (0, ($parcel$interopDefault($41D0Z$fs))).readFileSync(fullPath, "utf8");
        const matterResult = (0, ($parcel$interopDefault($41D0Z$graymatter)))(fileContents);
        const processedContent = await (0, ($parcel$interopDefault($41D0Z$remark)))().use((0, ($parcel$interopDefault($41D0Z$remarkexternallinks))), {
            target: "_blank",
            rel: [
                "nofollow",
                "noopener"
            ]
        }).use((0, ($parcel$interopDefault($41D0Z$remarkhtml)))).process(matterResult.content);
        const content = processedContent.toString();
        const title = String(matterResult.data.title || id);
        return {
            id: id,
            content: content,
            title: title
        };
    }));
};


$parcel$exportWildcard($cc8b8a5508c6edd4$exports, $bac48d5c687a5510$exports);
$parcel$exportWildcard($cc8b8a5508c6edd4$exports, $99468020df73a4cc$exports);
$parcel$exportWildcard($cc8b8a5508c6edd4$exports, $6a72821c8c345a3c$exports);
$parcel$exportWildcard($cc8b8a5508c6edd4$exports, $39d81cff88bd9aec$exports);


var $e91da9bc1433f42b$exports = {};
var $31d803d6a64351b5$exports = {};

$parcel$export($31d803d6a64351b5$exports, "LocalLink", function () { return $31d803d6a64351b5$export$eaf41e22530ae68d; });




const $31d803d6a64351b5$export$eaf41e22530ae68d = (props)=>{
    const { href: href , ...rest } = props;
    const router = (0, $41D0Z$nextrouter.useRouter)();
    // TODO: for `ref` and `embed` (Andrey) do we need it?
    const { ref: ref , embed: embed  } = router.query;
    const extraQuery = {};
    if (ref) extraQuery.ref = ref;
    if (embed) extraQuery.embed = embed;
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, ($parcel$interopDefault($41D0Z$nextlink))), {
        ...rest,
        href: {
            pathname: href,
            query: extraQuery
        }
    });
};


var $a84ec17ac1c5107b$exports = {};


$parcel$exportWildcard($e91da9bc1433f42b$exports, $31d803d6a64351b5$exports);
$parcel$exportWildcard($e91da9bc1433f42b$exports, $a84ec17ac1c5107b$exports);


var $962149836312035c$exports = {};
var $15ff73673169e132$exports = {};

$parcel$export($15ff73673169e132$exports, "Section", function () { return $15ff73673169e132$export$6e2c8f0811a474ce; });



let $8642870dcaaa815e$var$_ = (t)=>t, $8642870dcaaa815e$var$t, $8642870dcaaa815e$var$t1, $8642870dcaaa815e$var$t2, $8642870dcaaa815e$var$t3;
const $8642870dcaaa815e$export$cd87aee0bbf87c7e = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).section($8642870dcaaa815e$var$t || ($8642870dcaaa815e$var$t = $8642870dcaaa815e$var$_`
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.xxl);
const $8642870dcaaa815e$export$1bd64a0c872eae5f = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($8642870dcaaa815e$var$t1 || ($8642870dcaaa815e$var$t1 = $8642870dcaaa815e$var$_`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $8642870dcaaa815e$export$3cbb88b8e1425ee9 = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).h2($8642870dcaaa815e$var$t2 || ($8642870dcaaa815e$var$t2 = $8642870dcaaa815e$var$_`
  margin-right: auto;
  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.3em;
`), ({ theme: theme  })=>theme.fontSizesMap.md);
const $8642870dcaaa815e$export$41f4a0193a23e802 = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($8642870dcaaa815e$var$t3 || ($8642870dcaaa815e$var$t3 = $8642870dcaaa815e$var$_`
  margin-left: ${0}px;
  font-size: ${0}px;
  line-height: 1.5em;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.fontSizesMap.xxs);


const $15ff73673169e132$export$6e2c8f0811a474ce = (props)=>{
    const { title: title , headerDecorator: headerDecorator , children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsxs)((0, $8642870dcaaa815e$export$cd87aee0bbf87c7e), {
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsxs)((0, $8642870dcaaa815e$export$1bd64a0c872eae5f), {
                children: [
                    /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $8642870dcaaa815e$export$3cbb88b8e1425ee9), {
                        children: title
                    }),
                    headerDecorator && /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $8642870dcaaa815e$export$41f4a0193a23e802), {
                        children: headerDecorator
                    })
                ]
            }),
            children
        ]
    });
};


$parcel$exportWildcard($962149836312035c$exports, $15ff73673169e132$exports);


var $69db8755909407dc$exports = {};
var $f3b0f9e318fd86df$exports = {};
var $c4ae1644b1df147b$exports = {};

$parcel$export($c4ae1644b1df147b$exports, "FallbackWallet", function () { return $c4ae1644b1df147b$export$5d1acc5361300eff; });





const $7a17262398464a60$export$23759efdd2d2dae9 = ()=>{
    const { error: error  } = (0, $41D0Z$reefknotweb3react.useWeb3)();
    const { isUnsupported: isUnsupported , supportedChains: supportedChains  } = (0, $41D0Z$reefknotweb3react.useSupportedChains)();
    const chains = (0, $41D0Z$react.useMemo)(()=>{
        const _chains = supportedChains.map(({ chainId: chainId , name: name  })=>(0, $41D0Z$lidosdkconstants.CHAINS)[chainId] || name);
        const lastChain = _chains.pop();
        return [
            _chains.join(", "),
            lastChain
        ].filter((chain)=>chain).join(" or ");
    }, [
        supportedChains
    ]);
    if (isUnsupported) return `Unsupported chain. Please switch to ${chains} in your wallet`;
    return error === null || error === void 0 ? void 0 : error.message;
};



var $fc137a99170e55e2$exports = {};
var $829e9b0c5c7aff2f$exports = {};

$parcel$export($829e9b0c5c7aff2f$exports, "WalletCard", function () { return $829e9b0c5c7aff2f$export$fa10365278598d8a; });




let $e59ee56775ea31d8$var$_ = (t)=>t, $e59ee56775ea31d8$var$t;
const $e59ee56775ea31d8$export$fe8257908279ce23 = (0, ($parcel$interopDefault($41D0Z$styledcomponents)))((0, $41D0Z$lidofinancelidoui.Block))($e59ee56775ea31d8$var$t || ($e59ee56775ea31d8$var$t = $e59ee56775ea31d8$var$_`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  margin-bottom: ${0}px;
  padding-bottom: ${0}px;

  ${0} {
    padding-bottom: ${0}px;
  }
`), ({ theme: theme  })=>-theme.borderRadiusesMap.xl, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.xxl, ({ theme: theme  })=>theme.mediaQueries.md, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.lg);


const $829e9b0c5c7aff2f$export$fa10365278598d8a = (props)=>{
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $e59ee56775ea31d8$export$fe8257908279ce23), {
        color: "accent",
        ...props
    });
};


var $49c05fc6d54eab50$exports = {};


$parcel$exportWildcard($fc137a99170e55e2$exports, $829e9b0c5c7aff2f$exports);
$parcel$exportWildcard($fc137a99170e55e2$exports, $49c05fc6d54eab50$exports);


let $e1d849ff39566916$var$_ = (t)=>t, $e1d849ff39566916$var$t;
const $e1d849ff39566916$export$37593eea88cd94ab = (0, ($parcel$interopDefault($41D0Z$styledcomponents)))((0, $829e9b0c5c7aff2f$export$fa10365278598d8a))($e1d849ff39566916$var$t || ($e1d849ff39566916$var$t = $e1d849ff39566916$var$_`
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`));


const $c4ae1644b1df147b$export$5d1acc5361300eff = (props)=>{
    const error = (0, $7a17262398464a60$export$23759efdd2d2dae9)();
    if (error) return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $e1d849ff39566916$export$37593eea88cd94ab), {
        ...props,
        children: error
    });
    return null;
};


var $7481ee0a855ef4c1$exports = {};


$parcel$exportWildcard($f3b0f9e318fd86df$exports, $c4ae1644b1df147b$exports);
$parcel$exportWildcard($f3b0f9e318fd86df$exports, $7481ee0a855ef4c1$exports);


var $c9b8f94f888eda16$exports = {};
var $d7c2f13043dccb08$exports = {};

$parcel$export($d7c2f13043dccb08$exports, "TokenToWallet", function () { return $d7c2f13043dccb08$export$8c8f4b533d324773; });





let $eb3f121fc3df87e6$var$_ = (t)=>t, $eb3f121fc3df87e6$var$t;
const $eb3f121fc3df87e6$export$38a986a8dd613d5c = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).button($eb3f121fc3df87e6$var$t || ($eb3f121fc3df87e6$var$t = $eb3f121fc3df87e6$var$_`
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


const $d7c2f13043dccb08$export$8c8f4b533d324773 = (props)=>{
    const { address: address , ...rest } = props;
    const { addToken: addToken  } = (0, $41D0Z$lidosdkreact.useTokenToWallet)(address);
    if (!addToken) return null;
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $41D0Z$lidofinancelidoui.Tooltip), {
        placement: "bottomLeft",
        title: "Add tokens to wallet",
        children: /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $eb3f121fc3df87e6$export$38a986a8dd613d5c), {
            tabIndex: -1,
            onClick: addToken,
            ...rest
        })
    });
};


$parcel$exportWildcard($c9b8f94f888eda16$exports, $d7c2f13043dccb08$exports);



var $5f7eb0c04a209cf0$exports = {};
var $ff73dbbcec53aa22$exports = {};

$parcel$export($ff73dbbcec53aa22$exports, "WalletCardAccount", function () { return $ff73dbbcec53aa22$export$36be84b4aed0dcaa; });




let $e071e57fc1f1505d$var$_ = (t)=>t, $e071e57fc1f1505d$var$t;
const $e071e57fc1f1505d$export$125159fec6480082 = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($e071e57fc1f1505d$var$t || ($e071e57fc1f1505d$var$t = $e071e57fc1f1505d$var$_`
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


const $ff73dbbcec53aa22$export$36be84b4aed0dcaa = (props)=>{
    const { account: account , onClickCb: onClickCb , ...rest } = props;
    const isMobile = (0, $41D0Z$lidofinancelidoui.useBreakpoint)("md");
    const mobileSymbols = 3;
    const desktopSymbols = 6;
    const symbols = isMobile ? mobileSymbols : desktopSymbols;
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $e071e57fc1f1505d$export$125159fec6480082), {
        ...rest,
        children: /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $41D0Z$lidofinancelidoui.IdenticonBadge), {
            address: account !== null && account !== void 0 ? account : "",
            symbols: symbols,
            onClick: onClickCb,
            color: "accent"
        })
    });
};


$parcel$exportWildcard($5f7eb0c04a209cf0$exports, $ff73dbbcec53aa22$exports);


var $dc104a3cfac37534$exports = {};
var $dc56f960f8e379a3$exports = {};

$parcel$export($dc56f960f8e379a3$exports, "WalletCardBalance", function () { return $dc56f960f8e379a3$export$976f47e15d5defb0; });




let $1eacde4e26b66524$var$_ = (t)=>t, $1eacde4e26b66524$var$t, $1eacde4e26b66524$var$t1, $1eacde4e26b66524$var$t2, $1eacde4e26b66524$var$t3, $1eacde4e26b66524$var$t4;
const $1eacde4e26b66524$export$2d1cff8340d03905 = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($1eacde4e26b66524$var$t || ($1eacde4e26b66524$var$t = $1eacde4e26b66524$var$_`
  margin-right: 18px;
  flex-basis: 50%;
  flex-grow: 1;
  font-size: ${0}px;
  line-height: 1.6em;

  :last-child {
    margin-right: 0;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $1eacde4e26b66524$export$e4ca13e82989524a = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($1eacde4e26b66524$var$t1 || ($1eacde4e26b66524$var$t1 = $1eacde4e26b66524$var$_``));
const $1eacde4e26b66524$export$623cde957a5a324e = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($1eacde4e26b66524$var$t2 || ($1eacde4e26b66524$var$t2 = $1eacde4e26b66524$var$_`
  margin-top: 2px;
  font-size: ${0}px;
  line-height: 1.4em;
  font-weight: 800;
  white-space: nowrap;
`), ({ theme: theme , $small: $small  })=>$small ? theme.fontSizesMap.sm : theme.fontSizesMap.md);
const $1eacde4e26b66524$export$ed3240b66ab7bcea = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($1eacde4e26b66524$var$t3 || ($1eacde4e26b66524$var$t3 = $1eacde4e26b66524$var$_`
  margin-top: 2px;
  opacity: 0.5;
`));
const $1eacde4e26b66524$export$8dce4e443c8afd41 = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($1eacde4e26b66524$var$t4 || ($1eacde4e26b66524$var$t4 = $1eacde4e26b66524$var$_`
  margin-top: 8px;
  opacity: ${0};
  pointer-events: ${0};
`), ({ $hidden: $hidden  })=>$hidden ? 0 : 1, ({ $hidden: $hidden  })=>$hidden ? "none" : "auto");


const $dc56f960f8e379a3$export$976f47e15d5defb0 = (props)=>{
    const { title: title , small: small = false , extra: extra , loading: loading = false , children: children , value: value , ...rest } = props;
    const hasExtra = extra != null;
    const hasChildren = children != null;
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsxs)((0, $1eacde4e26b66524$export$2d1cff8340d03905), {
        ...rest,
        children: [
            /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $1eacde4e26b66524$export$e4ca13e82989524a), {
                children: title
            }),
            /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $1eacde4e26b66524$export$623cde957a5a324e), {
                $small: small,
                children: loading ? /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $41D0Z$lidofinancelidoui.InlineLoader), {}) : value
            }),
            hasExtra && /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $1eacde4e26b66524$export$ed3240b66ab7bcea), {
                children: loading ? /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $41D0Z$lidofinancelidoui.InlineLoader), {}) : extra
            }),
            hasChildren && /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $1eacde4e26b66524$export$8dce4e443c8afd41), {
                $hidden: loading,
                children: children
            })
        ]
    });
};


var $545e26adc3aea4d2$exports = {};


$parcel$exportWildcard($dc104a3cfac37534$exports, $dc56f960f8e379a3$exports);
$parcel$exportWildcard($dc104a3cfac37534$exports, $545e26adc3aea4d2$exports);


var $cc2f4aa216efbbda$exports = {};
var $16311673d4ed5791$exports = {};

$parcel$export($16311673d4ed5791$exports, "WalletCardRow", function () { return $16311673d4ed5791$export$7d0c76f6a0418e11; });



let $e0c76ff559ce91ed$var$_ = (t)=>t, $e0c76ff559ce91ed$var$t;
const $e0c76ff559ce91ed$export$d700fd35c768af1d = (0, ($parcel$interopDefault($41D0Z$styledcomponents))).div($e0c76ff559ce91ed$var$t || ($e0c76ff559ce91ed$var$t = $e0c76ff559ce91ed$var$_`
  display: flex;
  margin: ${0}px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`), ({ theme: theme  })=>theme.spaceMap.lg);


const $16311673d4ed5791$export$7d0c76f6a0418e11 = ({ ...rest })=>{
    return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $e0c76ff559ce91ed$export$d700fd35c768af1d), {
        ...rest
    });
};


$parcel$exportWildcard($cc2f4aa216efbbda$exports, $16311673d4ed5791$exports);


$parcel$exportWildcard($69db8755909407dc$exports, $f3b0f9e318fd86df$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $c9b8f94f888eda16$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $fc137a99170e55e2$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $5f7eb0c04a209cf0$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $dc104a3cfac37534$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $cc2f4aa216efbbda$exports);


$parcel$exportWildcard($f812b98c92824ab2$exports, $cc8b8a5508c6edd4$exports);
$parcel$exportWildcard($f812b98c92824ab2$exports, $e91da9bc1433f42b$exports);
$parcel$exportWildcard($f812b98c92824ab2$exports, $962149836312035c$exports);
$parcel$exportWildcard($f812b98c92824ab2$exports, $69db8755909407dc$exports);


var $4e3ab5b3c97613f6$exports = {};
var $d2b464fb2f5b381f$exports = {};

$parcel$export($d2b464fb2f5b381f$exports, "DATA_UNAVAILABLE", function () { return $d2b464fb2f5b381f$export$4872120a4614b963; });
const $d2b464fb2f5b381f$export$4872120a4614b963 = "N/A";


$parcel$exportWildcard($4e3ab5b3c97613f6$exports, $d2b464fb2f5b381f$exports);


var $ab1640a4ee939ad1$exports = {};
var $81fdd56ab370cc2c$exports = {};

$parcel$export($81fdd56ab370cc2c$exports, "useCopyToClipboard", function () { return $81fdd56ab370cc2c$export$b2199c37e85de4a7; });


const $81fdd56ab370cc2c$export$b2199c37e85de4a7 = (text)=>{
    return (0, $41D0Z$react.useCallback)(()=>{
        (0, ($parcel$interopDefault($41D0Z$copytoclipboard)))(text);
    }, [
        text
    ]);
};


$parcel$exportWildcard($ab1640a4ee939ad1$exports, $81fdd56ab370cc2c$exports);


var $e74efcd17907e7cd$exports = {};
var $79355003cd5eaada$exports = {};

$parcel$export($79355003cd5eaada$exports, "standardFetcher", function () { return $79355003cd5eaada$export$a265c7403141b2f4; });
const $79355003cd5eaada$var$DEFAULT_PARAMS = {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
};
const $79355003cd5eaada$export$a265c7403141b2f4 = async (url, params)=>{
    const response = await fetch(url, {
        ...$79355003cd5eaada$var$DEFAULT_PARAMS,
        ...params
    });
    if (!response.ok) throw new Error("An error occurred while fetching the data.");
    return response.json();
};


$parcel$exportWildcard($e74efcd17907e7cd$exports, $79355003cd5eaada$exports);


$parcel$exportWildcard(module.exports, $f812b98c92824ab2$exports);
$parcel$exportWildcard(module.exports, $4e3ab5b3c97613f6$exports);
$parcel$exportWildcard(module.exports, $ab1640a4ee939ad1$exports);
$parcel$exportWildcard(module.exports, $e74efcd17907e7cd$exports);


//# sourceMappingURL=index.cjs.map
