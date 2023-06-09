var $80aVp$reactjsxruntime = require("react/jsx-runtime");
var $80aVp$react = require("react");
var $80aVp$lidofinancelidoui = require("@lidofinance/lido-ui");
var $80aVp$styledcomponents = require("styled-components");
var $80aVp$nextlink = require("next/link");
var $80aVp$nextrouter = require("next/router");
var $80aVp$lidofinancenextuiprimitives = require("@lidofinance/next-ui-primitives");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "WidgetApp", function () { return $7c44329ccee85bb9$export$8e0cdabd0fe32f2d; });
$parcel$export(module.exports, "LayoutTitle", function () { return $dbdbbb46ef73198c$export$de4797fa0cf99ab6; });
$parcel$export(module.exports, "LayoutSubTitle", function () { return $dbdbbb46ef73198c$export$731f89f04b9d0607; });




const $14b8fd49eb37e50c$export$c507fb1c2e1ac13a = (0, $80aVp$styledcomponents.createGlobalStyle)`
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

    font-size: ${({ theme: theme  })=>theme.fontSizesMap.xs}px;
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
`;






const $3b51e8e45c2a2f25$export$51574cb47565ad4f = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Container))`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${({ theme: theme  })=>theme.mediaQueries.lg} {
    padding-top: 40px;
  }
`;
const $3b51e8e45c2a2f25$export$3e9753e910d67bc5 = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Divider))`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${({ theme: theme  })=>theme.mediaQueries.md} {
    margin-bottom: 40px;
  }
`;
const $3b51e8e45c2a2f25$export$7b4485b886e9117a = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${({ theme: theme  })=>theme.mediaQueries.lg} {
    flex-basis: 100%;
    order: 2;
  }
`;
const $3b51e8e45c2a2f25$export$531d2b9d9d383692 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div`
  flex-grow: 1;
  margin-bottom: 40px;
  padding-right: 20px;

  &:last-child {
    padding-right: 0;
  }

  ${({ theme: theme  })=>theme.mediaQueries.md} {
    flex-basis: 100%;
  }
`;
const $3b51e8e45c2a2f25$export$53e4a0ea45e729a2 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).h4`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${({ theme: theme  })=>theme.fontSizesMap.sm}px;
  line-height: 1.4em;
`;
const $3b51e8e45c2a2f25$export$655f131bfd3955dd = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xs}px;
  line-height: 1.6em;
`;
const $3b51e8e45c2a2f25$export$70ac745ffa2bea38 = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Link))`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xs}px;
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
`;


const $7d98dd07dc8f6815$export$a06f1c675e846f6f = ({ ...rest })=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $3b51e8e45c2a2f25$export$51574cb47565ad4f), {
        ...rest,
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
                    })
                ]
            })
        ]
    });











const $c420bc8b2b359a15$export$af0f646b086814d1 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`;


const $6c9b3dcd1f47cff5$export$223875819fd7cf93 = ({ leftSlot: leftSlot , ...rest })=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $c420bc8b2b359a15$export$af0f646b086814d1), {
        ...rest,
        children: [
            leftSlot,
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.ThemeToggler), {})
        ]
    });











const $ec8c7e2f9b35d8f1$export$25da3807dbd81a49 = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancenextuiprimitives.LidoLink))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xxxs}px;
  line-height: 1.7em;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none !important;
  letter-spacing: 0.04em;
  color: var(--lido-color-secondary);

  opacity: ${({ $active: $active  })=>$active ? 1 : 0.8};
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
    fill: ${({ $active: $active  })=>$active ? `var(--lido-color-primary)` : `var(--lido-color-secondary)`};
  }

  ${({ theme: theme  })=>theme.mediaQueries.lg} {
    flex-direction: column;
    text-transform: none;
    font-weight: 500;
    font-size: ${({ theme: theme  })=>theme.fontSizesMap.xxxs}px;
    line-height: 1.2em;
    letter-spacing: 0;
  }
`;


const $94587fdd87edefce$export$721ee963a67379f1 = ({ icon: icon , title: title , href: href , ...rest })=>{
    const { pathname: pathname  } = (0, $80aVp$nextrouter.useRouter)();
    // compare without query string
    const active = pathname === href.split("?")[0];
    return(// @ts-expect-error Research why types of property 'as' are incompatible.
    /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $ec8c7e2f9b35d8f1$export$25da3807dbd81a49), {
        ...rest,
        href: href,
        $active: active,
        children: /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($80aVp$react))).Fragment, {
            children: [
                icon,
                /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)("span", {
                    children: title
                })
            ]
        })
    }));
};





const $0f0af5405694d290$export$7bc8c02c4f2d6836 = (0, $80aVp$styledcomponents.css)`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`;
const $0f0af5405694d290$var$mobileCss = (0, $80aVp$styledcomponents.css)`
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
`;
const $0f0af5405694d290$export$f8af16d8231e3b4e = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div`
  ${$0f0af5405694d290$export$7bc8c02c4f2d6836}

  ${({ theme: theme  })=>theme.mediaQueries.lg} {
    ${$0f0af5405694d290$var$mobileCss}
  }

  z-index: 6;
`;


const $a07f17e7c68bb26f$export$b8a61e5c71402559 = /*#__PURE__*/ (0, $80aVp$react.memo)(({ links: links , ...rest })=>{
    if (!links) return null;
    return /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $0f0af5405694d290$export$f8af16d8231e3b4e), {
        ...rest,
        children: links.map((pageProps)=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $94587fdd87edefce$export$721ee963a67379f1), {
                ...pageProps
            }, pageProps.href))
    });
});
$a07f17e7c68bb26f$export$b8a61e5c71402559.displayName = "Navigation";






const $3b3e5656b8e7ca1c$export$54a719cd6595ff5c = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Container))`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`;
const $3b3e5656b8e7ca1c$export$d69c4113bed92823 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).div`
  overflow: hidden;
  flex-shrink: 0;

  ${({ theme: theme  })=>theme.mediaQueries.md} {
    width: 14px;
  }
`;


const $2b0c08c25f103129$export$8b251419efc915eb = ({ navigation: navigation , headerActions: headerActions , ...rest })=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $3b3e5656b8e7ca1c$export$54a719cd6595ff5c), {
        ...rest,
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







const $5655d1d17c843cf7$export$1098d4de7cbde8b = (0, ($parcel$interopDefault($80aVp$styledcomponents)))((0, $80aVp$lidofinancelidoui.Container))`
  position: relative;
  margin-top: ${({ theme: theme  })=>theme.spaceMap.sm}px;
  margin-bottom: ${({ theme: theme  })=>theme.spaceMap.sm}px;
`;


const $7ed1e3306cce0384$export$861edd1ccea2f746 = (props)=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $5655d1d17c843cf7$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });





const $dbdbbb46ef73198c$export$de4797fa0cf99ab6 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).h1`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xl}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`;
const $dbdbbb46ef73198c$export$731f89f04b9d0607 = (0, ($parcel$interopDefault($80aVp$styledcomponents))).h2`
  margin-bottom: ${({ theme: theme  })=>theme.spaceMap.md}px;

  font-weight: 500;
  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xxs}px;
  line-height: 1.5em;
  text-align: center;
  color: var(--lido-color-textSecondary);

  &:empty {
    display: none;
  }
`;





const $7c44329ccee85bb9$export$8e0cdabd0fe32f2d = (props)=>/*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsxs)((0, $80aVp$lidofinancelidoui.CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $14b8fd49eb37e50c$export$c507fb1c2e1ac13a), {}),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $2b0c08c25f103129$export$8b251419efc915eb), {
                headerActions: props.headerActions,
                navigation: props?.navigation
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $7ed1e3306cce0384$export$861edd1ccea2f746), {
                children: props.children
            }),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $7d98dd07dc8f6815$export$a06f1c675e846f6f), {}),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.CookiesTooltip), {}),
            /*#__PURE__*/ (0, $80aVp$reactjsxruntime.jsx)((0, $80aVp$lidofinancelidoui.ToastContainer), {})
        ]
    });


//# sourceMappingURL=index.cjs.map
