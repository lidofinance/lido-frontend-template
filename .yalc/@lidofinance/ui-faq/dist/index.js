import {jsx as $loPuo$jsx, Fragment as $loPuo$Fragment} from "react/jsx-runtime";
import "react";
import $loPuo$reactmarkdown from "react-markdown";
import * as $loPuo$lidofinancelidoui from "@lidofinance/lido-ui";
import $loPuo$styledcomponents from "styled-components";
import {unified as $loPuo$unified} from "unified";
import $loPuo$remarkparse from "remark-parse";
import $loPuo$remarkstringify from "remark-stringify";
import $loPuo$remarkfrontmatter from "remark-frontmatter";
import $loPuo$remarkdirective from "remark-directive";
import $loPuo$jsyaml from "js-yaml";

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
var $49bd0fe341d564cb$exports = {};
var $17df517d232bb386$exports = {};

$parcel$export($17df517d232bb386$exports, "FaqAccordion", function () { return $17df517d232bb386$export$821fcbaf011feac1; });




var $b871f2fb17bf3607$exports = {};

$parcel$export($b871f2fb17bf3607$exports, "FaqItem", function () { return $b871f2fb17bf3607$export$eb463a824a473e05; });
// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6, which is in beta ATM
// But it will be better to stop using styled-components at all.
// This is a temporary workaround, which seems to work well.

// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const $f7fa192b95611bbe$var$styled = (0, $loPuo$styledcomponents).default || (0, $loPuo$styledcomponents);
var $f7fa192b95611bbe$export$2e2bcd8739ae039 = $f7fa192b95611bbe$var$styled;


const $b871f2fb17bf3607$export$eb463a824a473e05 = (0, $f7fa192b95611bbe$export$2e2bcd8739ae039).div`
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


const { Accordion: $17df517d232bb386$var$Accordion } = $loPuo$lidofinancelidoui;
const $17df517d232bb386$export$821fcbaf011feac1 = ({ faqList: faqList })=>{
    return /*#__PURE__*/ (0, $loPuo$jsx)((0, $loPuo$Fragment), {
        children: faqList.map(({ question: question, answer: answer }, index)=>/*#__PURE__*/ (0, $loPuo$jsx)($17df517d232bb386$var$Accordion, {
                defaultExpanded: index === 0,
                summary: String(question),
                children: /*#__PURE__*/ (0, $loPuo$jsx)((0, $b871f2fb17bf3607$export$eb463a824a473e05), {
                    children: /*#__PURE__*/ (0, $loPuo$jsx)((0, $loPuo$reactmarkdown), {
                        children: answer
                    })
                })
            }, question))
    });
};



var $30e3952008c9e88b$exports = {};

$parcel$export($30e3952008c9e88b$exports, "isFAQItem", function () { return $30e3952008c9e88b$export$cfc7e514f00a6e18; });
$parcel$export($30e3952008c9e88b$exports, "isFAQList", function () { return $30e3952008c9e88b$export$9eaf5da275f92952; });
const $30e3952008c9e88b$export$cfc7e514f00a6e18 = (obj)=>{
    return "answer" in obj && "question" in obj;
};
const $30e3952008c9e88b$export$9eaf5da275f92952 = (obj)=>{
    return "faqList" in obj && obj.faqList.isArray();
};


$parcel$exportWildcard($49bd0fe341d564cb$exports, $17df517d232bb386$exports);
$parcel$exportWildcard($49bd0fe341d564cb$exports, $b871f2fb17bf3607$exports);
$parcel$exportWildcard($49bd0fe341d564cb$exports, $30e3952008c9e88b$exports);


$parcel$exportWildcard($4e053a1b8b64ce9e$exports, $49bd0fe341d564cb$exports);


var $364ca8732529d7a4$exports = {};
var $cea9c420a83e9c0d$exports = {};

$parcel$export($cea9c420a83e9c0d$exports, "parseNetlifyFile", function () { return $cea9c420a83e9c0d$export$398969c16ec94b3d; });
$parcel$export($cea9c420a83e9c0d$exports, "isPageFAQ", function () { return $cea9c420a83e9c0d$export$5c49e5abe2bae48e; });
$parcel$export($cea9c420a83e9c0d$exports, "parseNetlifyWidgetFAQ", function () { return $cea9c420a83e9c0d$export$6fd2da1a4bdd8c85; });






const $66ee759281a91b0e$export$6e7a2400c9873c8e = ()=>(tree, file)=>{
        const node = tree.children[0];
        if (node?.type === "yaml") {
            const data = (0, $loPuo$jsyaml).load(node.value);
            file.data.frontmatter = data;
            tree.children.splice(0, 1);
        } else file.data.frontmatter = {};
    };






const $cea9c420a83e9c0d$export$398969c16ec94b3d = async (md, remarkPlugins)=>{
    const file = await (0, $loPuo$unified)().use((0, $loPuo$remarkparse)).use((0, $loPuo$remarkstringify)).use(remarkPlugins || []).process(md);
    return {
        content: String(file),
        data: file.data
    };
};
const $cea9c420a83e9c0d$export$5c49e5abe2bae48e = (obj)=>{
    return "identification" in obj && "faq" in obj;
};
const $cea9c420a83e9c0d$export$6fd2da1a4bdd8c85 = async (fileContent)=>{
    // Temporary solution
    // The CMS, while generating md, adds an '\_' between the text and
    // the link, which is then replaced by 'nbsp;' (non-breaking space)
    // and interferes correct content display
    // To fix this, we replace '\_' with ' '
    const fixedFileContent = fileContent.replace(/\\_\[/gm, " [").replace(/\)\\_/gm, ") ");
    const { data: data } = await $cea9c420a83e9c0d$export$398969c16ec94b3d(fixedFileContent, [
        (0, $loPuo$remarkdirective),
        [
            (0, $loPuo$remarkfrontmatter),
            [
                "yaml"
            ]
        ],
        (0, $66ee759281a91b0e$export$6e7a2400c9873c8e)
    ]);
    const { frontmatter: frontmatter = {} } = data;
    const { pages: pages = [] } = frontmatter;
    return pages;
};


$parcel$exportWildcard($364ca8732529d7a4$exports, $cea9c420a83e9c0d$exports);




export {$17df517d232bb386$export$821fcbaf011feac1 as FaqAccordion, $b871f2fb17bf3607$export$eb463a824a473e05 as FaqItem, $30e3952008c9e88b$export$cfc7e514f00a6e18 as isFAQItem, $30e3952008c9e88b$export$9eaf5da275f92952 as isFAQList, $cea9c420a83e9c0d$export$398969c16ec94b3d as parseNetlifyFile, $cea9c420a83e9c0d$export$5c49e5abe2bae48e as isPageFAQ, $cea9c420a83e9c0d$export$6fd2da1a4bdd8c85 as parseNetlifyWidgetFAQ};
//# sourceMappingURL=index.js.map
