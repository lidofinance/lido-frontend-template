import {jsxs as $gv0PY$jsxs, jsx as $gv0PY$jsx} from "react/jsx-runtime";
import $gv0PY$react, {memo as $gv0PY$memo} from "react";
import {CookieThemeProvider as $gv0PY$CookieThemeProvider, CookiesTooltip as $gv0PY$CookiesTooltip, ToastContainer as $gv0PY$ToastContainer, Container as $gv0PY$Container, Link as $gv0PY$Link, LidoLogo as $gv0PY$LidoLogo, ThemeToggler as $gv0PY$ThemeToggler} from "@lidofinance/lido-ui";
import $gv0PY$styledcomponents, {createGlobalStyle as $gv0PY$createGlobalStyle, css as $gv0PY$css} from "styled-components";
import $gv0PY$nextlink from "next/link";
import {useRouter as $gv0PY$useRouter} from "next/router";
import {LidoLink as $gv0PY$LidoLink} from "@lidofinance/next-ui-primitives";





const $9443e46d40e21d27$export$c507fb1c2e1ac13a = (0, $gv0PY$createGlobalStyle)`
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





// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6, which is in beta ATM
// But it will be better to stop using styled-components at all.
// This is a temporary workaround, which seems to work well.


// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const $0aa03a66ad9b2697$var$styled = (0, $gv0PY$styledcomponents).default || (0, $gv0PY$styledcomponents);
var $0aa03a66ad9b2697$export$2e2bcd8739ae039 = $0aa03a66ad9b2697$var$styled;


const $bfd8aa9b9c7d635f$export$a1a73e558e01ca3a = 880;
const $bfd8aa9b9c7d635f$export$1c98a876852f31d = `@media screen and (max-width: ${$bfd8aa9b9c7d635f$export$a1a73e558e01ca3a}px)`;
const $bfd8aa9b9c7d635f$export$51574cb47565ad4f = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039)((props)=>/*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$Container), {
        ...props
    }))`
  position: relative;
  box-sizing: border-box;
  color: var(--lido-color-text);
  display: flex;
  row-gap: 44px;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1424px;
  padding: 24px 32px 32px;

  ${$bfd8aa9b9c7d635f$export$1c98a876852f31d} {
    margin-bottom: 60px;
    padding: 20px 18px;
    justify-content: center;
  }
`;
const $bfd8aa9b9c7d635f$export$e0513c91be1318ca = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039)((0, $gv0PY$Link))`
  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xxs}px;
  line-height: 20px;
  color: var(--lido-color-textSecondary);
  font-weight: 400;

  &:visited {
    color: var(--lido-color-textSecondary);
    &:hover {
      color: var(--lido-color-text);
      opacity: 1;
    }
  }

  &:not(:last-of-type)::after {
    content: '';
    border-right: 1px solid var(--lido-color-textSecondary);
    margin: 0 6px;
  }
`;
const $bfd8aa9b9c7d635f$export$6a66cfdd9c26b6df = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039)((0, $gv0PY$LidoLogo))`
  margin-right: 44px;

  ${$bfd8aa9b9c7d635f$export$1c98a876852f31d} {
    display: none;
  }
`;
const $bfd8aa9b9c7d635f$export$3e9753e910d67bc5 = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039).div`
  position: absolute;
  top: 0;
  left: 32px;
  width: calc(100% - 64px);
  height: 1px;
  background: var(--lido-color-popupMenuItemBgActiveHover);
  opacity: 0.12;

  ${$bfd8aa9b9c7d635f$export$1c98a876852f31d} {
    display: none;
  }
`;


const $acdcb1d026776f13$export$a06f1c675e846f6f = ()=>/*#__PURE__*/ (0, $gv0PY$jsxs)((0, $bfd8aa9b9c7d635f$export$51574cb47565ad4f), {
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$6a66cfdd9c26b6df), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$e0513c91be1318ca), {
                href: "https://lido.fi/terms-of-use",
                children: "Terms of Use"
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $bfd8aa9b9c7d635f$export$e0513c91be1318ca), {
                href: "https://lido.fi/privacy-notice",
                children: "Privacy Notice"
            })
        ]
    });











const $7861520291ce5a13$export$af0f646b086814d1 = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039).div`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`;


const $cbf1a2d5ec325762$export$223875819fd7cf93 = ({ leftSlot: leftSlot , ...rest })=>/*#__PURE__*/ (0, $gv0PY$jsxs)((0, $7861520291ce5a13$export$af0f646b086814d1), {
        ...rest,
        children: [
            leftSlot,
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$ThemeToggler), {})
        ]
    });











const $1b182eeff22f5ff5$export$25da3807dbd81a49 = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039)((0, $gv0PY$LidoLink))`
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


const $158badbcc92b8a29$export$721ee963a67379f1 = ({ icon: icon , title: title , href: href , ...rest })=>{
    const { pathname: pathname  } = (0, $gv0PY$useRouter)();
    // compare without query string
    const active = pathname === href.split("?")[0];
    return(// @ts-expect-error Research why types of property 'as' are incompatible.
    /*#__PURE__*/ (0, $gv0PY$jsx)((0, $1b182eeff22f5ff5$export$25da3807dbd81a49), {
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
    }));
};






const $f275cfeaf9486c8e$export$7bc8c02c4f2d6836 = (0, $gv0PY$css)`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`;
const $f275cfeaf9486c8e$var$mobileCss = (0, $gv0PY$css)`
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
const $f275cfeaf9486c8e$export$f8af16d8231e3b4e = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039).div`
  ${$f275cfeaf9486c8e$export$7bc8c02c4f2d6836}

  ${({ theme: theme  })=>theme.mediaQueries.lg} {
    ${$f275cfeaf9486c8e$var$mobileCss}
  }

  z-index: 6;
`;


const $783d85da9b1dc834$export$b8a61e5c71402559 = /*#__PURE__*/ (0, $gv0PY$memo)(({ links: links , ...rest })=>{
    if (!links) return null;
    return /*#__PURE__*/ (0, $gv0PY$jsx)((0, $f275cfeaf9486c8e$export$f8af16d8231e3b4e), {
        ...rest,
        children: links.map((pageProps)=>/*#__PURE__*/ (0, $gv0PY$jsx)((0, $158badbcc92b8a29$export$721ee963a67379f1), {
                ...pageProps
            }, pageProps.href))
    });
});
$783d85da9b1dc834$export$b8a61e5c71402559.displayName = "Navigation";






const $af46b3954d96e837$export$54a719cd6595ff5c = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039)((0, $gv0PY$Container))`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`;
const $af46b3954d96e837$export$d69c4113bed92823 = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039).div`
  overflow: hidden;
  flex-shrink: 0;

  ${({ theme: theme  })=>theme.mediaQueries.md} {
    width: 14px;
  }
`;


const $e06737997a3d64a1$export$8b251419efc915eb = ({ navigation: navigation , headerActions: headerActions , ...rest })=>/*#__PURE__*/ (0, $gv0PY$jsxs)((0, $af46b3954d96e837$export$54a719cd6595ff5c), {
        ...rest,
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







const $d478dafe5e1a4039$export$1098d4de7cbde8b = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039)((0, $gv0PY$Container))`
  position: relative;
  margin-top: ${({ theme: theme  })=>theme.spaceMap.sm}px;
  margin-bottom: ${({ theme: theme  })=>theme.spaceMap.sm}px;
`;


const $0ca4c26db704cb04$export$861edd1ccea2f746 = (props)=>/*#__PURE__*/ (0, $gv0PY$jsx)((0, $d478dafe5e1a4039$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });





const $f6511209e9658628$export$de4797fa0cf99ab6 = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039).h1`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xl}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`;
const $f6511209e9658628$export$731f89f04b9d0607 = (0, $0aa03a66ad9b2697$export$2e2bcd8739ae039).h2`
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





const $65c37c265eb37c26$export$8e0cdabd0fe32f2d = (props)=>/*#__PURE__*/ (0, $gv0PY$jsxs)((0, $gv0PY$CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $9443e46d40e21d27$export$c507fb1c2e1ac13a), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $e06737997a3d64a1$export$8b251419efc915eb), {
                headerActions: props.headerActions,
                navigation: props?.navigation
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $0ca4c26db704cb04$export$861edd1ccea2f746), {
                children: props.children
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $acdcb1d026776f13$export$a06f1c675e846f6f), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$CookiesTooltip), {}),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$ToastContainer), {})
        ]
    });


export {$65c37c265eb37c26$export$8e0cdabd0fe32f2d as WidgetApp, $f6511209e9658628$export$de4797fa0cf99ab6 as LayoutTitle, $f6511209e9658628$export$731f89f04b9d0607 as LayoutSubTitle};
//# sourceMappingURL=index.js.map
