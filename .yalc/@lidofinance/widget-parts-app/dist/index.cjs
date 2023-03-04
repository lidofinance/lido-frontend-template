var $4phyj$reactjsxruntime = require("react/jsx-runtime");
var $4phyj$lidofinancelidoui = require("@lidofinance/lido-ui");
var $4phyj$lidofinancewidgetpartswalletmodal = require("@lidofinance/widget-parts-wallet-modal");
var $4phyj$reefknotweb3react = require("@reef-knot/web3-react");
var $4phyj$styledcomponents = require("styled-components");
var $4phyj$nextlink = require("next/link");
var $4phyj$lidosdkconstants = require("@lido-sdk/constants");
var $4phyj$lidosdkreact = require("@lido-sdk/react");
var $4phyj$lidofinancewidgetpartsuiprimitives = require("@lidofinance/widget-parts-ui-primitives");
var $4phyj$react = require("react");
var $4phyj$nextrouter = require("next/router");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "WidgetApp", function () { return $3836b8a761599831$export$8e0cdabd0fe32f2d; });





let $0d660098828e31a4$var$_ = (t)=>t, $0d660098828e31a4$var$t;
const $0d660098828e31a4$var$GlobalStyles = (0, $4phyj$styledcomponents.createGlobalStyle)($0d660098828e31a4$var$t || ($0d660098828e31a4$var$t = $0d660098828e31a4$var$_`
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
var $0d660098828e31a4$export$2e2bcd8739ae039 = $0d660098828e31a4$var$GlobalStyles;






let $5f12da66e48d665f$var$_ = (t)=>t, $5f12da66e48d665f$var$t, $5f12da66e48d665f$var$t1, $5f12da66e48d665f$var$t2, $5f12da66e48d665f$var$t3, $5f12da66e48d665f$var$t4, $5f12da66e48d665f$var$t5, $5f12da66e48d665f$var$t6;
const $5f12da66e48d665f$export$51574cb47565ad4f = (0, ($parcel$interopDefault($4phyj$styledcomponents)))((0, $4phyj$lidofinancelidoui.Container))($5f12da66e48d665f$var$t || ($5f12da66e48d665f$var$t = $5f12da66e48d665f$var$_`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${0} {
    padding-top: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $5f12da66e48d665f$export$3e9753e910d67bc5 = (0, ($parcel$interopDefault($4phyj$styledcomponents)))((0, $4phyj$lidofinancelidoui.Divider))($5f12da66e48d665f$var$t1 || ($5f12da66e48d665f$var$t1 = $5f12da66e48d665f$var$_`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${0} {
    margin-bottom: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $5f12da66e48d665f$export$7b4485b886e9117a = (0, ($parcel$interopDefault($4phyj$styledcomponents))).div($5f12da66e48d665f$var$t2 || ($5f12da66e48d665f$var$t2 = $5f12da66e48d665f$var$_`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${0} {
    flex-basis: 100%;
    order: 2;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $5f12da66e48d665f$export$531d2b9d9d383692 = (0, ($parcel$interopDefault($4phyj$styledcomponents))).div($5f12da66e48d665f$var$t3 || ($5f12da66e48d665f$var$t3 = $5f12da66e48d665f$var$_`
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
const $5f12da66e48d665f$export$53e4a0ea45e729a2 = (0, ($parcel$interopDefault($4phyj$styledcomponents))).h4($5f12da66e48d665f$var$t4 || ($5f12da66e48d665f$var$t4 = $5f12da66e48d665f$var$_`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.4em;
`), ({ theme: theme  })=>theme.fontSizesMap.sm);
const $5f12da66e48d665f$export$655f131bfd3955dd = (0, ($parcel$interopDefault($4phyj$styledcomponents))).div($5f12da66e48d665f$var$t5 || ($5f12da66e48d665f$var$t5 = $5f12da66e48d665f$var$_`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${0}px;
  line-height: 1.6em;
`), ({ theme: theme  })=>theme.fontSizesMap.xs);
const $5f12da66e48d665f$export$70ac745ffa2bea38 = (0, ($parcel$interopDefault($4phyj$styledcomponents)))((0, $4phyj$lidofinancelidoui.Link))($5f12da66e48d665f$var$t6 || ($5f12da66e48d665f$var$t6 = $5f12da66e48d665f$var$_`
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


const $5b7352656d512a31$var$Footer = ()=>/*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $5f12da66e48d665f$export$51574cb47565ad4f), {
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$3e9753e910d67bc5), {}),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$7b4485b886e9117a), {
                children: /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancelidoui.LidoLogo), {})
            }),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $5f12da66e48d665f$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$53e4a0ea45e729a2), {
                        children: "Resources"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://stake.lido.fi/",
                        children: "Stake with Lido"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
                        children: "Primer"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/terms-of-use",
                        children: "Terms of Use"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/privacy-notice",
                        children: "Privacy Notice"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/faq",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/LIDO_press_kit.zip",
                        children: "Press Kit"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $5f12da66e48d665f$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$53e4a0ea45e729a2), {
                        children: "Community"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://twitter.com/lidofinance",
                        children: "Twitter"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://t.me/lidofinance",
                        children: "Telegram"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://discord.gg/vgdPfhZ",
                        children: "Discord"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://github.com/lidofinance",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://www.reddit.com/r/LidoFinance/",
                        children: "Reddit"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://blog.lido.fi/",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $5f12da66e48d665f$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$53e4a0ea45e729a2), {
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "mailto:info@lido.fi",
                        children: "info@lido.fi"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$70ac745ffa2bea38), {
                        href: "https://help.lido.fi/",
                        children: "Help Center"
                    }),
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5f12da66e48d665f$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            })
        ]
    });
var $5b7352656d512a31$export$2e2bcd8739ae039 = $5b7352656d512a31$var$Footer;



















let $3ca24be9f141dc64$var$_ = (t)=>t, $3ca24be9f141dc64$var$t, $3ca24be9f141dc64$var$t1, $3ca24be9f141dc64$var$t2, $3ca24be9f141dc64$var$t3;
const $3ca24be9f141dc64$export$b4b09ec636b8dc92 = (0, ($parcel$interopDefault($4phyj$styledcomponents)))((0, $4phyj$lidofinancelidoui.Button))($3ca24be9f141dc64$var$t || ($3ca24be9f141dc64$var$t = $3ca24be9f141dc64$var$_`
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`));
const $3ca24be9f141dc64$export$1ba39b57e9c6b91f = (0, ($parcel$interopDefault($4phyj$styledcomponents))).span($3ca24be9f141dc64$var$t1 || ($3ca24be9f141dc64$var$t1 = $3ca24be9f141dc64$var$_`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -10px -18px;
`));
const $3ca24be9f141dc64$export$8d4cce15cb50cfeb = (0, ($parcel$interopDefault($4phyj$styledcomponents))).span($3ca24be9f141dc64$var$t2 || ($3ca24be9f141dc64$var$t2 = $3ca24be9f141dc64$var$_`
  margin-right: 12px;
  margin-left: 4px;
  font-size: ${0}px;

  ${0} {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xs, ({ theme: theme  })=>theme.mediaQueries.md);
const $3ca24be9f141dc64$export$39c6911ce38c2d39 = (0, ($parcel$interopDefault($4phyj$styledcomponents)))((0, $4phyj$lidofinancelidoui.InlineLoader))($3ca24be9f141dc64$var$t3 || ($3ca24be9f141dc64$var$t3 = $3ca24be9f141dc64$var$_`
  width: 60px;
`));


const $f273635c6524319b$var$WalletButton = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $4phyj$lidofinancewidgetpartswalletmodal.useModal)((0, $4phyj$lidofinancewidgetpartswalletmodal.WALLET_MODAL).wallet);
    const { account: account  } = (0, $4phyj$lidosdkreact.useSDK)();
    const { data: balance , initialLoading: initialLoading  } = (0, $4phyj$lidosdkreact.useEthereumBalance)();
    return /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $3ca24be9f141dc64$export$b4b09ec636b8dc92), {
        size: "sm",
        variant: "text",
        color: "secondary",
        onClick: openModal,
        ...rest,
        children: /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $3ca24be9f141dc64$export$1ba39b57e9c6b91f), {
            children: [
                /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $3ca24be9f141dc64$export$8d4cce15cb50cfeb), {
                    children: initialLoading ? /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $3ca24be9f141dc64$export$39c6911ce38c2d39), {}) : // TODO: 'ETH' to dynamic symbol
                    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancewidgetpartsuiprimitives.FormatToken), {
                        amount: balance,
                        symbol: "ETH"
                    })
                }),
                /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancewidgetpartsuiprimitives.AddressBadge), {
                    address: account
                })
            ]
        })
    });
};
var $f273635c6524319b$export$2e2bcd8739ae039 = $f273635c6524319b$var$WalletButton;







const $869b8710c5693b68$var$WalletConnect = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $4phyj$lidofinancewidgetpartswalletmodal.useModal)((0, $4phyj$lidofinancewidgetpartswalletmodal.WALLET_MODAL).connect);
    return /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancelidoui.Button), {
        onClick: openModal,
        ...rest,
        children: "Connect wallet"
    });
};
var $869b8710c5693b68$export$2e2bcd8739ae039 = $869b8710c5693b68$var$WalletConnect;





let $b9cffd8ae54beba6$var$_ = (t)=>t, $b9cffd8ae54beba6$var$t;
const $b9cffd8ae54beba6$export$8f0e76783cf20ca4 = (0, ($parcel$interopDefault($4phyj$styledcomponents))).span($b9cffd8ae54beba6$var$t || ($b9cffd8ae54beba6$var$t = $b9cffd8ae54beba6$var$_`
  margin-right: ${0}px;
  color: ${0};
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.xl, ({ $color: $color  })=>$color);


const $79f1c9729c2dc5b0$var$HeaderWallet = ()=>{
    const { active: active  } = (0, $4phyj$reefknotweb3react.useWeb3)();
    const { chainId: chainId  } = (0, $4phyj$lidosdkreact.useSDK)();
    const chainName = (0, $4phyj$lidosdkconstants.CHAINS)[chainId];
    const testNet = chainId !== (0, $4phyj$lidosdkconstants.CHAINS).Mainnet;
    const showNet = testNet && active;
    return /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $4phyj$reactjsxruntime.Fragment), {
        children: [
            showNet && /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $b9cffd8ae54beba6$export$8f0e76783cf20ca4), {
                $color: (0, $4phyj$lidosdkconstants.getChainColor)(chainId),
                children: chainName
            }),
            active ? /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $f273635c6524319b$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $869b8710c5693b68$export$2e2bcd8739ae039), {
                size: "sm"
            }),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancelidoui.ThemeToggler), {})
        ]
    });
};
var $79f1c9729c2dc5b0$export$2e2bcd8739ae039 = $79f1c9729c2dc5b0$var$HeaderWallet;










let $cfa166ffb168bc21$var$_ = (t)=>t, $cfa166ffb168bc21$var$t;
const $cfa166ffb168bc21$export$25da3807dbd81a49 = (0, ($parcel$interopDefault($4phyj$styledcomponents))).a($cfa166ffb168bc21$var$t || ($cfa166ffb168bc21$var$t = $cfa166ffb168bc21$var$_`
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


const $72111cca6c92d0da$var$NavigationLink = (props)=>{
    const { icon: icon , title: title , href: href , external: external  } = props;
    const router = (0, $4phyj$nextrouter.useRouter)();
    const searchParamsString = new URLSearchParams(router.query).toString();
    const queryString = searchParamsString ? `?${searchParamsString}` : "";
    const pathWithQuery = href + `${queryString}`;
    return external ? /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $cfa166ffb168bc21$export$25da3807dbd81a49), {
        href: pathWithQuery,
        active: router.pathname === href,
        target: "_blank",
        children: [
            icon,
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)("span", {
                children: title
            })
        ]
    }) : // Fix hydration error https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancewidgetpartsuiprimitives.LocalLink), {
        href: href,
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $cfa166ffb168bc21$export$25da3807dbd81a49), {
            active: router.pathname === href,
            children: [
                icon,
                /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)("span", {
                    children: title
                })
            ]
        })
    });
};
var $72111cca6c92d0da$export$2e2bcd8739ae039 = $72111cca6c92d0da$var$NavigationLink;







let $f766b0409c734267$var$_ = (t)=>t, $f766b0409c734267$var$t, $f766b0409c734267$var$t1, $f766b0409c734267$var$t2;
const $f766b0409c734267$export$7bc8c02c4f2d6836 = (0, $4phyj$styledcomponents.css)($f766b0409c734267$var$t || ($f766b0409c734267$var$t = $f766b0409c734267$var$_`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`));
const $f766b0409c734267$var$mobileCss = (0, $4phyj$styledcomponents.css)($f766b0409c734267$var$t1 || ($f766b0409c734267$var$t1 = $f766b0409c734267$var$_`
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
const $f766b0409c734267$export$f8af16d8231e3b4e = (0, ($parcel$interopDefault($4phyj$styledcomponents))).div($f766b0409c734267$var$t2 || ($f766b0409c734267$var$t2 = $f766b0409c734267$var$_`
  ${0}

  ${0} {
    ${0}
  }

  z-index: 6;
`), $f766b0409c734267$export$7bc8c02c4f2d6836, ({ theme: theme  })=>theme.mediaQueries.lg, $f766b0409c734267$var$mobileCss);


const $9648dcfa17e959bd$var$Navigation = /*#__PURE__*/ (0, $4phyj$react.memo)((props)=>{
    const { pages: pages  } = props;
    if (!pages) return /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$reactjsxruntime.Fragment), {});
    return /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $f766b0409c734267$export$f8af16d8231e3b4e), {
        children: pages.map((pageProps)=>/*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $72111cca6c92d0da$export$2e2bcd8739ae039), {
                ...pageProps
            }, pageProps.href))
    });
});
$9648dcfa17e959bd$var$Navigation.displayName = "Navigation";
var $9648dcfa17e959bd$export$2e2bcd8739ae039 = $9648dcfa17e959bd$var$Navigation;








let $1f45cdc95cc31270$var$_ = (t)=>t, $1f45cdc95cc31270$var$t, $1f45cdc95cc31270$var$t1, $1f45cdc95cc31270$var$t2;
const $1f45cdc95cc31270$export$54a719cd6595ff5c = (0, ($parcel$interopDefault($4phyj$styledcomponents)))((0, $4phyj$lidofinancelidoui.Container))($1f45cdc95cc31270$var$t || ($1f45cdc95cc31270$var$t = $1f45cdc95cc31270$var$_`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`));
const $1f45cdc95cc31270$export$d69c4113bed92823 = (0, ($parcel$interopDefault($4phyj$styledcomponents))).div($1f45cdc95cc31270$var$t1 || ($1f45cdc95cc31270$var$t1 = $1f45cdc95cc31270$var$_`
  overflow: hidden;
  flex-shrink: 0;

  ${0} {
    width: 14px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $1f45cdc95cc31270$export$af0f646b086814d1 = (0, ($parcel$interopDefault($4phyj$styledcomponents))).div($1f45cdc95cc31270$var$t2 || ($1f45cdc95cc31270$var$t2 = $1f45cdc95cc31270$var$_`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`));


const $5f784c3c3d7ef236$var$Header = (props)=>{
    const { pages: pages  } = props;
    return /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $1f45cdc95cc31270$export$54a719cd6595ff5c), {
        size: "full",
        forwardedAs: "header",
        children: [
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $1f45cdc95cc31270$export$d69c4113bed92823), {
                children: /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, ($parcel$interopDefault($4phyj$nextlink))), {
                    href: "/",
                    children: /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancelidoui.LidoLogo), {})
                })
            }),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $9648dcfa17e959bd$export$2e2bcd8739ae039), {
                pages: pages
            }),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $1f45cdc95cc31270$export$af0f646b086814d1), {
                children: /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $79f1c9729c2dc5b0$export$2e2bcd8739ae039), {})
            })
        ]
    });
};
var $5f784c3c3d7ef236$export$2e2bcd8739ae039 = $5f784c3c3d7ef236$var$Header;







let $bd6c25a9e7045a8d$var$_ = (t)=>t, $bd6c25a9e7045a8d$var$t;
const $bd6c25a9e7045a8d$export$1098d4de7cbde8b = (0, ($parcel$interopDefault($4phyj$styledcomponents)))((0, $4phyj$lidofinancelidoui.Container))($bd6c25a9e7045a8d$var$t || ($bd6c25a9e7045a8d$var$t = $bd6c25a9e7045a8d$var$_`
  position: relative;
  margin-top: ${0}px;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $a2bc504abdf90868$var$Main = (props)=>{
    return /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $bd6c25a9e7045a8d$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });
};
var $a2bc504abdf90868$export$2e2bcd8739ae039 = $a2bc504abdf90868$var$Main;






// Migrations old cookies to new cross domain cookies
(0, $4phyj$lidofinancelidoui.migrationThemeCookiesToCrossDomainCookiesClientSide)();
const $3836b8a761599831$export$8e0cdabd0fe32f2d = ({ ...props })=>/*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $4phyj$lidofinancelidoui.CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $0d660098828e31a4$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$reefknotweb3react.ProviderWeb3), {
                ...props.web3,
                children: /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsxs)((0, $4phyj$lidofinancewidgetpartswalletmodal.ProviderWalletModal), {
                    ...props.reefKnot,
                    children: [
                        /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $a2bc504abdf90868$export$2e2bcd8739ae039), {
                            children: props.children
                        }),
                        /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $5b7352656d512a31$export$2e2bcd8739ae039), {}),
                        /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancelidoui.CookiesTooltip), {}),
                        /*#__PURE__*/ (0, $4phyj$reactjsxruntime.jsx)((0, $4phyj$lidofinancelidoui.ToastContainer), {})
                    ]
                })
            })
        ]
    });


//# sourceMappingURL=index.cjs.map
