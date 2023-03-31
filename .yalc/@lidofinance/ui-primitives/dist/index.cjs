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


var $69db8755909407dc$exports = {};
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


var $20047e2ea2e5f098$exports = {};
var $35ce4da3f038e635$exports = {};

$parcel$export($35ce4da3f038e635$exports, "WalletFallback", function () { return $35ce4da3f038e635$export$db542de45b23291e; });




let $221726d8ec45542f$var$_ = (t)=>t, $221726d8ec45542f$var$t;
const $221726d8ec45542f$export$37593eea88cd94ab = (0, ($parcel$interopDefault($41D0Z$styledcomponents)))((0, $829e9b0c5c7aff2f$export$fa10365278598d8a))($221726d8ec45542f$var$t || ($221726d8ec45542f$var$t = $221726d8ec45542f$var$_`
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`));


const $35ce4da3f038e635$export$db542de45b23291e = (props)=>{
    const { error: error  } = props;
    if (error) return /*#__PURE__*/ (0, $41D0Z$reactjsxruntime.jsx)((0, $221726d8ec45542f$export$37593eea88cd94ab), {
        ...props,
        children: error
    });
    return null;
};


var $6855ad9057b75c52$exports = {};


$parcel$exportWildcard($20047e2ea2e5f098$exports, $35ce4da3f038e635$exports);
$parcel$exportWildcard($20047e2ea2e5f098$exports, $6855ad9057b75c52$exports);


$parcel$exportWildcard($69db8755909407dc$exports, $fc137a99170e55e2$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $5f7eb0c04a209cf0$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $dc104a3cfac37534$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $cc2f4aa216efbbda$exports);
$parcel$exportWildcard($69db8755909407dc$exports, $20047e2ea2e5f098$exports);


$parcel$exportWildcard($f812b98c92824ab2$exports, $cc8b8a5508c6edd4$exports);
$parcel$exportWildcard($f812b98c92824ab2$exports, $e91da9bc1433f42b$exports);
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
