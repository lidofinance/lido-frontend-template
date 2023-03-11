var $8sXRR$reactjsxruntime = require("react/jsx-runtime");
var $8sXRR$lidofinancelidoui = require("@lidofinance/lido-ui");
var $8sXRR$lidofinanceuiwalletmodal = require("@lidofinance/ui-wallet-modal");
var $8sXRR$reefknotweb3react = require("@reef-knot/web3-react");
var $8sXRR$styledcomponents = require("styled-components");
var $8sXRR$nextlink = require("next/link");
var $8sXRR$lidosdkconstants = require("@lido-sdk/constants");
var $8sXRR$lidosdkreact = require("@lido-sdk/react");
var $8sXRR$lidofinanceuiprimitives = require("@lidofinance/ui-primitives");
var $8sXRR$react = require("react");
var $8sXRR$nextrouter = require("next/router");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "WidgetApp", function () { return $15ef3cfe99bd30c4$export$8e0cdabd0fe32f2d; });
$parcel$export(module.exports, "LayoutTitle", function () { return $a1e29508de594d16$export$de4797fa0cf99ab6; });
$parcel$export(module.exports, "LayoutSubTitle", function () { return $a1e29508de594d16$export$731f89f04b9d0607; });





let $e6450dc97509fa53$var$_ = (t)=>t, $e6450dc97509fa53$var$t;
const $e6450dc97509fa53$var$GlobalStyles = (0, $8sXRR$styledcomponents.createGlobalStyle)($e6450dc97509fa53$var$t || ($e6450dc97509fa53$var$t = $e6450dc97509fa53$var$_`
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
var $e6450dc97509fa53$export$2e2bcd8739ae039 = $e6450dc97509fa53$var$GlobalStyles;






let $218c93b6707e23c4$var$_ = (t)=>t, $218c93b6707e23c4$var$t, $218c93b6707e23c4$var$t1, $218c93b6707e23c4$var$t2, $218c93b6707e23c4$var$t3, $218c93b6707e23c4$var$t4, $218c93b6707e23c4$var$t5, $218c93b6707e23c4$var$t6;
const $218c93b6707e23c4$export$51574cb47565ad4f = (0, ($parcel$interopDefault($8sXRR$styledcomponents)))((0, $8sXRR$lidofinancelidoui.Container))($218c93b6707e23c4$var$t || ($218c93b6707e23c4$var$t = $218c93b6707e23c4$var$_`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${0} {
    padding-top: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $218c93b6707e23c4$export$3e9753e910d67bc5 = (0, ($parcel$interopDefault($8sXRR$styledcomponents)))((0, $8sXRR$lidofinancelidoui.Divider))($218c93b6707e23c4$var$t1 || ($218c93b6707e23c4$var$t1 = $218c93b6707e23c4$var$_`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${0} {
    margin-bottom: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $218c93b6707e23c4$export$7b4485b886e9117a = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).div($218c93b6707e23c4$var$t2 || ($218c93b6707e23c4$var$t2 = $218c93b6707e23c4$var$_`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${0} {
    flex-basis: 100%;
    order: 2;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $218c93b6707e23c4$export$531d2b9d9d383692 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).div($218c93b6707e23c4$var$t3 || ($218c93b6707e23c4$var$t3 = $218c93b6707e23c4$var$_`
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
const $218c93b6707e23c4$export$53e4a0ea45e729a2 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).h4($218c93b6707e23c4$var$t4 || ($218c93b6707e23c4$var$t4 = $218c93b6707e23c4$var$_`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.4em;
`), ({ theme: theme  })=>theme.fontSizesMap.sm);
const $218c93b6707e23c4$export$655f131bfd3955dd = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).div($218c93b6707e23c4$var$t5 || ($218c93b6707e23c4$var$t5 = $218c93b6707e23c4$var$_`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${0}px;
  line-height: 1.6em;
`), ({ theme: theme  })=>theme.fontSizesMap.xs);
const $218c93b6707e23c4$export$70ac745ffa2bea38 = (0, ($parcel$interopDefault($8sXRR$styledcomponents)))((0, $8sXRR$lidofinancelidoui.Link))($218c93b6707e23c4$var$t6 || ($218c93b6707e23c4$var$t6 = $218c93b6707e23c4$var$_`
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


const $7656a73acf0c9f5b$var$Footer = ()=>/*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $218c93b6707e23c4$export$51574cb47565ad4f), {
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$3e9753e910d67bc5), {}),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$7b4485b886e9117a), {
                children: /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinancelidoui.LidoLogo), {})
            }),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $218c93b6707e23c4$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$53e4a0ea45e729a2), {
                        children: "Resources"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://stake.lido.fi/",
                        children: "Stake with Lido"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
                        children: "Primer"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/terms-of-use",
                        children: "Terms of Use"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/privacy-notice",
                        children: "Privacy Notice"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/faq",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/LIDO_press_kit.zip",
                        children: "Press Kit"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $218c93b6707e23c4$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$53e4a0ea45e729a2), {
                        children: "Community"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://twitter.com/lidofinance",
                        children: "Twitter"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://t.me/lidofinance",
                        children: "Telegram"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://discord.gg/vgdPfhZ",
                        children: "Discord"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://github.com/lidofinance",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://www.reddit.com/r/LidoFinance/",
                        children: "Reddit"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://blog.lido.fi/",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $218c93b6707e23c4$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$53e4a0ea45e729a2), {
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "mailto:info@lido.fi",
                        children: "info@lido.fi"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$70ac745ffa2bea38), {
                        href: "https://help.lido.fi/",
                        children: "Help Center"
                    }),
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $218c93b6707e23c4$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            })
        ]
    });
var $7656a73acf0c9f5b$export$2e2bcd8739ae039 = $7656a73acf0c9f5b$var$Footer;



















let $4b9a7a031e6fec14$var$_ = (t)=>t, $4b9a7a031e6fec14$var$t, $4b9a7a031e6fec14$var$t1, $4b9a7a031e6fec14$var$t2, $4b9a7a031e6fec14$var$t3;
const $4b9a7a031e6fec14$export$b4b09ec636b8dc92 = (0, ($parcel$interopDefault($8sXRR$styledcomponents)))((0, $8sXRR$lidofinancelidoui.Button))($4b9a7a031e6fec14$var$t || ($4b9a7a031e6fec14$var$t = $4b9a7a031e6fec14$var$_`
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`));
const $4b9a7a031e6fec14$export$1ba39b57e9c6b91f = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).span($4b9a7a031e6fec14$var$t1 || ($4b9a7a031e6fec14$var$t1 = $4b9a7a031e6fec14$var$_`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -10px -18px;
`));
const $4b9a7a031e6fec14$export$8d4cce15cb50cfeb = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).span($4b9a7a031e6fec14$var$t2 || ($4b9a7a031e6fec14$var$t2 = $4b9a7a031e6fec14$var$_`
  margin-right: 12px;
  margin-left: 4px;
  font-size: ${0}px;

  ${0} {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xs, ({ theme: theme  })=>theme.mediaQueries.md);
const $4b9a7a031e6fec14$export$39c6911ce38c2d39 = (0, ($parcel$interopDefault($8sXRR$styledcomponents)))((0, $8sXRR$lidofinancelidoui.InlineLoader))($4b9a7a031e6fec14$var$t3 || ($4b9a7a031e6fec14$var$t3 = $4b9a7a031e6fec14$var$_`
  width: 60px;
`));


const $2a2370d9ad289e04$export$eab4424f030fcb21 = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $8sXRR$lidofinanceuiwalletmodal.useModal)((0, $8sXRR$lidofinanceuiwalletmodal.WALLET_MODAL).wallet);
    const { account: account  } = (0, $8sXRR$lidosdkreact.useSDK)();
    const { data: balance , initialLoading: initialLoading  } = (0, $8sXRR$lidosdkreact.useEthereumBalance)();
    return /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $4b9a7a031e6fec14$export$b4b09ec636b8dc92), {
        size: "sm",
        variant: "text",
        color: "secondary",
        onClick: openModal,
        ...rest,
        children: /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $4b9a7a031e6fec14$export$1ba39b57e9c6b91f), {
            children: [
                /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $4b9a7a031e6fec14$export$8d4cce15cb50cfeb), {
                    children: initialLoading ? /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $4b9a7a031e6fec14$export$39c6911ce38c2d39), {}) : // TODO: 'ETH' to dynamic symbol
                    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinanceuiprimitives.FormatToken), {
                        amount: balance,
                        symbol: "ETH"
                    })
                }),
                /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinanceuiprimitives.AddressBadge), {
                    address: account
                })
            ]
        })
    });
};







const $b08f4cec7d65a130$export$ba0ef3a0d99fcc8f = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $8sXRR$lidofinanceuiwalletmodal.useModal)((0, $8sXRR$lidofinanceuiwalletmodal.WALLET_MODAL).connect);
    return /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinancelidoui.Button), {
        onClick: openModal,
        ...rest,
        children: "Connect wallet"
    });
};





let $67170ddf0bddbe01$var$_ = (t)=>t, $67170ddf0bddbe01$var$t;
const $67170ddf0bddbe01$export$8f0e76783cf20ca4 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).span($67170ddf0bddbe01$var$t || ($67170ddf0bddbe01$var$t = $67170ddf0bddbe01$var$_`
  margin-right: ${0}px;
  color: ${0};
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.xl, ({ $color: $color  })=>$color);


const $48fa4a1d2610f545$export$5ff29b4461d0d45f = ()=>{
    const { active: active  } = (0, $8sXRR$reefknotweb3react.useWeb3)();
    const { chainId: chainId  } = (0, $8sXRR$lidosdkreact.useSDK)();
    const chainName = (0, $8sXRR$lidosdkconstants.CHAINS)[chainId];
    const testNet = chainId !== (0, $8sXRR$lidosdkconstants.CHAINS).Mainnet;
    const showNet = testNet && active;
    return /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $8sXRR$reactjsxruntime.Fragment), {
        children: [
            showNet && /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $67170ddf0bddbe01$export$8f0e76783cf20ca4), {
                $color: (0, $8sXRR$lidosdkconstants.getChainColor)(chainId),
                children: chainName
            }),
            active ? /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $2a2370d9ad289e04$export$eab4424f030fcb21), {}) : /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $b08f4cec7d65a130$export$ba0ef3a0d99fcc8f), {
                size: "sm"
            }),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinancelidoui.ThemeToggler), {})
        ]
    });
};










let $ad87e35dc0f90c3c$var$_ = (t)=>t, $ad87e35dc0f90c3c$var$t;
const $ad87e35dc0f90c3c$export$25da3807dbd81a49 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).a($ad87e35dc0f90c3c$var$t || ($ad87e35dc0f90c3c$var$t = $ad87e35dc0f90c3c$var$_`
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


const $cc0bdf7900abb503$export$721ee963a67379f1 = (props)=>{
    const { icon: icon , title: title , href: href , external: external  } = props;
    const router = (0, $8sXRR$nextrouter.useRouter)();
    const searchParamsString = new URLSearchParams(router.query).toString();
    const queryString = searchParamsString ? `?${searchParamsString}` : "";
    const pathWithQuery = href + `${queryString}`;
    return external ? /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $ad87e35dc0f90c3c$export$25da3807dbd81a49), {
        href: pathWithQuery,
        active: router.pathname === href,
        target: "_blank",
        children: [
            icon,
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)("span", {
                children: title
            })
        ]
    }) : // Fix hydration error https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinanceuiprimitives.LocalLink), {
        href: href,
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $ad87e35dc0f90c3c$export$25da3807dbd81a49), {
            active: router.pathname === href,
            children: [
                icon,
                /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)("span", {
                    children: title
                })
            ]
        })
    });
};







let $3fa6ac820e09fb1b$var$_ = (t)=>t, $3fa6ac820e09fb1b$var$t, $3fa6ac820e09fb1b$var$t1, $3fa6ac820e09fb1b$var$t2;
const $3fa6ac820e09fb1b$export$7bc8c02c4f2d6836 = (0, $8sXRR$styledcomponents.css)($3fa6ac820e09fb1b$var$t || ($3fa6ac820e09fb1b$var$t = $3fa6ac820e09fb1b$var$_`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`));
const $3fa6ac820e09fb1b$var$mobileCss = (0, $8sXRR$styledcomponents.css)($3fa6ac820e09fb1b$var$t1 || ($3fa6ac820e09fb1b$var$t1 = $3fa6ac820e09fb1b$var$_`
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
const $3fa6ac820e09fb1b$export$f8af16d8231e3b4e = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).div($3fa6ac820e09fb1b$var$t2 || ($3fa6ac820e09fb1b$var$t2 = $3fa6ac820e09fb1b$var$_`
  ${0}

  ${0} {
    ${0}
  }

  z-index: 6;
`), $3fa6ac820e09fb1b$export$7bc8c02c4f2d6836, ({ theme: theme  })=>theme.mediaQueries.lg, $3fa6ac820e09fb1b$var$mobileCss);


const $34ecc3937e49ed62$export$b8a61e5c71402559 = /*#__PURE__*/ (0, $8sXRR$react.memo)((props)=>{
    const { pages: pages  } = props;
    if (!pages) return /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$reactjsxruntime.Fragment), {});
    return /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $3fa6ac820e09fb1b$export$f8af16d8231e3b4e), {
        children: pages.map((pageProps)=>/*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $cc0bdf7900abb503$export$721ee963a67379f1), {
                ...pageProps
            }, pageProps.href))
    });
});
$34ecc3937e49ed62$export$b8a61e5c71402559.displayName = "Navigation";








let $d95585507c8542b3$var$_ = (t)=>t, $d95585507c8542b3$var$t, $d95585507c8542b3$var$t1, $d95585507c8542b3$var$t2;
const $d95585507c8542b3$export$54a719cd6595ff5c = (0, ($parcel$interopDefault($8sXRR$styledcomponents)))((0, $8sXRR$lidofinancelidoui.Container))($d95585507c8542b3$var$t || ($d95585507c8542b3$var$t = $d95585507c8542b3$var$_`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`));
const $d95585507c8542b3$export$d69c4113bed92823 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).div($d95585507c8542b3$var$t1 || ($d95585507c8542b3$var$t1 = $d95585507c8542b3$var$_`
  overflow: hidden;
  flex-shrink: 0;

  ${0} {
    width: 14px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $d95585507c8542b3$export$af0f646b086814d1 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).div($d95585507c8542b3$var$t2 || ($d95585507c8542b3$var$t2 = $d95585507c8542b3$var$_`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`));


const $e161151a9ec97516$var$Header = (props)=>{
    const { pages: pages  } = props;
    return /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $d95585507c8542b3$export$54a719cd6595ff5c), {
        size: "full",
        forwardedAs: "header",
        children: [
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $d95585507c8542b3$export$d69c4113bed92823), {
                children: /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, ($parcel$interopDefault($8sXRR$nextlink))), {
                    href: "/",
                    passHref: true,
                    legacyBehavior: true,
                    children: /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinancelidoui.LidoLogo), {})
                })
            }),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $34ecc3937e49ed62$export$b8a61e5c71402559), {
                pages: pages
            }),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $d95585507c8542b3$export$af0f646b086814d1), {
                children: /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $48fa4a1d2610f545$export$5ff29b4461d0d45f), {})
            })
        ]
    });
};
var $e161151a9ec97516$export$2e2bcd8739ae039 = $e161151a9ec97516$var$Header;







let $2b7e96efd8082757$var$_ = (t)=>t, $2b7e96efd8082757$var$t;
const $2b7e96efd8082757$export$1098d4de7cbde8b = (0, ($parcel$interopDefault($8sXRR$styledcomponents)))((0, $8sXRR$lidofinancelidoui.Container))($2b7e96efd8082757$var$t || ($2b7e96efd8082757$var$t = $2b7e96efd8082757$var$_`
  position: relative;
  margin-top: ${0}px;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $be939b77e53cc8c9$var$Main = (props)=>{
    return /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $2b7e96efd8082757$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });
};
var $be939b77e53cc8c9$export$2e2bcd8739ae039 = $be939b77e53cc8c9$var$Main;





let $a1e29508de594d16$var$_ = (t)=>t, $a1e29508de594d16$var$t, $a1e29508de594d16$var$t1;
const $a1e29508de594d16$export$de4797fa0cf99ab6 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).h1($a1e29508de594d16$var$t || ($a1e29508de594d16$var$t = $a1e29508de594d16$var$_`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xl);
const $a1e29508de594d16$export$731f89f04b9d0607 = (0, ($parcel$interopDefault($8sXRR$styledcomponents))).h2($a1e29508de594d16$var$t1 || ($a1e29508de594d16$var$t1 = $a1e29508de594d16$var$_`
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
(0, $8sXRR$lidofinancelidoui.migrationThemeCookiesToCrossDomainCookiesClientSide)();
const $15ef3cfe99bd30c4$export$8e0cdabd0fe32f2d = ({ ...props })=>{
    /*#__PURE__*/ return (0, $8sXRR$reactjsxruntime.jsxs)((0, $8sXRR$lidofinancelidoui.CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $e6450dc97509fa53$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$reefknotweb3react.ProviderWeb3), {
                ...props.web3,
                children: /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsxs)((0, $8sXRR$lidofinanceuiwalletmodal.ProviderWalletModal), {
                    ...props.reefKnot,
                    children: [
                        /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $e161151a9ec97516$export$2e2bcd8739ae039), {
                            pages: props === null || props === void 0 ? void 0 : props.pages
                        }),
                        /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $be939b77e53cc8c9$export$2e2bcd8739ae039), {
                            children: props.children
                        }),
                        /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $7656a73acf0c9f5b$export$2e2bcd8739ae039), {}),
                        /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinancelidoui.CookiesTooltip), {}),
                        /*#__PURE__*/ (0, $8sXRR$reactjsxruntime.jsx)((0, $8sXRR$lidofinancelidoui.ToastContainer), {})
                    ]
                })
            })
        ]
    });
};


//# sourceMappingURL=index.cjs.map
