import {jsx as $loPuo$jsx, Fragment as $loPuo$Fragment} from "react/jsx-runtime";
import "react";
import $loPuo$reactmarkdown from "react-markdown";
import * as $loPuo$lidofinancelidoui from "@lidofinance/lido-ui";
import {LidoLink as $loPuo$LidoLink} from "@lidofinance/next-ui-primitives";
import {trackEvent as $loPuo$trackEvent} from "@lidofinance/analytics-matomo";
import $loPuo$styledcomponents from "styled-components";
import $loPuo$axios from "axios";
import {caching as $loPuo$caching} from "cache-manager";
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
const $17df517d232bb386$var$AnchorWithMatomo = (children, href, matomoEvent)=>{
    return /*#__PURE__*/ (0, $loPuo$jsx)((0, $loPuo$LidoLink), {
        href: href ?? "#",
        onClick: ()=>{
            if (matomoEvent) (0, $loPuo$trackEvent)(...matomoEvent);
        },
        children: children
    });
};
const $17df517d232bb386$export$821fcbaf011feac1 = ({ faqList: faqList, matomoEventMap: matomoEventMap })=>{
    return /*#__PURE__*/ (0, $loPuo$jsx)((0, $loPuo$Fragment), {
        children: faqList.map(({ question: question, answer: answer }, index)=>/*#__PURE__*/ (0, $loPuo$jsx)($17df517d232bb386$var$Accordion, {
                defaultExpanded: index === 0,
                summary: String(question),
                children: /*#__PURE__*/ (0, $loPuo$jsx)((0, $b871f2fb17bf3607$export$eb463a824a473e05), {
                    children: /*#__PURE__*/ (0, $loPuo$jsx)((0, $loPuo$reactmarkdown), {
                        components: {
                            // @ts-expect-error `a` is like in docs https://github.com/remarkjs/react-markdown#appendix-b-components
                            a: ({ children: children, href: href })=>{
                                let matomoEvent;
                                if (matomoEventMap && href) {
                                    matomoEvent = matomoEventMap.get(href);
                                    return $17df517d232bb386$var$AnchorWithMatomo(children, href, matomoEvent);
                                }
                                // https://github.com/remarkjs/react-markdown#appendix-b-components
                                return "a";
                            }
                        },
                        children: answer
                    })
                })
            }, question))
    });
};



var $30e3952008c9e88b$exports = {};

$parcel$export($30e3952008c9e88b$exports, "isFAQItem", function () { return $30e3952008c9e88b$export$cfc7e514f00a6e18; });
$parcel$export($30e3952008c9e88b$exports, "isFAQAccordionProps", function () { return $30e3952008c9e88b$export$e9472c8e1e3c866b; });
const $30e3952008c9e88b$export$cfc7e514f00a6e18 = (obj)=>{
    return "answer" in obj && "question" in obj;
};
const $30e3952008c9e88b$export$e9472c8e1e3c866b = (obj)=>{
    return "faqList" in obj && obj.faqList.isArray();
};


$parcel$exportWildcard($49bd0fe341d564cb$exports, $17df517d232bb386$exports);
$parcel$exportWildcard($49bd0fe341d564cb$exports, $b871f2fb17bf3607$exports);
$parcel$exportWildcard($49bd0fe341d564cb$exports, $30e3952008c9e88b$exports);


$parcel$exportWildcard($4e053a1b8b64ce9e$exports, $49bd0fe341d564cb$exports);


var $4d7a07a404732d40$exports = {};

$parcel$export($4d7a07a404732d40$exports, "parseYamlFileWithMdContent", function () { return $4d7a07a404732d40$export$dd386c14013925ba; });
$parcel$export($4d7a07a404732d40$exports, "isPageFAQ", function () { return $4d7a07a404732d40$export$5c49e5abe2bae48e; });
$parcel$export($4d7a07a404732d40$exports, "getFAQ", function () { return $4d7a07a404732d40$export$24d135d299ddf6e6; });
// eslint-disable-next-line import/no-extraneous-dependencies








const $9f620ec94f086a5a$export$6e7a2400c9873c8e = ()=>(tree, file)=>{
        const node = tree.children[0];
        if (node?.type === "yaml") {
            const data = (0, $loPuo$jsyaml).load(node.value);
            file.data.frontmatter = data;
            tree.children.splice(0, 1);
        } else file.data.frontmatter = {};
    };






const $4d7a07a404732d40$var$ttlMs = 600000 /* 10 minutes */ ;
const $4d7a07a404732d40$var$memoryCacheConfigDefault = {
    max: 100,
    ttl: $4d7a07a404732d40$var$ttlMs
};
let $4d7a07a404732d40$var$memoryCache;
const $4d7a07a404732d40$var$getMemoryCacheInstance = async (memoryCacheConfig = $4d7a07a404732d40$var$memoryCacheConfigDefault)=>{
    if (!$4d7a07a404732d40$var$memoryCache) $4d7a07a404732d40$var$memoryCache = await (0, $loPuo$caching)("memory", memoryCacheConfig);
    return $4d7a07a404732d40$var$memoryCache;
};
const $4d7a07a404732d40$export$dd386c14013925ba = async (md, remarkPlugins)=>{
    const file = await (0, $loPuo$unified)().use((0, $loPuo$remarkparse)).use((0, $loPuo$remarkstringify)).use(remarkPlugins || []).process(md);
    return {
        content: String(file),
        data: file.data
    };
};
const $4d7a07a404732d40$export$5c49e5abe2bae48e = (obj)=>{
    return "identification" in obj && "faq" in obj;
};
const $4d7a07a404732d40$var$faqOptionsDefault = {
    axiosInstance: (0, $loPuo$axios),
    cache: true
};
const $4d7a07a404732d40$export$24d135d299ddf6e6 = async (faqUrl, { axiosInstance: axiosInstance, cache: cache, memoryCacheConfig: memoryCacheConfig } = $4d7a07a404732d40$var$faqOptionsDefault)=>{
    let memoryCacheInstance;
    let rawFaqData;
    if (cache) {
        memoryCacheInstance = await $4d7a07a404732d40$var$getMemoryCacheInstance(memoryCacheConfig);
        rawFaqData = await memoryCacheInstance.get(faqUrl);
    }
    if (!rawFaqData) {
        rawFaqData = (await axiosInstance.get(faqUrl)).data;
        if (cache && memoryCacheInstance) await memoryCacheInstance.set(faqUrl, rawFaqData, $4d7a07a404732d40$var$ttlMs);
    }
    // Temporary solution
    // The CMS, while generating md, adds an '\_' between the text and
    // the link, which is then replaced by 'nbsp;' (non-breaking space)
    // and interferes correct content display
    // To fix this, we replace '\_' with ' '
    const fixedFileContent = rawFaqData.replace(/\\_\[/gm, " [").replace(/\)\\_/gm, ") ");
    const { data: data } = await $4d7a07a404732d40$export$dd386c14013925ba(fixedFileContent, [
        (0, $loPuo$remarkdirective),
        [
            (0, $loPuo$remarkfrontmatter),
            [
                "yaml"
            ]
        ],
        (0, $9f620ec94f086a5a$export$6e7a2400c9873c8e)
    ]);
    const { frontmatter: frontmatter = {} } = data;
    const { pages: pages = [] } = frontmatter;
    return pages;
};




export {$17df517d232bb386$export$821fcbaf011feac1 as FaqAccordion, $b871f2fb17bf3607$export$eb463a824a473e05 as FaqItem, $30e3952008c9e88b$export$cfc7e514f00a6e18 as isFAQItem, $30e3952008c9e88b$export$e9472c8e1e3c866b as isFAQAccordionProps, $4d7a07a404732d40$export$dd386c14013925ba as parseYamlFileWithMdContent, $4d7a07a404732d40$export$5c49e5abe2bae48e as isPageFAQ, $4d7a07a404732d40$export$24d135d299ddf6e6 as getFAQ};
//# sourceMappingURL=index.js.map
