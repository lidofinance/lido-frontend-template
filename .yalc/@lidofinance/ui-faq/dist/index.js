import {jsx as $loPuo$jsx, Fragment as $loPuo$Fragment} from "react/jsx-runtime";
import "react";
import {Accordion as $loPuo$Accordion} from "@lidofinance/lido-ui";
import $loPuo$styledcomponents from "styled-components";

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
var $4e053a1b8b64ce9e$exports = {};
var $db52b8af77a757bc$exports = {};
var $1a533c067011ba12$exports = {};

$parcel$export($1a533c067011ba12$exports, "Faq", function () { return $1a533c067011ba12$export$7562e752e5ef1fad; });



var $cbe4715d540609a6$exports = {};

$parcel$export($cbe4715d540609a6$exports, "FaqItem", function () { return $cbe4715d540609a6$export$eb463a824a473e05; });
// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6, which is in beta ATM
// But it will be better to stop using styled-components at all.
// This is a temporary workaround, which seems to work well.

// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const $f7fa192b95611bbe$var$styled = (0, $loPuo$styledcomponents).default || (0, $loPuo$styledcomponents);
var $f7fa192b95611bbe$export$2e2bcd8739ae039 = $f7fa192b95611bbe$var$styled;


const $cbe4715d540609a6$export$eb463a824a473e05 = (0, $f7fa192b95611bbe$export$2e2bcd8739ae039).div`
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
`;


const $1a533c067011ba12$export$7562e752e5ef1fad = (props)=>{
    const { faqList: faqList } = props;
    return /*#__PURE__*/ (0, $loPuo$jsx)((0, $loPuo$Fragment), {
        children: faqList.map(({ id: id, title: title, content: content }, index)=>/*#__PURE__*/ (0, $loPuo$jsx)((0, $loPuo$Accordion), {
                defaultExpanded: index === 0,
                summary: String(title),
                children: /*#__PURE__*/ (0, $loPuo$jsx)((0, $cbe4715d540609a6$export$eb463a824a473e05), {
                    children: content
                })
            }, id))
    });
};



var $109b959d6de8d78d$exports = {};


$parcel$exportWildcard($db52b8af77a757bc$exports, $1a533c067011ba12$exports);
$parcel$exportWildcard($db52b8af77a757bc$exports, $cbe4715d540609a6$exports);
$parcel$exportWildcard($db52b8af77a757bc$exports, $109b959d6de8d78d$exports);


$parcel$exportWildcard($4e053a1b8b64ce9e$exports, $db52b8af77a757bc$exports);




export {$1a533c067011ba12$export$7562e752e5ef1fad as Faq, $cbe4715d540609a6$export$eb463a824a473e05 as FaqItem};
//# sourceMappingURL=index.js.map
