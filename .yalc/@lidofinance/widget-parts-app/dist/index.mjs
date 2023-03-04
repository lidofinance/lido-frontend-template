import {jsxs as $bc9Yn$jsxs, jsx as $bc9Yn$jsx, Fragment as $bc9Yn$Fragment} from "react/jsx-runtime";
import {migrationThemeCookiesToCrossDomainCookiesClientSide as $bc9Yn$migrationThemeCookiesToCrossDomainCookiesClientSide, CookieThemeProvider as $bc9Yn$CookieThemeProvider, CookiesTooltip as $bc9Yn$CookiesTooltip, ToastContainer as $bc9Yn$ToastContainer, LidoLogo as $bc9Yn$LidoLogo, Container as $bc9Yn$Container, Divider as $bc9Yn$Divider, Link as $bc9Yn$Link, ThemeToggler as $bc9Yn$ThemeToggler, Button as $bc9Yn$Button, InlineLoader as $bc9Yn$InlineLoader} from "@lidofinance/lido-ui";
import {ProviderWalletModal as $bc9Yn$ProviderWalletModal, useModal as $bc9Yn$useModal, WALLET_MODAL as $bc9Yn$WALLET_MODAL} from "@lidofinance/widget-parts-wallet-modal";
import {ProviderWeb3 as $bc9Yn$ProviderWeb3, useWeb3 as $bc9Yn$useWeb3} from "@reef-knot/web3-react";
import $bc9Yn$styledcomponents, {createGlobalStyle as $bc9Yn$createGlobalStyle, css as $bc9Yn$css} from "styled-components";
import $bc9Yn$nextlink from "next/link";
import {CHAINS as $bc9Yn$CHAINS, getChainColor as $bc9Yn$getChainColor} from "@lido-sdk/constants";
import {useSDK as $bc9Yn$useSDK, useEthereumBalance as $bc9Yn$useEthereumBalance} from "@lido-sdk/react";
import {FormatToken as $bc9Yn$FormatToken, AddressBadge as $bc9Yn$AddressBadge, LocalLink as $bc9Yn$LocalLink} from "@lidofinance/widget-parts-ui-primitives";
import {memo as $bc9Yn$memo} from "react";
import {useRouter as $bc9Yn$useRouter} from "next/router";






let $a7c4f542cf94957a$var$_ = (t)=>t, $a7c4f542cf94957a$var$t;
const $a7c4f542cf94957a$var$GlobalStyles = (0, $bc9Yn$createGlobalStyle)($a7c4f542cf94957a$var$t || ($a7c4f542cf94957a$var$t = $a7c4f542cf94957a$var$_`
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
var $a7c4f542cf94957a$export$2e2bcd8739ae039 = $a7c4f542cf94957a$var$GlobalStyles;






let $2fd0dd58dd23e587$var$_ = (t)=>t, $2fd0dd58dd23e587$var$t, $2fd0dd58dd23e587$var$t1, $2fd0dd58dd23e587$var$t2, $2fd0dd58dd23e587$var$t3, $2fd0dd58dd23e587$var$t4, $2fd0dd58dd23e587$var$t5, $2fd0dd58dd23e587$var$t6;
const $2fd0dd58dd23e587$export$51574cb47565ad4f = (0, $bc9Yn$styledcomponents)((0, $bc9Yn$Container))($2fd0dd58dd23e587$var$t || ($2fd0dd58dd23e587$var$t = $2fd0dd58dd23e587$var$_`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${0} {
    padding-top: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $2fd0dd58dd23e587$export$3e9753e910d67bc5 = (0, $bc9Yn$styledcomponents)((0, $bc9Yn$Divider))($2fd0dd58dd23e587$var$t1 || ($2fd0dd58dd23e587$var$t1 = $2fd0dd58dd23e587$var$_`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${0} {
    margin-bottom: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $2fd0dd58dd23e587$export$7b4485b886e9117a = (0, $bc9Yn$styledcomponents).div($2fd0dd58dd23e587$var$t2 || ($2fd0dd58dd23e587$var$t2 = $2fd0dd58dd23e587$var$_`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${0} {
    flex-basis: 100%;
    order: 2;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $2fd0dd58dd23e587$export$531d2b9d9d383692 = (0, $bc9Yn$styledcomponents).div($2fd0dd58dd23e587$var$t3 || ($2fd0dd58dd23e587$var$t3 = $2fd0dd58dd23e587$var$_`
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
const $2fd0dd58dd23e587$export$53e4a0ea45e729a2 = (0, $bc9Yn$styledcomponents).h4($2fd0dd58dd23e587$var$t4 || ($2fd0dd58dd23e587$var$t4 = $2fd0dd58dd23e587$var$_`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.4em;
`), ({ theme: theme  })=>theme.fontSizesMap.sm);
const $2fd0dd58dd23e587$export$655f131bfd3955dd = (0, $bc9Yn$styledcomponents).div($2fd0dd58dd23e587$var$t5 || ($2fd0dd58dd23e587$var$t5 = $2fd0dd58dd23e587$var$_`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${0}px;
  line-height: 1.6em;
`), ({ theme: theme  })=>theme.fontSizesMap.xs);
const $2fd0dd58dd23e587$export$70ac745ffa2bea38 = (0, $bc9Yn$styledcomponents)((0, $bc9Yn$Link))($2fd0dd58dd23e587$var$t6 || ($2fd0dd58dd23e587$var$t6 = $2fd0dd58dd23e587$var$_`
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


const $f62402c0b393673c$var$Footer = ()=>/*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $2fd0dd58dd23e587$export$51574cb47565ad4f), {
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$3e9753e910d67bc5), {}),
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$7b4485b886e9117a), {
                children: /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$LidoLogo), {})
            }),
            /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $2fd0dd58dd23e587$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$53e4a0ea45e729a2), {
                        children: "Resources"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://stake.lido.fi/",
                        children: "Stake with Lido"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
                        children: "Primer"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/terms-of-use",
                        children: "Terms of Use"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/privacy-notice",
                        children: "Privacy Notice"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/faq",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/LIDO_press_kit.zip",
                        children: "Press Kit"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $2fd0dd58dd23e587$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$53e4a0ea45e729a2), {
                        children: "Community"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://twitter.com/lidofinance",
                        children: "Twitter"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://t.me/lidofinance",
                        children: "Telegram"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://discord.gg/vgdPfhZ",
                        children: "Discord"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://github.com/lidofinance",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://www.reddit.com/r/LidoFinance/",
                        children: "Reddit"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://blog.lido.fi/",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $2fd0dd58dd23e587$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$53e4a0ea45e729a2), {
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "mailto:info@lido.fi",
                        children: "info@lido.fi"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$70ac745ffa2bea38), {
                        href: "https://help.lido.fi/",
                        children: "Help Center"
                    }),
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2fd0dd58dd23e587$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            })
        ]
    });
var $f62402c0b393673c$export$2e2bcd8739ae039 = $f62402c0b393673c$var$Footer;



















let $bc50ec06b964378c$var$_ = (t)=>t, $bc50ec06b964378c$var$t, $bc50ec06b964378c$var$t1, $bc50ec06b964378c$var$t2, $bc50ec06b964378c$var$t3;
const $bc50ec06b964378c$export$b4b09ec636b8dc92 = (0, $bc9Yn$styledcomponents)((0, $bc9Yn$Button))($bc50ec06b964378c$var$t || ($bc50ec06b964378c$var$t = $bc50ec06b964378c$var$_`
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`));
const $bc50ec06b964378c$export$1ba39b57e9c6b91f = (0, $bc9Yn$styledcomponents).span($bc50ec06b964378c$var$t1 || ($bc50ec06b964378c$var$t1 = $bc50ec06b964378c$var$_`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -10px -18px;
`));
const $bc50ec06b964378c$export$8d4cce15cb50cfeb = (0, $bc9Yn$styledcomponents).span($bc50ec06b964378c$var$t2 || ($bc50ec06b964378c$var$t2 = $bc50ec06b964378c$var$_`
  margin-right: 12px;
  margin-left: 4px;
  font-size: ${0}px;

  ${0} {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xs, ({ theme: theme  })=>theme.mediaQueries.md);
const $bc50ec06b964378c$export$39c6911ce38c2d39 = (0, $bc9Yn$styledcomponents)((0, $bc9Yn$InlineLoader))($bc50ec06b964378c$var$t3 || ($bc50ec06b964378c$var$t3 = $bc50ec06b964378c$var$_`
  width: 60px;
`));


const $53a41cb58e5b817d$var$WalletButton = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $bc9Yn$useModal)((0, $bc9Yn$WALLET_MODAL).wallet);
    const { account: account  } = (0, $bc9Yn$useSDK)();
    const { data: balance , initialLoading: initialLoading  } = (0, $bc9Yn$useEthereumBalance)();
    return /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc50ec06b964378c$export$b4b09ec636b8dc92), {
        size: "sm",
        variant: "text",
        color: "secondary",
        onClick: openModal,
        ...rest,
        children: /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $bc50ec06b964378c$export$1ba39b57e9c6b91f), {
            children: [
                /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc50ec06b964378c$export$8d4cce15cb50cfeb), {
                    children: initialLoading ? /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc50ec06b964378c$export$39c6911ce38c2d39), {}) : // TODO: 'ETH' to dynamic symbol
                    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$FormatToken), {
                        amount: balance,
                        symbol: "ETH"
                    })
                }),
                /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$AddressBadge), {
                    address: account
                })
            ]
        })
    });
};
var $53a41cb58e5b817d$export$2e2bcd8739ae039 = $53a41cb58e5b817d$var$WalletButton;







const $e954803f2a038505$var$WalletConnect = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $bc9Yn$useModal)((0, $bc9Yn$WALLET_MODAL).connect);
    return /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$Button), {
        onClick: openModal,
        ...rest,
        children: "Connect wallet"
    });
};
var $e954803f2a038505$export$2e2bcd8739ae039 = $e954803f2a038505$var$WalletConnect;





let $2ed5b105e5b3a765$var$_ = (t)=>t, $2ed5b105e5b3a765$var$t;
const $2ed5b105e5b3a765$export$8f0e76783cf20ca4 = (0, $bc9Yn$styledcomponents).span($2ed5b105e5b3a765$var$t || ($2ed5b105e5b3a765$var$t = $2ed5b105e5b3a765$var$_`
  margin-right: ${0}px;
  color: ${0};
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.xl, ({ $color: $color  })=>$color);


const $238cca9490b0956e$var$HeaderWallet = ()=>{
    const { active: active  } = (0, $bc9Yn$useWeb3)();
    const { chainId: chainId  } = (0, $bc9Yn$useSDK)();
    const chainName = (0, $bc9Yn$CHAINS)[chainId];
    const testNet = chainId !== (0, $bc9Yn$CHAINS).Mainnet;
    const showNet = testNet && active;
    return /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $bc9Yn$Fragment), {
        children: [
            showNet && /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $2ed5b105e5b3a765$export$8f0e76783cf20ca4), {
                $color: (0, $bc9Yn$getChainColor)(chainId),
                children: chainName
            }),
            active ? /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $53a41cb58e5b817d$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $e954803f2a038505$export$2e2bcd8739ae039), {
                size: "sm"
            }),
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$ThemeToggler), {})
        ]
    });
};
var $238cca9490b0956e$export$2e2bcd8739ae039 = $238cca9490b0956e$var$HeaderWallet;










let $be131e06952bbb23$var$_ = (t)=>t, $be131e06952bbb23$var$t;
const $be131e06952bbb23$export$25da3807dbd81a49 = (0, $bc9Yn$styledcomponents).a($be131e06952bbb23$var$t || ($be131e06952bbb23$var$t = $be131e06952bbb23$var$_`
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


const $cdd11b83d687451f$var$NavigationLink = (props)=>{
    const { icon: icon , title: title , href: href , external: external  } = props;
    const router = (0, $bc9Yn$useRouter)();
    const searchParamsString = new URLSearchParams(router.query).toString();
    const queryString = searchParamsString ? `?${searchParamsString}` : "";
    const pathWithQuery = href + `${queryString}`;
    return external ? /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $be131e06952bbb23$export$25da3807dbd81a49), {
        href: pathWithQuery,
        active: router.pathname === href,
        target: "_blank",
        children: [
            icon,
            /*#__PURE__*/ (0, $bc9Yn$jsx)("span", {
                children: title
            })
        ]
    }) : // Fix hydration error https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$LocalLink), {
        href: href,
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $be131e06952bbb23$export$25da3807dbd81a49), {
            active: router.pathname === href,
            children: [
                icon,
                /*#__PURE__*/ (0, $bc9Yn$jsx)("span", {
                    children: title
                })
            ]
        })
    });
};
var $cdd11b83d687451f$export$2e2bcd8739ae039 = $cdd11b83d687451f$var$NavigationLink;







let $7669051e108fa188$var$_ = (t)=>t, $7669051e108fa188$var$t, $7669051e108fa188$var$t1, $7669051e108fa188$var$t2;
const $7669051e108fa188$export$7bc8c02c4f2d6836 = (0, $bc9Yn$css)($7669051e108fa188$var$t || ($7669051e108fa188$var$t = $7669051e108fa188$var$_`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`));
const $7669051e108fa188$var$mobileCss = (0, $bc9Yn$css)($7669051e108fa188$var$t1 || ($7669051e108fa188$var$t1 = $7669051e108fa188$var$_`
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
const $7669051e108fa188$export$f8af16d8231e3b4e = (0, $bc9Yn$styledcomponents).div($7669051e108fa188$var$t2 || ($7669051e108fa188$var$t2 = $7669051e108fa188$var$_`
  ${0}

  ${0} {
    ${0}
  }

  z-index: 6;
`), $7669051e108fa188$export$7bc8c02c4f2d6836, ({ theme: theme  })=>theme.mediaQueries.lg, $7669051e108fa188$var$mobileCss);


const $ef705fb43443e47c$var$Navigation = /*#__PURE__*/ (0, $bc9Yn$memo)((props)=>{
    const { pages: pages  } = props;
    if (!pages) return /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$Fragment), {});
    return /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $7669051e108fa188$export$f8af16d8231e3b4e), {
        children: pages.map((pageProps)=>/*#__PURE__*/ (0, $bc9Yn$jsx)((0, $cdd11b83d687451f$export$2e2bcd8739ae039), {
                ...pageProps
            }, pageProps.href))
    });
});
$ef705fb43443e47c$var$Navigation.displayName = "Navigation";
var $ef705fb43443e47c$export$2e2bcd8739ae039 = $ef705fb43443e47c$var$Navigation;








let $705fbb3d51a388a1$var$_ = (t)=>t, $705fbb3d51a388a1$var$t, $705fbb3d51a388a1$var$t1, $705fbb3d51a388a1$var$t2;
const $705fbb3d51a388a1$export$54a719cd6595ff5c = (0, $bc9Yn$styledcomponents)((0, $bc9Yn$Container))($705fbb3d51a388a1$var$t || ($705fbb3d51a388a1$var$t = $705fbb3d51a388a1$var$_`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`));
const $705fbb3d51a388a1$export$d69c4113bed92823 = (0, $bc9Yn$styledcomponents).div($705fbb3d51a388a1$var$t1 || ($705fbb3d51a388a1$var$t1 = $705fbb3d51a388a1$var$_`
  overflow: hidden;
  flex-shrink: 0;

  ${0} {
    width: 14px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $705fbb3d51a388a1$export$af0f646b086814d1 = (0, $bc9Yn$styledcomponents).div($705fbb3d51a388a1$var$t2 || ($705fbb3d51a388a1$var$t2 = $705fbb3d51a388a1$var$_`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`));


const $15969dcc6542285e$var$Header = (props)=>{
    const { pages: pages  } = props;
    return /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $705fbb3d51a388a1$export$54a719cd6595ff5c), {
        size: "full",
        forwardedAs: "header",
        children: [
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $705fbb3d51a388a1$export$d69c4113bed92823), {
                children: /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$nextlink), {
                    href: "/",
                    children: /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$LidoLogo), {})
                })
            }),
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $ef705fb43443e47c$export$2e2bcd8739ae039), {
                pages: pages
            }),
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $705fbb3d51a388a1$export$af0f646b086814d1), {
                children: /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $238cca9490b0956e$export$2e2bcd8739ae039), {})
            })
        ]
    });
};
var $15969dcc6542285e$export$2e2bcd8739ae039 = $15969dcc6542285e$var$Header;







let $739c6830ff7582a7$var$_ = (t)=>t, $739c6830ff7582a7$var$t;
const $739c6830ff7582a7$export$1098d4de7cbde8b = (0, $bc9Yn$styledcomponents)((0, $bc9Yn$Container))($739c6830ff7582a7$var$t || ($739c6830ff7582a7$var$t = $739c6830ff7582a7$var$_`
  position: relative;
  margin-top: ${0}px;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $009c299566d495f4$var$Main = (props)=>{
    return /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $739c6830ff7582a7$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });
};
var $009c299566d495f4$export$2e2bcd8739ae039 = $009c299566d495f4$var$Main;






// Migrations old cookies to new cross domain cookies
(0, $bc9Yn$migrationThemeCookiesToCrossDomainCookiesClientSide)();
const $bdd167fe6ac54bbb$export$8e0cdabd0fe32f2d = ({ ...props })=>/*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $bc9Yn$CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $a7c4f542cf94957a$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$ProviderWeb3), {
                ...props.web3,
                children: /*#__PURE__*/ (0, $bc9Yn$jsxs)((0, $bc9Yn$ProviderWalletModal), {
                    ...props.reefKnot,
                    children: [
                        /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $009c299566d495f4$export$2e2bcd8739ae039), {
                            children: props.children
                        }),
                        /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $f62402c0b393673c$export$2e2bcd8739ae039), {}),
                        /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$CookiesTooltip), {}),
                        /*#__PURE__*/ (0, $bc9Yn$jsx)((0, $bc9Yn$ToastContainer), {})
                    ]
                })
            })
        ]
    });


export {$bdd167fe6ac54bbb$export$8e0cdabd0fe32f2d as WidgetApp};
//# sourceMappingURL=index.mjs.map
