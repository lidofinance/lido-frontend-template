import {jsxs as $gv0PY$jsxs, jsx as $gv0PY$jsx, Fragment as $gv0PY$Fragment} from "react/jsx-runtime";
import $gv0PY$react, {memo as $gv0PY$memo} from "react";
import {migrationThemeCookiesToCrossDomainCookiesClientSide as $gv0PY$migrationThemeCookiesToCrossDomainCookiesClientSide, CookieThemeProvider as $gv0PY$CookieThemeProvider, CookiesTooltip as $gv0PY$CookiesTooltip, ToastContainer as $gv0PY$ToastContainer, LidoLogo as $gv0PY$LidoLogo, Container as $gv0PY$Container, Divider as $gv0PY$Divider, Link as $gv0PY$Link, ThemeToggler as $gv0PY$ThemeToggler} from "@lidofinance/lido-ui";
import $gv0PY$styledcomponents, {createGlobalStyle as $gv0PY$createGlobalStyle, css as $gv0PY$css} from "styled-components";
import $gv0PY$nextlink from "next/link";
import {useRouter as $gv0PY$useRouter} from "next/router";
import {LidoLink as $gv0PY$LidoLink} from "@lidofinance/next-ui-primitives";





let $9443e46d40e21d27$var$_ = (t)=>t, $9443e46d40e21d27$var$t;
const $9443e46d40e21d27$export$c507fb1c2e1ac13a = (0, $gv0PY$createGlobalStyle)($9443e46d40e21d27$var$t || ($9443e46d40e21d27$var$t = $9443e46d40e21d27$var$_`
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






let $bfd8aa9b9c7d635f$var$_ = (t)=>t, $bfd8aa9b9c7d635f$var$t, $bfd8aa9b9c7d635f$var$t1, $bfd8aa9b9c7d635f$var$t2, $bfd8aa9b9c7d635f$var$t3, $bfd8aa9b9c7d635f$var$t4, $bfd8aa9b9c7d635f$var$t5, $bfd8aa9b9c7d635f$var$t6;
const $bfd8aa9b9c7d635f$export$51574cb47565ad4f = (0, $gv0PY$styledcomponents)((0, $gv0PY$Container))($bfd8aa9b9c7d635f$var$t || ($bfd8aa9b9c7d635f$var$t = $bfd8aa9b9c7d635f$var$_`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${0} {
    padding-top: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $bfd8aa9b9c7d635f$export$3e9753e910d67bc5 = (0, $gv0PY$styledcomponents)((0, $gv0PY$Divider))($bfd8aa9b9c7d635f$var$t1 || ($bfd8aa9b9c7d635f$var$t1 = $bfd8aa9b9c7d635f$var$_`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${0} {
    margin-bottom: 40px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);
const $bfd8aa9b9c7d635f$export$7b4485b886e9117a = (0, $gv0PY$styledcomponents).div($bfd8aa9b9c7d635f$var$t2 || ($bfd8aa9b9c7d635f$var$t2 = $bfd8aa9b9c7d635f$var$_`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${0} {
    flex-basis: 100%;
    order: 2;
  }
`), ({ theme: theme  })=>theme.mediaQueries.lg);
const $bfd8aa9b9c7d635f$export$531d2b9d9d383692 = (0, $gv0PY$styledcomponents).div($bfd8aa9b9c7d635f$var$t3 || ($bfd8aa9b9c7d635f$var$t3 = $bfd8aa9b9c7d635f$var$_`
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
const $bfd8aa9b9c7d635f$export$53e4a0ea45e729a2 = (0, $gv0PY$styledcomponents).h4($bfd8aa9b9c7d635f$var$t4 || ($bfd8aa9b9c7d635f$var$t4 = $bfd8aa9b9c7d635f$var$_`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.4em;
`), ({ theme: theme  })=>theme.fontSizesMap.sm);
const $bfd8aa9b9c7d635f$export$655f131bfd3955dd = (0, $gv0PY$styledcomponents).div($bfd8aa9b9c7d635f$var$t5 || ($bfd8aa9b9c7d635f$var$t5 = $bfd8aa9b9c7d635f$var$_`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${0}px;
  line-height: 1.6em;
`), ({ theme: theme  })=>theme.fontSizesMap.xs);
const $bfd8aa9b9c7d635f$export$70ac745ffa2bea38 = (0, $gv0PY$styledcomponents)((0, $gv0PY$Link))($bfd8aa9b9c7d635f$var$t6 || ($bfd8aa9b9c7d635f$var$t6 = $bfd8aa9b9c7d635f$var$_`
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


const $acdcb1d026776f13$export$a06f1c675e846f6f = ({ ...rest })=>/*#__PURE__*/ (0, $gv0PY$jsxs)((0, $bfd8aa9b9c7d635f$export$51574cb47565ad4f), {
        ...rest,
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$3e9753e910d67bc5), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$7b4485b886e9117a), {
                children: /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$LidoLogo), {})
            }),
            /*#__PURE__*/ (0, $gv0PY$jsxs)((0, $bfd8aa9b9c7d635f$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$53e4a0ea45e729a2), {
                        children: "Resources"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://stake.lido.fi/",
                        children: "Stake with Lido"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
                        children: "Primer"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/terms-of-use",
                        children: "Terms of Use"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/privacy-notice",
                        children: "Privacy Notice"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/faq",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://lido.fi/static/LIDO_press_kit.zip",
                        children: "Press Kit"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $gv0PY$jsxs)((0, $bfd8aa9b9c7d635f$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$53e4a0ea45e729a2), {
                        children: "Community"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://twitter.com/lidofinance",
                        children: "Twitter"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://t.me/lidofinance",
                        children: "Telegram"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://discord.gg/vgdPfhZ",
                        children: "Discord"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://github.com/lidofinance",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://www.reddit.com/r/LidoFinance/",
                        children: "Reddit"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://blog.lido.fi/",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $gv0PY$jsxs)((0, $bfd8aa9b9c7d635f$export$531d2b9d9d383692), {
                children: [
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$53e4a0ea45e729a2), {
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "mailto:info@lido.fi",
                        children: "info@lido.fi"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$70ac745ffa2bea38), {
                        href: "https://help.lido.fi/",
                        children: "Help Center"
                    }),
                    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$655f131bfd3955dd), {
                        children: "Some text"
                    })
                ]
            })
        ]
    });











let $7861520291ce5a13$var$_ = (t)=>t, $7861520291ce5a13$var$t;
const $7861520291ce5a13$export$af0f646b086814d1 = (0, $gv0PY$styledcomponents).div($7861520291ce5a13$var$t || ($7861520291ce5a13$var$t = $7861520291ce5a13$var$_`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`));


const $cbf1a2d5ec325762$export$223875819fd7cf93 = (props)=>{
    const { leftSlot: leftSlot , ...rest } = props;
    return /*#__PURE__*/ (0, $gv0PY$jsxs)((0, $7861520291ce5a13$export$af0f646b086814d1), {
        ...rest,
        children: [
            leftSlot,
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$ThemeToggler), {})
        ]
    });
};











let $1b182eeff22f5ff5$var$_ = (t)=>t, $1b182eeff22f5ff5$var$t;
const $1b182eeff22f5ff5$export$25da3807dbd81a49 = (0, $gv0PY$styledcomponents)((0, $gv0PY$LidoLink))($1b182eeff22f5ff5$var$t || ($1b182eeff22f5ff5$var$t = $1b182eeff22f5ff5$var$_`
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
`), ({ theme: theme  })=>theme.fontSizesMap.xxxs, ({ $active: $active  })=>$active ? 1 : 0.8, ({ $active: $active  })=>$active ? `var(--lido-color-primary)` : `var(--lido-color-secondary)`, ({ theme: theme  })=>theme.mediaQueries.lg, ({ theme: theme  })=>theme.fontSizesMap.xxxs);


const $158badbcc92b8a29$export$721ee963a67379f1 = ({ icon: icon , title: title , href: href , ...rest })=>{
    const { pathname: pathname  } = (0, $gv0PY$useRouter)();
    // compare without query string
    const active = pathname === href.split("?")[0];
    return /*#__PURE__*/ (0, $gv0PY$jsx)((0, $1b182eeff22f5ff5$export$25da3807dbd81a49), {
        ...rest,
        href: href,
        $active: active,
        children: /*#__PURE__*/ (0, $gv0PY$jsxs)((0, $gv0PY$react).Fragment, {
            children: [
                icon,
                /*#__PURE__*/ (0, $gv0PY$jsx)("span", {
                    children: title
                })
            ]
        })
    });
};





let $f275cfeaf9486c8e$var$_ = (t)=>t, $f275cfeaf9486c8e$var$t, $f275cfeaf9486c8e$var$t1, $f275cfeaf9486c8e$var$t2;
const $f275cfeaf9486c8e$export$7bc8c02c4f2d6836 = (0, $gv0PY$css)($f275cfeaf9486c8e$var$t || ($f275cfeaf9486c8e$var$t = $f275cfeaf9486c8e$var$_`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`));
const $f275cfeaf9486c8e$var$mobileCss = (0, $gv0PY$css)($f275cfeaf9486c8e$var$t1 || ($f275cfeaf9486c8e$var$t1 = $f275cfeaf9486c8e$var$_`
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
const $f275cfeaf9486c8e$export$f8af16d8231e3b4e = (0, $gv0PY$styledcomponents).div($f275cfeaf9486c8e$var$t2 || ($f275cfeaf9486c8e$var$t2 = $f275cfeaf9486c8e$var$_`
  ${0}

  ${0} {
    ${0}
  }

  z-index: 6;
`), $f275cfeaf9486c8e$export$7bc8c02c4f2d6836, ({ theme: theme  })=>theme.mediaQueries.lg, $f275cfeaf9486c8e$var$mobileCss);


const $783d85da9b1dc834$export$b8a61e5c71402559 = /*#__PURE__*/ (0, $gv0PY$memo)((props)=>{
    const { links: links , ...rest } = props;
    if (!links) return /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$Fragment), {});
    return /*#__PURE__*/ (0, $gv0PY$jsx)((0, $f275cfeaf9486c8e$export$f8af16d8231e3b4e), {
        ...rest,
        children: links.map((pageProps)=>/*#__PURE__*/ (0, $gv0PY$jsx)((0, $158badbcc92b8a29$export$721ee963a67379f1), {
                ...pageProps
            }, pageProps.href))
    });
});
$783d85da9b1dc834$export$b8a61e5c71402559.displayName = "Navigation";






let $af46b3954d96e837$var$_ = (t)=>t, $af46b3954d96e837$var$t, $af46b3954d96e837$var$t1;
const $af46b3954d96e837$export$54a719cd6595ff5c = (0, $gv0PY$styledcomponents)((0, $gv0PY$Container))($af46b3954d96e837$var$t || ($af46b3954d96e837$var$t = $af46b3954d96e837$var$_`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`));
const $af46b3954d96e837$export$d69c4113bed92823 = (0, $gv0PY$styledcomponents).div($af46b3954d96e837$var$t1 || ($af46b3954d96e837$var$t1 = $af46b3954d96e837$var$_`
  overflow: hidden;
  flex-shrink: 0;

  ${0} {
    width: 14px;
  }
`), ({ theme: theme  })=>theme.mediaQueries.md);


const $e06737997a3d64a1$export$8b251419efc915eb = (props)=>{
    const { navigation: navigation , headerActions: headerActions  } = props;
    return /*#__PURE__*/ (0, $gv0PY$jsxs)((0, $af46b3954d96e837$export$54a719cd6595ff5c), {
        ...props,
        size: "full",
        forwardedAs: "header",
        children: [
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $af46b3954d96e837$export$d69c4113bed92823), {
                children: /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$nextlink), {
                    href: "/",
                    passHref: true,
                    legacyBehavior: true,
                    children: /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$LidoLogo), {})
                })
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $783d85da9b1dc834$export$b8a61e5c71402559), {
                links: navigation
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $cbf1a2d5ec325762$export$223875819fd7cf93), {
                leftSlot: headerActions
            })
        ]
    });
};







let $d478dafe5e1a4039$var$_ = (t)=>t, $d478dafe5e1a4039$var$t;
const $d478dafe5e1a4039$export$1098d4de7cbde8b = (0, $gv0PY$styledcomponents)((0, $gv0PY$Container))($d478dafe5e1a4039$var$t || ($d478dafe5e1a4039$var$t = $d478dafe5e1a4039$var$_`
  position: relative;
  margin-top: ${0}px;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $0ca4c26db704cb04$export$861edd1ccea2f746 = (props)=>{
    return /*#__PURE__*/ (0, $gv0PY$jsx)((0, $d478dafe5e1a4039$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });
};





let $f6511209e9658628$var$_ = (t)=>t, $f6511209e9658628$var$t, $f6511209e9658628$var$t1;
const $f6511209e9658628$export$de4797fa0cf99ab6 = (0, $gv0PY$styledcomponents).h1($f6511209e9658628$var$t || ($f6511209e9658628$var$t = $f6511209e9658628$var$_`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xl);
const $f6511209e9658628$export$731f89f04b9d0607 = (0, $gv0PY$styledcomponents).h2($f6511209e9658628$var$t1 || ($f6511209e9658628$var$t1 = $f6511209e9658628$var$_`
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
(0, $gv0PY$migrationThemeCookiesToCrossDomainCookiesClientSide)();
const $65c37c265eb37c26$export$8e0cdabd0fe32f2d = ({ ...props })=>{
    return /*#__PURE__*/ (0, $gv0PY$jsxs)((0, $gv0PY$CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $9443e46d40e21d27$export$c507fb1c2e1ac13a), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $e06737997a3d64a1$export$8b251419efc915eb), {
                headerActions: props.headerActions,
                navigation: props === null || props === void 0 ? void 0 : props.navigation
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $0ca4c26db704cb04$export$861edd1ccea2f746), {
                children: props.children
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $acdcb1d026776f13$export$a06f1c675e846f6f), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$CookiesTooltip), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$ToastContainer), {})
        ]
    });
};


export {$65c37c265eb37c26$export$8e0cdabd0fe32f2d as WidgetApp, $f6511209e9658628$export$de4797fa0cf99ab6 as LayoutTitle, $f6511209e9658628$export$731f89f04b9d0607 as LayoutSubTitle};
//# sourceMappingURL=index.mjs.map
