var $80aVp$reactjsxruntime = require("react/jsx-runtime");
var $80aVp$react = require("react");
var $80aVp$lidofinancelidoui = require("@lidofinance/lido-ui");
var $80aVp$styledcomponents = require("styled-components");
var $80aVp$nextlink = require("next/link");
var $80aVp$nextrouter = require("next/router");
var $80aVp$lidofinanceuiprimitives = require("@lidofinance/ui-primitives");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "WidgetApp", function () { return $7c44329ccee85bb9$export$8e0cdabd0fe32f2d; });
$parcel$export(module.exports, "LayoutTitle", function () { return $dbdbbb46ef73198c$export$de4797fa0cf99ab6; });
$parcel$export(module.exports, "LayoutSubTitle", function () { return $dbdbbb46ef73198c$export$731f89f04b9d0607; });




let $14b8fd49eb37e50c$var$_ = (t)=>t, $14b8fd49eb37e50c$var$t;
const $14b8fd49eb37e50c$var$GlobalStyles = (0, $80aVp$styledcomponents.createGlobalStyle)($14b8fd49eb37e50c$var$t || ($14b8fd49eb37e50c$var$t = $14b8fd49eb37e50c$var$_`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
  }

  body {
    position: relative;
    box-sizing: border-box;

    font-size: ${0}px;
    line-height: 1.5em;
    font-weight: 500;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust
    text-size-adjust: none;

    background: var(--lido-color-background);
    color: var(--lido-color-text);
  }
  a {
    color: var(--lido-color-primary);

    &:hover {
      color: var(--lido-color-primaryHover);
    }

    &:visited {
      color: var(--lido-color-primaryVisited);
    }
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xs);
var $14b8fd49eb37e50c$export$2e2bcd8739ae039 = $14b8fd49eb37e50c$var$GlobalStyles;






let $3b51e8e45c2a2f25$var$_ = (t)=>t, $3b51e8e45c2a2f25$var$t, $3b51e8e45c2a2f25$var$t1, $3b51e8e45c2a2f25$var$t2, $3b51e8e45c2a2f25$var$t3, $3b51e8e45c2a2f25$var$t4, $3b51e8e45c2a2f25$var$t5, $3b51e8e45c2a2f25$var$t6;
const $3b51e8e45c2a2f25$export$51574cb47565ad4f = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Container))($3b51e8e45c2a2f25$var$t || ($3b51e8e45c2a2f25$var$t = $3b51e8e45c2a2f25$var$_`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${0} {
    padding-top: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $3b51e8e45c2a2f25$export$3e9753e910d67bc5 = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Divider))($3b51e8e45c2a2f25$var$t1 || ($3b51e8e45c2a2f25$var$t1 = $3b51e8e45c2a2f25$var$_`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${0} {
    margin-bottom: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $3b51e8e45c2a2f25$export$7b4485b886e9117a = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div($3b51e8e45c2a2f25$var$t2 || ($3b51e8e45c2a2f25$var$t2 = $3b51e8e45c2a2f25$var$_`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${0} {
    flex-basis: 100%;
    order: 2;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $3b51e8e45c2a2f25$export$531d2b9d9d383692 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div($3b51e8e45c2a2f25$var$t3 || ($3b51e8e45c2a2f25$var$t3 = $3b51e8e45c2a2f25$var$_`
  flex-grow: 1;
  margin-bottom: 40px;
  padding-right: 20px;

  &:last-child {
    padding-right: 0;
  }

  ${0} {
    flex-basis: 100%;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $3b51e8e45c2a2f25$export$53e4a0ea45e729a2 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).h4($3b51e8e45c2a2f25$var$t4 || ($3b51e8e45c2a2f25$var$t4 = $3b51e8e45c2a2f25$var$_`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.4em;
`), ({ theme: theme  })=>theme.fontSizesMap.sm);
const $3b51e8e45c2a2f25$export$655f131bfd3955dd = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div($3b51e8e45c2a2f25$var$t5 || ($3b51e8e45c2a2f25$var$t5 = $3b51e8e45c2a2f25$var$_`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${0}px;
  line-height: 1.6em;
`), ({ theme: theme  })=>theme.fontSizesMap.xs);
const $3b51e8e45c2a2f25$export$70ac745ffa2bea38 = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Link))($3b51e8e45c2a2f25$var$t6 || ($3b51e8e45c2a2f25$var$t6 = $3b51e8e45c2a2f25$var$_`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${0}px;
  line-height: 1.6em;
  text-decoration: none;
  opacity: 0.7;

  &,
  &:hover,
  &:visited {
    color: var(--lido-color-text);
  }

  &:hover {
    opacity: 1;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xs);


const $7d98dd07dc8f6815$var$Footer = ()=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $3b51e8e45c2a2f25$export$51574cb47565ad4f), {
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$3e9753e910d67bc5), {}),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$7b4485b886e9117a), {
                children: /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.LidoLogo), {})
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $3b51e8e45c2a2f25$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$53e4a0ea45e729a2), {
                        children: "Resources"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://stake.lido.fi/",
                        children: "Stake with Lido"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
                        children: "Primer"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/terms-of-use",
                        children: "Terms of Use"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/privacy-notice",
                        children: "Privacy Notice"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/faq",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/LIDO_press_kit.zip",
                        children: "Press Kit"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $3b51e8e45c2a2f25$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$53e4a0ea45e729a2), {
                        children: "Community"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://twitter.com/lidofinance",
                        children: "Twitter"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://t.me/lidofinance",
                        children: "Telegram"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://discord.gg/vgdPfhZ",
                        children: "Discord"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://github.com/lidofinance",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://www.reddit.com/r/LidoFinance/",
                        children: "Reddit"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://blog.lido.fi/",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $3b51e8e45c2a2f25$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$53e4a0ea45e729a2), {
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "mailto:info@lido.fi",
                        children: "info@lido.fi"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$70ac745ffa2bea38), {
                        href: "https://help.lido.fi/",
                        children: "Help Center"
                    }),
                    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b51e8e45c2a2f25$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            })
        ]
    });
var $7d98dd07dc8f6815$export$2e2bcd8739ae039 = $7d98dd07dc8f6815$var$Footer;












let $c420bc8b2b359a15$var$_ = (t)=>t, $c420bc8b2b359a15$var$t;
const $c420bc8b2b359a15$export$af0f646b086814d1 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div($c420bc8b2b359a15$var$t || ($c420bc8b2b359a15$var$t = $c420bc8b2b359a15$var$_`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`));


const $6c9b3dcd1f47cff5$export$223875819fd7cf93 = (props)=>{
    const { leftSlot: leftSlot  } = props;
    return /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $c420bc8b2b359a15$export$af0f646b086814d1), {
        children: /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $80aVp$reactjsxruntime.Fragment), {
            children: [
                leftSlot,
                /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.ThemeToggler), {})
            ]
        })
    });
};










let $ec8c7e2f9b35d8f1$var$_ = (t)=>t, $ec8c7e2f9b35d8f1$var$t;
const $ec8c7e2f9b35d8f1$export$25da3807dbd81a49 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).a($ec8c7e2f9b35d8f1$var$t || ($ec8c7e2f9b35d8f1$var$t = $ec8c7e2f9b35d8f1$var$_`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: ${0}px;
  line-height: 1.7em;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none !important;
  letter-spacing: 0.04em;
  color: var(--lido-color-secondary);

  opacity: ${0};
  cursor: pointer;

  :hover {
    color: var(--lido-color-secondary);
    opacity: 1;
  }
  :visited {
    color: var(--lido-color-secondary);
  }
  :not(:last-of-type) {
    margin-right: 32px;
  }

  svg {
    fill: ${0};
  }

  ${0} {
    flex-direction: column;
    text-transform: none;
    font-weight: 500;
    font-size: ${0}px;
    line-height: 1.2em;
    letter-spacing: 0;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xxxs, (props)=>props.active ? 1 : 0.8, ({ active: active  })=>active ? `var(--lido-color-primary)` : `var(--lido-color-secondary)`, ({ theme: theme  })=>theme.mediaQueries.lg, ({ theme: theme  })=>theme.fontSizesMap.xxxs);


const $94587fdd87edefce$export$721ee963a67379f1 = ({ icon: icon , title: title , href: href , external: external  })=>{
    // TODO: use ...rest for styling
    // const { icon, title, href, external } = props
    const router = (0, $80aVp$nextrouter.useRouter)();
    const searchParamsString = new URLSearchParams(router.query).toString();
    // TODO: for `ref` and `embed` (Andrey) do we need it?
    const queryString = searchParamsString ? `?${searchParamsString}` : "";
    const pathWithQuery = href + `${queryString}`;
    return external ? /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $ec8c7e2f9b35d8f1$export$25da3807dbd81a49), {
        href: pathWithQuery,
        active: router.pathname === href,
        target: "_blank",
        children: [
            icon,
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)("span", {
                children: title
            })
        ]
    }) : // Fix hydration error https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinanceuiprimitives.LocalLink), {
        href: href,
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $ec8c7e2f9b35d8f1$export$25da3807dbd81a49), {
            active: router.pathname === href,
            children: [
                icon,
                /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)("span", {
                    children: title
                })
            ]
        })
    });
};







let $0f0af5405694d290$var$_ = (t)=>t, $0f0af5405694d290$var$t, $0f0af5405694d290$var$t1, $0f0af5405694d290$var$t2;
const $0f0af5405694d290$export$7bc8c02c4f2d6836 = (0, $80aVp$styledcomponents.css)($0f0af5405694d290$var$t || ($0f0af5405694d290$var$t = $0f0af5405694d290$var$_`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`));
const $0f0af5405694d290$var$mobileCss = (0, $80aVp$styledcomponents.css)($0f0af5405694d290$var$t1 || ($0f0af5405694d290$var$t1 = $0f0af5405694d290$var$_`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  padding: 8px;
  margin: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: var(--lido-color-foreground);
  border-top: 1px solid var(--lido-color-border);

  svg {
    margin-right: 0;
    margin-bottom: 7px;
  }
`));
const $0f0af5405694d290$export$f8af16d8231e3b4e = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div($0f0af5405694d290$var$t2 || ($0f0af5405694d290$var$t2 = $0f0af5405694d290$var$_`
  ${0}

  ${0} {
    ${0}
  }

  z-index: 6;
`), $0f0af5405694d290$export$7bc8c02c4f2d6836, ({ theme: theme  })=>theme.mediaQueries.lg, $0f0af5405694d290$var$mobileCss);


const $a07f17e7c68bb26f$export$b8a61e5c71402559 = /*#__PURE__*/ (0, $80aVp$react.memo)((props)=>{
    const { links: links  } = props;
    if (!links) return /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$reactjsxruntime.Fragment), {});
    return /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $0f0af5405694d290$export$f8af16d8231e3b4e), {
        children: links.map((pageProps)=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $94587fdd87edefce$export$721ee963a67379f1), {
                ...pageProps
            }, pageProps.href))
    });
});
$a07f17e7c68bb26f$export$b8a61e5c71402559.displayName = "Navigation";








let $3b3e5656b8e7ca1c$var$_ = (t)=>t, $3b3e5656b8e7ca1c$var$t, $3b3e5656b8e7ca1c$var$t1;
const $3b3e5656b8e7ca1c$export$54a719cd6595ff5c = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Container))($3b3e5656b8e7ca1c$var$t || ($3b3e5656b8e7ca1c$var$t = $3b3e5656b8e7ca1c$var$_`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`));
const $3b3e5656b8e7ca1c$export$d69c4113bed92823 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div($3b3e5656b8e7ca1c$var$t1 || ($3b3e5656b8e7ca1c$var$t1 = $3b3e5656b8e7ca1c$var$_`
  overflow: hidden;
  flex-shrink: 0;

  ${0} {
    width: 14px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);


const $2b0c08c25f103129$var$Header = (props)=>{
    const { navigation: navigation , headerActions: headerActions  } = props;
    return /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $3b3e5656b8e7ca1c$export$54a719cd6595ff5c), {
        size: "full",
        forwardedAs: "header",
        children: [
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $3b3e5656b8e7ca1c$export$d69c4113bed92823), {
                children: /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, ($parcel$interopDefault($80aVp$nextlink))), {
                    href: "/",
                    passHref: true,
                    legacyBehavior: true,
                    children: /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.LidoLogo), {})
                })
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $a07f17e7c68bb26f$export$b8a61e5c71402559), {
                links: navigation
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $6c9b3dcd1f47cff5$export$223875819fd7cf93), {
                leftSlot: headerActions
            })
        ]
    });
};
var $2b0c08c25f103129$export$2e2bcd8739ae039 = $2b0c08c25f103129$var$Header;







let $5655d1d17c843cf7$var$_ = (t)=>t, $5655d1d17c843cf7$var$t;
const $5655d1d17c843cf7$export$1098d4de7cbde8b = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Container))($5655d1d17c843cf7$var$t || ($5655d1d17c843cf7$var$t = $5655d1d17c843cf7$var$_`
  position: relative;
  margin-top: ${0}px;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $7ed1e3306cce0384$var$Main = (props)=>{
    return /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $5655d1d17c843cf7$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });
};
var $7ed1e3306cce0384$export$2e2bcd8739ae039 = $7ed1e3306cce0384$var$Main;





let $dbdbbb46ef73198c$var$_ = (t)=>t, $dbdbbb46ef73198c$var$t, $dbdbbb46ef73198c$var$t1;
const $dbdbbb46ef73198c$export$de4797fa0cf99ab6 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).h1($dbdbbb46ef73198c$var$t || ($dbdbbb46ef73198c$var$t = $dbdbbb46ef73198c$var$_`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xl);
const $dbdbbb46ef73198c$export$731f89f04b9d0607 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).h2($dbdbbb46ef73198c$var$t1 || ($dbdbbb46ef73198c$var$t1 = $dbdbbb46ef73198c$var$_`
  margin-bottom: ${0}px;

  font-weight: 500;
  font-size: ${0}px;
  line-height: 1.5em;
  text-align: center;
  color: var(--lido-color-textSecondary);

  &:empty {
    display: none;
  }
`), ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);





// Migrations old cookies to new cross domain cookies
(0, $80aVp$lidofinancelidoui.migrationThemeCookiesToCrossDomainCookiesClientSide)();
const $7c44329ccee85bb9$export$8e0cdabd0fe32f2d = ({ ...props })=>{
    return /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $80aVp$lidofinancelidoui.CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $14b8fd49eb37e50c$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $2b0c08c25f103129$export$2e2bcd8739ae039), {
                headerActions: props.headerActions,
                navigation: props === null || props === void 0 ? void 0 : props.navigation
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $7ed1e3306cce0384$export$2e2bcd8739ae039), {
                children: props.children
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $7d98dd07dc8f6815$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.CookiesTooltip), {}),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.ToastContainer), {})
        ]
    });
};


//# sourceMappingURL=index.cjs.map
