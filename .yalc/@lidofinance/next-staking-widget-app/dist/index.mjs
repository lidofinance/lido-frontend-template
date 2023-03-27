import {jsxs as $7XpC5$jsxs, jsx as $7XpC5$jsx, Fragment as $7XpC5$Fragment} from "react/jsx-runtime";
import {memo as $7XpC5$memo} from "react";
import {migrationThemeCookiesToCrossDomainCookiesClientSide as $7XpC5$migrationThemeCookiesToCrossDomainCookiesClientSide, CookieThemeProvider as $7XpC5$CookieThemeProvider, CookiesTooltip as $7XpC5$CookiesTooltip, ToastContainer as $7XpC5$ToastContainer, LidoLogo as $7XpC5$LidoLogo, Container as $7XpC5$Container, Divider as $7XpC5$Divider, Link as $7XpC5$Link, ThemeToggler as $7XpC5$ThemeToggler, Button as $7XpC5$Button, InlineLoader as $7XpC5$InlineLoader} from "@lidofinance/lido-ui";
import {ProviderWalletModal as $7XpC5$ProviderWalletModal, useModal as $7XpC5$useModal, WALLET_MODAL as $7XpC5$WALLET_MODAL} from "@lidofinance/eth-ui-wallet-modal";
import {ProviderWeb3 as $7XpC5$ProviderWeb3, useWeb3 as $7XpC5$useWeb3} from "@reef-knot/web3-react";
import $7XpC5$styledcomponents, {createGlobalStyle as $7XpC5$createGlobalStyle, css as $7XpC5$css} from "styled-components";
import $7XpC5$nextlink from "next/link";
import {CHAINS as $7XpC5$CHAINS, getChainColor as $7XpC5$getChainColor} from "@lido-sdk/constants";
import {useSDK as $7XpC5$useSDK, useEthereumBalance as $7XpC5$useEthereumBalance} from "@lido-sdk/react";
import {FormatToken as $7XpC5$FormatToken} from "@lidofinance/eth-ui-primitives";
import {useRouter as $7XpC5$useRouter} from "next/router";
import {LocalLink as $7XpC5$LocalLink} from "@lidofinance/ui-primitives";







let $43576bcd02538192$var$_ = (t)=>t, $43576bcd02538192$var$t;
const $43576bcd02538192$var$GlobalStyles = (0, $7XpC5$createGlobalStyle)($43576bcd02538192$var$t || ($43576bcd02538192$var$t = $43576bcd02538192$var$_`
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
var $43576bcd02538192$export$2e2bcd8739ae039 = $43576bcd02538192$var$GlobalStyles;






let $52b277d5f3cae5f6$var$_ = (t)=>t, $52b277d5f3cae5f6$var$t, $52b277d5f3cae5f6$var$t1, $52b277d5f3cae5f6$var$t2, $52b277d5f3cae5f6$var$t3, $52b277d5f3cae5f6$var$t4, $52b277d5f3cae5f6$var$t5, $52b277d5f3cae5f6$var$t6;
const $52b277d5f3cae5f6$export$51574cb47565ad4f = (0, $7XpC5$styledcomponents)((0, $7XpC5$Container))($52b277d5f3cae5f6$var$t || ($52b277d5f3cae5f6$var$t = $52b277d5f3cae5f6$var$_`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${0} {
    padding-top: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $52b277d5f3cae5f6$export$3e9753e910d67bc5 = (0, $7XpC5$styledcomponents)((0, $7XpC5$Divider))($52b277d5f3cae5f6$var$t1 || ($52b277d5f3cae5f6$var$t1 = $52b277d5f3cae5f6$var$_`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${0} {
    margin-bottom: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $52b277d5f3cae5f6$export$7b4485b886e9117a = (0, $7XpC5$styledcomponents).div($52b277d5f3cae5f6$var$t2 || ($52b277d5f3cae5f6$var$t2 = $52b277d5f3cae5f6$var$_`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${0} {
    flex-basis: 100%;
    order: 2;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $52b277d5f3cae5f6$export$531d2b9d9d383692 = (0, $7XpC5$styledcomponents).div($52b277d5f3cae5f6$var$t3 || ($52b277d5f3cae5f6$var$t3 = $52b277d5f3cae5f6$var$_`
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
const $52b277d5f3cae5f6$export$53e4a0ea45e729a2 = (0, $7XpC5$styledcomponents).h4($52b277d5f3cae5f6$var$t4 || ($52b277d5f3cae5f6$var$t4 = $52b277d5f3cae5f6$var$_`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.4em;
`), ({ theme: theme  })=>theme.fontSizesMap.sm);
const $52b277d5f3cae5f6$export$655f131bfd3955dd = (0, $7XpC5$styledcomponents).div($52b277d5f3cae5f6$var$t5 || ($52b277d5f3cae5f6$var$t5 = $52b277d5f3cae5f6$var$_`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${0}px;
  line-height: 1.6em;
`), ({ theme: theme  })=>theme.fontSizesMap.xs);
const $52b277d5f3cae5f6$export$70ac745ffa2bea38 = (0, $7XpC5$styledcomponents)((0, $7XpC5$Link))($52b277d5f3cae5f6$var$t6 || ($52b277d5f3cae5f6$var$t6 = $52b277d5f3cae5f6$var$_`
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


const $587ae881875a0357$var$Footer = ()=>/*#__PURE__*/ (0, $7XpC5$jsxs)((0, $52b277d5f3cae5f6$export$51574cb47565ad4f), {
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$3e9753e910d67bc5), {}),
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$7b4485b886e9117a), {
                children: /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$LidoLogo), {})
            }),
            /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $52b277d5f3cae5f6$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$53e4a0ea45e729a2), {
                        children: "Resources"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://stake.lido.fi/",
                        children: "Stake with Lido"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
                        children: "Primer"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/terms-of-use",
                        children: "Terms of Use"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/privacy-notice",
                        children: "Privacy Notice"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/faq",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/LIDO_press_kit.zip",
                        children: "Press Kit"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $52b277d5f3cae5f6$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$53e4a0ea45e729a2), {
                        children: "Community"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://twitter.com/lidofinance",
                        children: "Twitter"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://t.me/lidofinance",
                        children: "Telegram"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://discord.gg/vgdPfhZ",
                        children: "Discord"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://github.com/lidofinance",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://www.reddit.com/r/LidoFinance/",
                        children: "Reddit"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://blog.lido.fi/",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $52b277d5f3cae5f6$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$53e4a0ea45e729a2), {
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "mailto:info@lido.fi",
                        children: "info@lido.fi"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$70ac745ffa2bea38), {
                        href: "https://help.lido.fi/",
                        children: "Help Center"
                    }),
                    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $52b277d5f3cae5f6$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            })
        ]
    });
var $587ae881875a0357$export$2e2bcd8739ae039 = $587ae881875a0357$var$Footer;


















let $f3dac3ad0c6afc00$var$_ = (t)=>t, $f3dac3ad0c6afc00$var$t, $f3dac3ad0c6afc00$var$t1, $f3dac3ad0c6afc00$var$t2, $f3dac3ad0c6afc00$var$t3;
const $f3dac3ad0c6afc00$export$b4b09ec636b8dc92 = (0, $7XpC5$styledcomponents)((0, $7XpC5$Button))($f3dac3ad0c6afc00$var$t || ($f3dac3ad0c6afc00$var$t = $f3dac3ad0c6afc00$var$_`
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`));
const $f3dac3ad0c6afc00$export$1ba39b57e9c6b91f = (0, $7XpC5$styledcomponents).span($f3dac3ad0c6afc00$var$t1 || ($f3dac3ad0c6afc00$var$t1 = $f3dac3ad0c6afc00$var$_`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -10px -18px;
`));
const $f3dac3ad0c6afc00$export$8d4cce15cb50cfeb = (0, $7XpC5$styledcomponents).span($f3dac3ad0c6afc00$var$t2 || ($f3dac3ad0c6afc00$var$t2 = $f3dac3ad0c6afc00$var$_`
  margin-right: 12px;
  margin-left: 4px;
  font-size: ${0}px;

  ${0} {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xs, ({ theme: theme  })=>theme.mediaQueries.md);
const $f3dac3ad0c6afc00$export$39c6911ce38c2d39 = (0, $7XpC5$styledcomponents)((0, $7XpC5$InlineLoader))($f3dac3ad0c6afc00$var$t3 || ($f3dac3ad0c6afc00$var$t3 = $f3dac3ad0c6afc00$var$_`
  width: 60px;
`));


const $9488d9f52eb8d5ae$export$eab4424f030fcb21 = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $7XpC5$useModal)((0, $7XpC5$WALLET_MODAL).wallet);
    const { account: account  } = (0, $7XpC5$useSDK)();
    const { data: balance , initialLoading: initialLoading  } = (0, $7XpC5$useEthereumBalance)();
    return /*#__PURE__*/ (0, $7XpC5$jsx)((0, $f3dac3ad0c6afc00$export$b4b09ec636b8dc92), {
        size: "sm",
        variant: "text",
        color: "secondary",
        onClick: openModal,
        ...rest,
        children: /*#__PURE__*/ (0, $7XpC5$jsx)((0, $f3dac3ad0c6afc00$export$1ba39b57e9c6b91f), {
            children: /*#__PURE__*/ (0, $7XpC5$jsx)((0, $f3dac3ad0c6afc00$export$8d4cce15cb50cfeb), {
                children: initialLoading ? /*#__PURE__*/ (0, $7XpC5$jsx)((0, $f3dac3ad0c6afc00$export$39c6911ce38c2d39), {}) : // TODO: 'ETH' to dynamic symbol
                /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$FormatToken), {
                    amount: balance,
                    symbol: "ETH"
                })
            })
        })
    });
};







const $271aafb49a2509a6$export$ba0ef3a0d99fcc8f = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $7XpC5$useModal)((0, $7XpC5$WALLET_MODAL).connect);
    return /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$Button), {
        onClick: openModal,
        ...rest,
        children: "Connect wallet"
    });
};





let $2de0cf6e87228824$var$_ = (t)=>t, $2de0cf6e87228824$var$t;
const $2de0cf6e87228824$export$8f0e76783cf20ca4 = (0, $7XpC5$styledcomponents).span($2de0cf6e87228824$var$t || ($2de0cf6e87228824$var$t = $2de0cf6e87228824$var$_`
  margin-right: ${0}px;
  color: ${0};
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.xl, ({ $color: $color  })=>$color);


const $b56e92e639f015e6$export$5ff29b4461d0d45f = ()=>{
    const { active: active , chainId: chainId  } = (0, $7XpC5$useWeb3)();
    const chainName = chainId ? (0, $7XpC5$CHAINS)[chainId] : (0, $7XpC5$CHAINS).Mainnet;
    const testNet = chainId !== (0, $7XpC5$CHAINS).Mainnet;
    const showNet = testNet && active;
    return /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $7XpC5$Fragment), {
        children: [
            showNet && /*#__PURE__*/ (0, $7XpC5$jsx)((0, $2de0cf6e87228824$export$8f0e76783cf20ca4), {
                $color: (0, $7XpC5$getChainColor)(chainId || (0, $7XpC5$CHAINS).Mainnet),
                children: chainName
            }),
            active ? /*#__PURE__*/ (0, $7XpC5$jsx)((0, $9488d9f52eb8d5ae$export$eab4424f030fcb21), {}) : /*#__PURE__*/ (0, $7XpC5$jsx)((0, $271aafb49a2509a6$export$ba0ef3a0d99fcc8f), {
                size: "sm"
            }),
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$ThemeToggler), {})
        ]
    });
};










let $5ec3ac63a2ac1a77$var$_ = (t)=>t, $5ec3ac63a2ac1a77$var$t;
const $5ec3ac63a2ac1a77$export$25da3807dbd81a49 = (0, $7XpC5$styledcomponents).a($5ec3ac63a2ac1a77$var$t || ($5ec3ac63a2ac1a77$var$t = $5ec3ac63a2ac1a77$var$_`
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


const $40c7776ca68d16e5$export$721ee963a67379f1 = ({ icon: icon , title: title , href: href , external: external  })=>{
    // TODO: use ...rest for styling
    // const { icon, title, href, external } = props
    const router = (0, $7XpC5$useRouter)();
    const searchParamsString = new URLSearchParams(router.query).toString();
    // TODO: for `ref` and `embed` (Andrey) do we need it?
    const queryString = searchParamsString ? `?${searchParamsString}` : "";
    const pathWithQuery = href + `${queryString}`;
    return external ? /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $5ec3ac63a2ac1a77$export$25da3807dbd81a49), {
        href: pathWithQuery,
        active: router.pathname === href,
        target: "_blank",
        children: [
            icon,
            /*#__PURE__*/ (0, $7XpC5$jsx)("span", {
                children: title
            })
        ]
    }) : // Fix hydration error https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$LocalLink), {
        href: href,
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $5ec3ac63a2ac1a77$export$25da3807dbd81a49), {
            active: router.pathname === href,
            children: [
                icon,
                /*#__PURE__*/ (0, $7XpC5$jsx)("span", {
                    children: title
                })
            ]
        })
    });
};







let $e0081a5845b1218c$var$_ = (t)=>t, $e0081a5845b1218c$var$t, $e0081a5845b1218c$var$t1, $e0081a5845b1218c$var$t2;
const $e0081a5845b1218c$export$7bc8c02c4f2d6836 = (0, $7XpC5$css)($e0081a5845b1218c$var$t || ($e0081a5845b1218c$var$t = $e0081a5845b1218c$var$_`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`));
const $e0081a5845b1218c$var$mobileCss = (0, $7XpC5$css)($e0081a5845b1218c$var$t1 || ($e0081a5845b1218c$var$t1 = $e0081a5845b1218c$var$_`
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
const $e0081a5845b1218c$export$f8af16d8231e3b4e = (0, $7XpC5$styledcomponents).div($e0081a5845b1218c$var$t2 || ($e0081a5845b1218c$var$t2 = $e0081a5845b1218c$var$_`
  ${0}

  ${0} {
    ${0}
  }

  z-index: 6;
`), $e0081a5845b1218c$export$7bc8c02c4f2d6836, ({ theme: theme  })=>theme.mediaQueries.lg, $e0081a5845b1218c$var$mobileCss);


const $ce4f5f968a825d48$export$b8a61e5c71402559 = /*#__PURE__*/ (0, $7XpC5$memo)((props)=>{
    const { pages: pages  } = props;
    if (!pages) return /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$Fragment), {});
    return /*#__PURE__*/ (0, $7XpC5$jsx)((0, $e0081a5845b1218c$export$f8af16d8231e3b4e), {
        children: pages.map((pageProps)=>/*#__PURE__*/ (0, $7XpC5$jsx)((0, $40c7776ca68d16e5$export$721ee963a67379f1), {
                ...pageProps
            }, pageProps.href))
    });
});
$ce4f5f968a825d48$export$b8a61e5c71402559.displayName = "Navigation";








let $3cc67041739bea3b$var$_ = (t)=>t, $3cc67041739bea3b$var$t, $3cc67041739bea3b$var$t1, $3cc67041739bea3b$var$t2;
const $3cc67041739bea3b$export$54a719cd6595ff5c = (0, $7XpC5$styledcomponents)((0, $7XpC5$Container))($3cc67041739bea3b$var$t || ($3cc67041739bea3b$var$t = $3cc67041739bea3b$var$_`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`));
const $3cc67041739bea3b$export$d69c4113bed92823 = (0, $7XpC5$styledcomponents).div($3cc67041739bea3b$var$t1 || ($3cc67041739bea3b$var$t1 = $3cc67041739bea3b$var$_`
  overflow: hidden;
  flex-shrink: 0;

  ${0} {
    width: 14px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $3cc67041739bea3b$export$af0f646b086814d1 = (0, $7XpC5$styledcomponents).div($3cc67041739bea3b$var$t2 || ($3cc67041739bea3b$var$t2 = $3cc67041739bea3b$var$_`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`));


const $a0b144425d48bbae$var$Header = (props)=>{
    const { pages: pages  } = props;
    return /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $3cc67041739bea3b$export$54a719cd6595ff5c), {
        size: "full",
        forwardedAs: "header",
        children: [
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $3cc67041739bea3b$export$d69c4113bed92823), {
                children: /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$nextlink), {
                    href: "/",
                    passHref: true,
                    legacyBehavior: true,
                    children: /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$LidoLogo), {})
                })
            }),
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $ce4f5f968a825d48$export$b8a61e5c71402559), {
                pages: pages
            }),
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $3cc67041739bea3b$export$af0f646b086814d1), {
                children: /*#__PURE__*/ (0, $7XpC5$jsx)((0, $b56e92e639f015e6$export$5ff29b4461d0d45f), {})
            })
        ]
    });
};
var $a0b144425d48bbae$export$2e2bcd8739ae039 = $a0b144425d48bbae$var$Header;







let $5ad2e09d34fabd9e$var$_ = (t)=>t, $5ad2e09d34fabd9e$var$t;
const $5ad2e09d34fabd9e$export$1098d4de7cbde8b = (0, $7XpC5$styledcomponents)((0, $7XpC5$Container))($5ad2e09d34fabd9e$var$t || ($5ad2e09d34fabd9e$var$t = $5ad2e09d34fabd9e$var$_`
  position: relative;
  margin-top: ${0}px;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $24679ce90808b5b4$var$Main = (props)=>{
    return /*#__PURE__*/ (0, $7XpC5$jsx)((0, $5ad2e09d34fabd9e$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });
};
var $24679ce90808b5b4$export$2e2bcd8739ae039 = $24679ce90808b5b4$var$Main;





let $e165915a57846d7d$var$_ = (t)=>t, $e165915a57846d7d$var$t, $e165915a57846d7d$var$t1;
const $e165915a57846d7d$export$de4797fa0cf99ab6 = (0, $7XpC5$styledcomponents).h1($e165915a57846d7d$var$t || ($e165915a57846d7d$var$t = $e165915a57846d7d$var$_`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xl);
const $e165915a57846d7d$export$731f89f04b9d0607 = (0, $7XpC5$styledcomponents).h2($e165915a57846d7d$var$t1 || ($e165915a57846d7d$var$t1 = $e165915a57846d7d$var$_`
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
(0, $7XpC5$migrationThemeCookiesToCrossDomainCookiesClientSide)();
const $c9750bb567934a74$export$8e0cdabd0fe32f2d = ({ ...props })=>{
    /*#__PURE__*/ return (0, $7XpC5$jsxs)((0, $7XpC5$CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $43576bcd02538192$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$ProviderWeb3), {
                ...props.web3,
                children: /*#__PURE__*/ (0, $7XpC5$jsxs)((0, $7XpC5$ProviderWalletModal), {
                    ...props.reefKnot,
                    children: [
                        /*#__PURE__*/ (0, $7XpC5$jsx)((0, $a0b144425d48bbae$export$2e2bcd8739ae039), {
                            pages: props === null || props === void 0 ? void 0 : props.pages
                        }),
                        /*#__PURE__*/ (0, $7XpC5$jsx)((0, $24679ce90808b5b4$export$2e2bcd8739ae039), {
                            children: props.children
                        }),
                        /*#__PURE__*/ (0, $7XpC5$jsx)((0, $587ae881875a0357$export$2e2bcd8739ae039), {}),
                        /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$CookiesTooltip), {}),
                        /*#__PURE__*/ (0, $7XpC5$jsx)((0, $7XpC5$ToastContainer), {})
                    ]
                })
            })
        ]
    });
};


export {$c9750bb567934a74$export$8e0cdabd0fe32f2d as WidgetApp, $e165915a57846d7d$export$de4797fa0cf99ab6 as LayoutTitle, $e165915a57846d7d$export$731f89f04b9d0607 as LayoutSubTitle};
//# sourceMappingURL=index.mjs.map
