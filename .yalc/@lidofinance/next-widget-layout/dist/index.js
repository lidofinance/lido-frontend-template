import {jsxs as $82imM$jsxs, jsx as $82imM$jsx} from "react/jsx-runtime";
import {Container as $82imM$Container, Link as $82imM$Link, LidoLogo as $82imM$LidoLogo, ThemeToggler as $82imM$ThemeToggler} from "@lidofinance/lido-ui";
import $82imM$styledcomponents, {css as $82imM$css} from "styled-components";
import $82imM$nextlink from "next/link";
import $82imM$react, {memo as $82imM$memo} from "react";
import {useRouter as $82imM$useRouter} from "next/router";
import {LidoLink as $82imM$LidoLink} from "@lidofinance/next-ui-primitives";

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
var $a9ba963c6ee86286$exports = {};
var $eeac9cf985535277$exports = {};

$parcel$export($eeac9cf985535277$exports, "Footer", function () { return $eeac9cf985535277$export$a06f1c675e846f6f; });



// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6, which is in beta ATM
// But it will be better to stop using styled-components at all.
// This is a temporary workaround, which seems to work well.


// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const $c95ab58c502ba1ce$var$styled = (0, $82imM$styledcomponents).default || (0, $82imM$styledcomponents);
var $c95ab58c502ba1ce$export$2e2bcd8739ae039 = $c95ab58c502ba1ce$var$styled;


const $f0336ed00b2afb2f$export$a1a73e558e01ca3a = 880;
const $f0336ed00b2afb2f$export$1c98a876852f31d = `@media screen and (max-width: ${$f0336ed00b2afb2f$export$a1a73e558e01ca3a}px)`;
const $f0336ed00b2afb2f$export$51574cb47565ad4f = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039)((props)=>/*#__PURE__*/ (0, $82imM$jsx)((0, $82imM$Container), {
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

  ${$f0336ed00b2afb2f$export$1c98a876852f31d} {
    margin-bottom: 60px;
    padding: 20px 18px;
    justify-content: center;
  }
`;
const $f0336ed00b2afb2f$export$e0513c91be1318ca = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039)((0, $82imM$Link))`
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
const $f0336ed00b2afb2f$export$6a66cfdd9c26b6df = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039)((0, $82imM$LidoLogo))`
  margin-right: 44px;

  ${$f0336ed00b2afb2f$export$1c98a876852f31d} {
    display: none;
  }
`;
const $f0336ed00b2afb2f$export$3e9753e910d67bc5 = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039).div`
  position: absolute;
  top: 0;
  left: 32px;
  width: calc(100% - 64px);
  height: 1px;
  background: var(--lido-color-popupMenuItemBgActiveHover);
  opacity: 0.12;

  ${$f0336ed00b2afb2f$export$1c98a876852f31d} {
    display: none;
  }
`;


const $eeac9cf985535277$export$a06f1c675e846f6f = ()=>/*#__PURE__*/ (0, $82imM$jsxs)((0, $f0336ed00b2afb2f$export$51574cb47565ad4f), {
        size: "full",
        forwardedAs: "footer",
        children: [
            /*#__PURE__*/ (0, $82imM$jsx)((0, $f0336ed00b2afb2f$export$6a66cfdd9c26b6df), {}),
            /*#__PURE__*/ (0, $82imM$jsx)((0, $f0336ed00b2afb2f$export$e0513c91be1318ca), {
                href: "https://lido.fi/terms-of-use",
                children: "Terms of Use"
            }),
            /*#__PURE__*/ (0, $82imM$jsx)((0, $f0336ed00b2afb2f$export$e0513c91be1318ca), {
                href: "https://lido.fi/privacy-notice",
                children: "Privacy Notice"
            }),
            /*#__PURE__*/ (0, $82imM$jsx)((0, $f0336ed00b2afb2f$export$3e9753e910d67bc5), {})
        ]
    });


$parcel$exportWildcard($a9ba963c6ee86286$exports, $eeac9cf985535277$exports);


var $346ce23802cb2e3e$exports = {};
var $859fe91f269286c6$exports = {};

$parcel$export($859fe91f269286c6$exports, "Header", function () { return $859fe91f269286c6$export$8b251419efc915eb; });



var $acdd372ef22329b8$exports = {};
var $fb6c299da4185c5f$exports = {};

$parcel$export($fb6c299da4185c5f$exports, "Navigation", function () { return $fb6c299da4185c5f$export$b8a61e5c71402559; });


var $037121f140c5b807$exports = {};
var $1ca05f137d64f2d1$exports = {};

$parcel$export($1ca05f137d64f2d1$exports, "NavigationLink", function () { return $1ca05f137d64f2d1$export$721ee963a67379f1; });





const $38c747b9aaecb41f$export$25da3807dbd81a49 = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039)((0, $82imM$LidoLink))`
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


const $1ca05f137d64f2d1$export$721ee963a67379f1 = ({ icon: icon , title: title , href: href , ...rest })=>{
    const { pathname: pathname  } = (0, $82imM$useRouter)();
    // compare without query string
    const active = pathname === href.split("?")[0];
    return(// @ts-expect-error Research why types of property 'as' are incompatible.
    /*#__PURE__*/ (0, $82imM$jsx)((0, $38c747b9aaecb41f$export$25da3807dbd81a49), {
        ...rest,
        href: href,
        $active: active,
        children: /*#__PURE__*/ (0, $82imM$jsxs)((0, $82imM$react).Fragment, {
            children: [
                icon,
                /*#__PURE__*/ (0, $82imM$jsx)("span", {
                    children: title
                })
            ]
        })
    }));
};


$parcel$exportWildcard($037121f140c5b807$exports, $1ca05f137d64f2d1$exports);




const $27665eff9c7bb00f$export$7bc8c02c4f2d6836 = (0, $82imM$css)`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`;
const $27665eff9c7bb00f$var$mobileCss = (0, $82imM$css)`
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
const $27665eff9c7bb00f$export$f8af16d8231e3b4e = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039).div`
  ${$27665eff9c7bb00f$export$7bc8c02c4f2d6836}

  ${({ theme: theme  })=>theme.mediaQueries.lg} {
    ${$27665eff9c7bb00f$var$mobileCss}
  }

  z-index: 6;
`;


const $fb6c299da4185c5f$export$b8a61e5c71402559 = /*#__PURE__*/ (0, $82imM$memo)(({ links: links , ...rest })=>{
    if (!links) return null;
    return /*#__PURE__*/ (0, $82imM$jsx)((0, $27665eff9c7bb00f$export$f8af16d8231e3b4e), {
        ...rest,
        children: links.map((pageProps)=>/*#__PURE__*/ (0, $82imM$jsx)((0, $1ca05f137d64f2d1$export$721ee963a67379f1), {
                ...pageProps
            }, pageProps.href))
    });
});
$fb6c299da4185c5f$export$b8a61e5c71402559.displayName = "Navigation";



$parcel$exportWildcard($acdd372ef22329b8$exports, $fb6c299da4185c5f$exports);
$parcel$exportWildcard($acdd372ef22329b8$exports, $037121f140c5b807$exports);






const $fa262dd5155ad556$export$af0f646b086814d1 = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039).div`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`;


const $cf7f7e2685ef0014$export$223875819fd7cf93 = ({ leftSlot: leftSlot , ...rest })=>/*#__PURE__*/ (0, $82imM$jsxs)((0, $fa262dd5155ad556$export$af0f646b086814d1), {
        ...rest,
        children: [
            leftSlot,
            /*#__PURE__*/ (0, $82imM$jsx)((0, $82imM$ThemeToggler), {})
        ]
    });






const $b1bde3ce8550df89$export$54a719cd6595ff5c = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039)((0, $82imM$Container))`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`;
const $b1bde3ce8550df89$export$d69c4113bed92823 = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039).div`
  overflow: hidden;
  flex-shrink: 0;

  ${({ theme: theme  })=>theme.mediaQueries.md} {
    width: 14px;
  }
`;


const $859fe91f269286c6$export$8b251419efc915eb = ({ navigation: navigation , headerActions: headerActions , ...rest })=>/*#__PURE__*/ (0, $82imM$jsxs)((0, $b1bde3ce8550df89$export$54a719cd6595ff5c), {
        ...rest,
        size: "full",
        forwardedAs: "header",
        children: [
            /*#__PURE__*/ (0, $82imM$jsx)((0, $b1bde3ce8550df89$export$d69c4113bed92823), {
                children: /*#__PURE__*/ (0, $82imM$jsx)((0, $82imM$nextlink), {
                    href: "/",
                    passHref: true,
                    legacyBehavior: true,
                    children: /*#__PURE__*/ (0, $82imM$jsx)((0, $82imM$LidoLogo), {})
                })
            }),
            /*#__PURE__*/ (0, $82imM$jsx)((0, $fb6c299da4185c5f$export$b8a61e5c71402559), {
                links: navigation
            }),
            /*#__PURE__*/ (0, $82imM$jsx)((0, $cf7f7e2685ef0014$export$223875819fd7cf93), {
                leftSlot: headerActions
            })
        ]
    });


$parcel$exportWildcard($346ce23802cb2e3e$exports, $859fe91f269286c6$exports);


var $cc84f519a0711793$exports = {};
var $2bb8f36add087037$exports = {};

$parcel$export($2bb8f36add087037$exports, "Main", function () { return $2bb8f36add087037$export$861edd1ccea2f746; });



const $b648a3b47e7d9a7e$export$1098d4de7cbde8b = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039)((0, $82imM$Container))`
  position: relative;
  margin-top: ${({ theme: theme  })=>theme.spaceMap.sm}px;
  margin-bottom: ${({ theme: theme  })=>theme.spaceMap.sm}px;
`;


const $2bb8f36add087037$export$861edd1ccea2f746 = (props)=>/*#__PURE__*/ (0, $82imM$jsx)((0, $b648a3b47e7d9a7e$export$1098d4de7cbde8b), {
        size: "tight",
        forwardedAs: "main",
        ...props
    });


$parcel$exportWildcard($cc84f519a0711793$exports, $2bb8f36add087037$exports);



var $ca0048e0fd949f53$exports = {};

$parcel$export($ca0048e0fd949f53$exports, "LayoutTitle", function () { return $ca0048e0fd949f53$export$de4797fa0cf99ab6; });

const $ca0048e0fd949f53$export$de4797fa0cf99ab6 = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039).h1`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xl}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`;


var $4f2b321f2249e001$exports = {};

$parcel$export($4f2b321f2249e001$exports, "LayoutSubTitle", function () { return $4f2b321f2249e001$export$731f89f04b9d0607; });

const $4f2b321f2249e001$export$731f89f04b9d0607 = (0, $c95ab58c502ba1ce$export$2e2bcd8739ae039).h2`
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




export {$eeac9cf985535277$export$a06f1c675e846f6f as Footer, $859fe91f269286c6$export$8b251419efc915eb as Header, $2bb8f36add087037$export$861edd1ccea2f746 as Main, $ca0048e0fd949f53$export$de4797fa0cf99ab6 as LayoutTitle, $4f2b321f2249e001$export$731f89f04b9d0607 as LayoutSubTitle, $fb6c299da4185c5f$export$b8a61e5c71402559 as Navigation, $1ca05f137d64f2d1$export$721ee963a67379f1 as NavigationLink};
//# sourceMappingURL=index.js.map
