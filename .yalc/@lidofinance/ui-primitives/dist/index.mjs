import {jsx as $9LU3C$jsx, Fragment as $9LU3C$Fragment, jsxs as $9LU3C$jsxs} from "react/jsx-runtime";
import {useMemo as $9LU3C$useMemo, useCallback as $9LU3C$useCallback} from "react";
import {useBreakpoint as $9LU3C$useBreakpoint, IdenticonBadge as $9LU3C$IdenticonBadge, Accordion as $9LU3C$Accordion, Block as $9LU3C$Block, Tooltip as $9LU3C$Tooltip, InlineLoader as $9LU3C$InlineLoader, ToastInfo as $9LU3C$ToastInfo} from "@lidofinance/lido-ui";
import $9LU3C$styledcomponents from "styled-components";
import {cwd as $9LU3C$cwd} from "process";
import $9LU3C$fs from "fs";
import $9LU3C$path from "path";
import $9LU3C$graymatter from "gray-matter";
import $9LU3C$remark from "remark";
import $9LU3C$remarkhtml from "remark-html";
import $9LU3C$remarkexternallinks from "remark-external-links";
import {utils as $9LU3C$utils, constants as $9LU3C$constants} from "ethers";
import {useRouter as $9LU3C$useRouter} from "next/router";
import $9LU3C$nextlink from "next/link";
import {useWeb3 as $9LU3C$useWeb3, useSupportedChains as $9LU3C$useSupportedChains} from "@reef-knot/web3-react";
import {CHAINS as $9LU3C$CHAINS} from "@lido-sdk/constants";
import {useTokenToWallet as $9LU3C$useTokenToWallet} from "@lido-sdk/react";
import {useModal as $9LU3C$useModal, WALLET_MODAL as $9LU3C$WALLET_MODAL} from "@lidofinance/ui-wallet-modal";
import $9LU3C$copytoclipboard from "copy-to-clipboard";

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
var $2edec60da2794fb1$exports = {};
var $e097b3ed457dd2dc$exports = {};
var $2d2a02a641aeabb6$exports = {};

$parcel$export($2d2a02a641aeabb6$exports, "AddressBadge", function () { return $2d2a02a641aeabb6$export$36cbab1c8a59f416; });





let $4006d998ae8c4702$var$_ = (t)=>t, $4006d998ae8c4702$var$t;
const $4006d998ae8c4702$export$1afccb3bf4453be2 = (0, $9LU3C$styledcomponents)((0, $9LU3C$IdenticonBadge))($4006d998ae8c4702$var$t || ($4006d998ae8c4702$var$t = $4006d998ae8c4702$var$_`
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  & > * {
    flex-shrink: 0;
  }

  & > :first-child {
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`));


const $2d2a02a641aeabb6$export$36cbab1c8a59f416 = (props)=>{
    const { address: address , ...rest } = props;
    const isMobile = (0, $9LU3C$useBreakpoint)("md");
    const mobileSymbols = 3;
    const desktopSymbols = 6;
    const symbols = isMobile ? mobileSymbols : desktopSymbols;
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $4006d998ae8c4702$export$1afccb3bf4453be2), {
        symbols: symbols,
        address: address !== null && address !== void 0 ? address : "",
        ...rest
    });
};


$parcel$exportWildcard($e097b3ed457dd2dc$exports, $2d2a02a641aeabb6$exports);


var $09016bddec447da4$exports = {};
var $210e5afef337a25b$exports = {};

$parcel$export($210e5afef337a25b$exports, "Faq", function () { return $210e5afef337a25b$export$7562e752e5ef1fad; });



let $4f769db1bdb714df$var$_ = (t)=>t, $4f769db1bdb714df$var$t;
const $4f769db1bdb714df$export$eb463a824a473e05 = (0, $9LU3C$styledcomponents).div($4f769db1bdb714df$var$t || ($4f769db1bdb714df$var$t = $4f769db1bdb714df$var$_`
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
`));


const $210e5afef337a25b$export$7562e752e5ef1fad = (props)=>{
    const { faqList: faqList  } = props;
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$Fragment), {
        children: faqList.map(({ id: id , title: title , content: content  }, index)=>/*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$Accordion), {
                defaultExpanded: index === 0,
                summary: String(title),
                children: /*#__PURE__*/ (0, $9LU3C$jsx)((0, $4f769db1bdb714df$export$eb463a824a473e05), {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                })
            }, id))
    });
};


var $0cdb420e70926c27$exports = {};


var $86ac7e0950fa64d3$exports = {};


var $22c5d07cb270ee1a$exports = {};

$parcel$export($22c5d07cb270ee1a$exports, "getFaqList", function () { return $22c5d07cb270ee1a$export$45c60b0bc8893fbe; });







const $22c5d07cb270ee1a$var$faqDirectory = (0, $9LU3C$path).join($9LU3C$cwd(), "faq");
const $22c5d07cb270ee1a$export$45c60b0bc8893fbe = async (list)=>{
    return Promise.all(list.map(async (id)=>{
        // TODO: Fetch from Netlify
        const fullPath = (0, $9LU3C$path).join($22c5d07cb270ee1a$var$faqDirectory, `${id}.md`);
        const fileContents = (0, $9LU3C$fs).readFileSync(fullPath, "utf8");
        const matterResult = (0, $9LU3C$graymatter)(fileContents);
        const processedContent = await (0, $9LU3C$remark)().use((0, $9LU3C$remarkexternallinks), {
            target: "_blank",
            rel: [
                "nofollow",
                "noopener"
            ]
        }).use((0, $9LU3C$remarkhtml)).process(matterResult.content);
        const content = processedContent.toString();
        const title = String(matterResult.data.title || id);
        return {
            id: id,
            content: content,
            title: title
        };
    }));
};


$parcel$exportWildcard($09016bddec447da4$exports, $210e5afef337a25b$exports);
$parcel$exportWildcard($09016bddec447da4$exports, $0cdb420e70926c27$exports);
$parcel$exportWildcard($09016bddec447da4$exports, $86ac7e0950fa64d3$exports);
$parcel$exportWildcard($09016bddec447da4$exports, $22c5d07cb270ee1a$exports);


var $3c13f78eb03de316$exports = {};
var $85c0858cceeff774$exports = {};

$parcel$export($85c0858cceeff774$exports, "FormatToken", function () { return $85c0858cceeff774$export$2bbae861424212a5; });


var $6d94c9a60a544c13$exports = {};
var $49b5f8700f8da98b$exports = {};

$parcel$export($49b5f8700f8da98b$exports, "formatBalance", function () { return $49b5f8700f8da98b$export$cc3bc0b518c1c6b8; });

const { formatEther: $49b5f8700f8da98b$var$formatEther  } = (0, $9LU3C$utils);
const { Zero: $49b5f8700f8da98b$var$Zero  } = (0, $9LU3C$constants);
const $49b5f8700f8da98b$export$cc3bc0b518c1c6b8 = (balance = $49b5f8700f8da98b$var$Zero, maxDecimalDigits = 4)=>{
    const balanceString = $49b5f8700f8da98b$var$formatEther(balance);
    if (balanceString.includes(".")) {
        const parts = balanceString.split(".");
        return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
    }
    return balanceString;
};


var $04886483abe732d1$exports = {};

$parcel$export($04886483abe732d1$exports, "standardFetcher", function () { return $04886483abe732d1$export$a265c7403141b2f4; });
const $04886483abe732d1$var$DEFAULT_PARAMS = {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
};
const $04886483abe732d1$export$a265c7403141b2f4 = async (url, params)=>{
    const response = await fetch(url, {
        ...$04886483abe732d1$var$DEFAULT_PARAMS,
        ...params
    });
    if (!response.ok) throw new Error("An error occurred while fetching the data.");
    return response.json();
};


$parcel$exportWildcard($6d94c9a60a544c13$exports, $49b5f8700f8da98b$exports);
$parcel$exportWildcard($6d94c9a60a544c13$exports, $04886483abe732d1$exports);


const $85c0858cceeff774$export$2bbae861424212a5 = (props)=>{
    const { amount: amount , symbol: symbol , approx: approx = false , ...rest } = props;
    const prefix = !approx || (amount === null || amount === void 0 ? void 0 : amount.isZero()) ? "" : "≈ ";
    return /*#__PURE__*/ (0, $9LU3C$jsxs)("span", {
        ...rest,
        children: [
            prefix,
            (0, $49b5f8700f8da98b$export$cc3bc0b518c1c6b8)(amount),
            "\xa0",
            symbol
        ]
    });
};


$parcel$exportWildcard($3c13f78eb03de316$exports, $85c0858cceeff774$exports);


var $15053db04efb3bba$exports = {};
var $89f5730a736d4546$exports = {};

$parcel$export($89f5730a736d4546$exports, "LocalLink", function () { return $89f5730a736d4546$export$eaf41e22530ae68d; });




const $89f5730a736d4546$export$eaf41e22530ae68d = (props)=>{
    const { href: href , ...rest } = props;
    const router = (0, $9LU3C$useRouter)();
    const { ref: ref , embed: embed  } = router.query;
    const extraQuery = {};
    if (ref) extraQuery.ref = ref;
    if (embed) extraQuery.embed = embed;
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$nextlink), {
        ...rest,
        href: {
            pathname: href,
            query: extraQuery
        }
    });
};


var $b79613d19ba93c17$exports = {};


$parcel$exportWildcard($15053db04efb3bba$exports, $89f5730a736d4546$exports);
$parcel$exportWildcard($15053db04efb3bba$exports, $b79613d19ba93c17$exports);


var $8e37d69f73d5e5f4$exports = {};
var $33f03c880841e3dc$exports = {};

$parcel$export($33f03c880841e3dc$exports, "Section", function () { return $33f03c880841e3dc$export$6e2c8f0811a474ce; });



let $61b9bf403210ca24$var$_ = (t)=>t, $61b9bf403210ca24$var$t, $61b9bf403210ca24$var$t1, $61b9bf403210ca24$var$t2, $61b9bf403210ca24$var$t3;
const $61b9bf403210ca24$export$cd87aee0bbf87c7e = (0, $9LU3C$styledcomponents).section($61b9bf403210ca24$var$t || ($61b9bf403210ca24$var$t = $61b9bf403210ca24$var$_`
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.xxl);
const $61b9bf403210ca24$export$1bd64a0c872eae5f = (0, $9LU3C$styledcomponents).div($61b9bf403210ca24$var$t1 || ($61b9bf403210ca24$var$t1 = $61b9bf403210ca24$var$_`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${0}px;
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $61b9bf403210ca24$export$3cbb88b8e1425ee9 = (0, $9LU3C$styledcomponents).h2($61b9bf403210ca24$var$t2 || ($61b9bf403210ca24$var$t2 = $61b9bf403210ca24$var$_`
  margin-right: auto;
  font-weight: 800;
  font-size: ${0}px;
  line-height: 1.3em;
`), ({ theme: theme  })=>theme.fontSizesMap.md);
const $61b9bf403210ca24$export$41f4a0193a23e802 = (0, $9LU3C$styledcomponents).div($61b9bf403210ca24$var$t3 || ($61b9bf403210ca24$var$t3 = $61b9bf403210ca24$var$_`
  margin-left: ${0}px;
  font-size: ${0}px;
  line-height: 1.5em;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.fontSizesMap.xxs);


const $33f03c880841e3dc$export$6e2c8f0811a474ce = (props)=>{
    const { title: title , headerDecorator: headerDecorator , children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $9LU3C$jsxs)((0, $61b9bf403210ca24$export$cd87aee0bbf87c7e), {
        ...rest,
        children: [
            title && /*#__PURE__*/ (0, $9LU3C$jsxs)((0, $61b9bf403210ca24$export$1bd64a0c872eae5f), {
                children: [
                    /*#__PURE__*/ (0, $9LU3C$jsx)((0, $61b9bf403210ca24$export$3cbb88b8e1425ee9), {
                        children: title
                    }),
                    headerDecorator && /*#__PURE__*/ (0, $9LU3C$jsx)((0, $61b9bf403210ca24$export$41f4a0193a23e802), {
                        children: headerDecorator
                    })
                ]
            }),
            children
        ]
    });
};


$parcel$exportWildcard($8e37d69f73d5e5f4$exports, $33f03c880841e3dc$exports);


var $bee4c5e5a65c56cf$exports = {};
var $2652ea905a175dd7$exports = {};
var $0eca08bb850086be$exports = {};

$parcel$export($0eca08bb850086be$exports, "FallbackWallet", function () { return $0eca08bb850086be$export$5d1acc5361300eff; });





const $e5e7031b6c7bc871$export$23759efdd2d2dae9 = ()=>{
    const { error: error  } = (0, $9LU3C$useWeb3)();
    const { isUnsupported: isUnsupported , supportedChains: supportedChains  } = (0, $9LU3C$useSupportedChains)();
    const chains = (0, $9LU3C$useMemo)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const chains = supportedChains.map(({ chainId: chainId , name: name  })=>(0, $9LU3C$CHAINS)[chainId] || name);
        const lastChain = chains.pop();
        return [
            chains.join(", "),
            lastChain
        ].filter((chain)=>chain).join(" or ");
    }, [
        supportedChains
    ]);
    if (isUnsupported) return `Unsupported chain. Please switch to ${chains} in your wallet`;
    return error === null || error === void 0 ? void 0 : error.message;
};



var $31d06770d11bf20e$exports = {};
var $14bfac055f2980c0$exports = {};

$parcel$export($14bfac055f2980c0$exports, "WalletCard", function () { return $14bfac055f2980c0$export$fa10365278598d8a; });




let $cca444b4a3633fd1$var$_ = (t)=>t, $cca444b4a3633fd1$var$t;
const $cca444b4a3633fd1$export$fe8257908279ce23 = (0, $9LU3C$styledcomponents)((0, $9LU3C$Block))($cca444b4a3633fd1$var$t || ($cca444b4a3633fd1$var$t = $cca444b4a3633fd1$var$_`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  margin-bottom: ${0}px;
  padding-bottom: ${0}px;

  ${0} {
    padding-bottom: ${0}px;
  }
`), ({ theme: theme  })=>-theme.borderRadiusesMap.xl, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.xxl, ({ theme: theme  })=>theme.mediaQueries.md, ({ theme: theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.lg);


const $14bfac055f2980c0$export$fa10365278598d8a = (props)=>{
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $cca444b4a3633fd1$export$fe8257908279ce23), {
        color: "accent",
        ...props
    });
};


var $89c2ac5a977e85c3$exports = {};


var $1622f26a537fbfd0$exports = {};
var $0cd484ef9c611355$exports = {};

$parcel$export($0cd484ef9c611355$exports, "WalletCardRow", function () { return $0cd484ef9c611355$export$7d0c76f6a0418e11; });



let $8abe3e3dbdc35f17$var$_ = (t)=>t, $8abe3e3dbdc35f17$var$t;
const $8abe3e3dbdc35f17$export$d700fd35c768af1d = (0, $9LU3C$styledcomponents).div($8abe3e3dbdc35f17$var$t || ($8abe3e3dbdc35f17$var$t = $8abe3e3dbdc35f17$var$_`
  display: flex;
  margin: ${0}px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`), ({ theme: theme  })=>theme.spaceMap.lg);


const $0cd484ef9c611355$export$7d0c76f6a0418e11 = (props)=>{
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $8abe3e3dbdc35f17$export$d700fd35c768af1d), {
        ...props
    });
};


var $a5afb298c940136e$exports = {};


$parcel$exportWildcard($1622f26a537fbfd0$exports, $0cd484ef9c611355$exports);
$parcel$exportWildcard($1622f26a537fbfd0$exports, $a5afb298c940136e$exports);


$parcel$exportWildcard($31d06770d11bf20e$exports, $14bfac055f2980c0$exports);
$parcel$exportWildcard($31d06770d11bf20e$exports, $89c2ac5a977e85c3$exports);
$parcel$exportWildcard($31d06770d11bf20e$exports, $1622f26a537fbfd0$exports);


let $52cd780f58c84aa8$var$_ = (t)=>t, $52cd780f58c84aa8$var$t;
const $52cd780f58c84aa8$export$37593eea88cd94ab = (0, $9LU3C$styledcomponents)((0, $14bfac055f2980c0$export$fa10365278598d8a))($52cd780f58c84aa8$var$t || ($52cd780f58c84aa8$var$t = $52cd780f58c84aa8$var$_`
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`));


const $0eca08bb850086be$export$5d1acc5361300eff = (props)=>{
    const error = (0, $e5e7031b6c7bc871$export$23759efdd2d2dae9)();
    if (error) return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $52cd780f58c84aa8$export$37593eea88cd94ab), {
        ...props,
        children: error
    });
    return null;
};


var $553ec06bf1acbddf$exports = {};


$parcel$exportWildcard($2652ea905a175dd7$exports, $0eca08bb850086be$exports);
$parcel$exportWildcard($2652ea905a175dd7$exports, $553ec06bf1acbddf$exports);


var $bebed6c7df22589f$exports = {};
var $cd16ad6f30ec4e05$exports = {};

$parcel$export($cd16ad6f30ec4e05$exports, "TokenToWallet", function () { return $cd16ad6f30ec4e05$export$8c8f4b533d324773; });





let $ea2ba5e39a496b37$var$_ = (t)=>t, $ea2ba5e39a496b37$var$t;
const $ea2ba5e39a496b37$export$38a986a8dd613d5c = (0, $9LU3C$styledcomponents).button($ea2ba5e39a496b37$var$t || ($ea2ba5e39a496b37$var$t = $ea2ba5e39a496b37$var$_`
  border: 0;
  padding: 0;
  width: 15px;
  height: 15px;
  line-height: 0;
  vertical-align: middle;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -2px;
  margin-left: 4px;
  background: var(--lido-color-accentDarken);

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: var(--lido-color-accentContrast);
    width: 7px;
    height: 1px;
    top: 7px;
    left: 4px;
    border-radius: 0.5px;
  }

  &:after {
    height: 7px;
    width: 1px;
    top: 4px;
    left: 7px;
  }
`));


const $cd16ad6f30ec4e05$export$8c8f4b533d324773 = (props)=>{
    const { address: address , ...rest } = props;
    const { addToken: addToken  } = (0, $9LU3C$useTokenToWallet)(address);
    if (!addToken) return null;
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$Tooltip), {
        placement: "bottomLeft",
        title: "Add tokens to wallet",
        children: /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ea2ba5e39a496b37$export$38a986a8dd613d5c), {
            tabIndex: -1,
            onClick: addToken,
            ...rest
        })
    });
};


$parcel$exportWildcard($bebed6c7df22589f$exports, $cd16ad6f30ec4e05$exports);



var $debd5b9d56016368$exports = {};
var $24f5534c5a2a2725$exports = {};

$parcel$export($24f5534c5a2a2725$exports, "WalletCardAccount", function () { return $24f5534c5a2a2725$export$36be84b4aed0dcaa; });





let $0fb84f8a31124cdc$var$_ = (t)=>t, $0fb84f8a31124cdc$var$t;
const $0fb84f8a31124cdc$export$125159fec6480082 = (0, $9LU3C$styledcomponents).div($0fb84f8a31124cdc$var$t || ($0fb84f8a31124cdc$var$t = $0fb84f8a31124cdc$var$_`
  align-self: stretch;
  display: flex;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  & > * {
    cursor: pointer;
  }
`));


const $24f5534c5a2a2725$export$36be84b4aed0dcaa = (props)=>{
    const { account: account , ...rest } = props;
    const { openModal: openModal  } = (0, $9LU3C$useModal)((0, $9LU3C$WALLET_MODAL).wallet);
    return /*#__PURE__*/ (0, $9LU3C$jsx)((0, $0fb84f8a31124cdc$export$125159fec6480082), {
        ...rest,
        children: /*#__PURE__*/ (0, $9LU3C$jsx)((0, $2d2a02a641aeabb6$export$36cbab1c8a59f416), {
            address: account,
            onClick: openModal,
            color: "accent"
        })
    });
};


$parcel$exportWildcard($debd5b9d56016368$exports, $24f5534c5a2a2725$exports);


var $5e4f3f5938f09cef$exports = {};
var $f979852e26257adb$exports = {};

$parcel$export($f979852e26257adb$exports, "WalletCardBalance", function () { return $f979852e26257adb$export$976f47e15d5defb0; });




let $ca8b781e1b38cbcc$var$_ = (t)=>t, $ca8b781e1b38cbcc$var$t, $ca8b781e1b38cbcc$var$t1, $ca8b781e1b38cbcc$var$t2, $ca8b781e1b38cbcc$var$t3, $ca8b781e1b38cbcc$var$t4;
const $ca8b781e1b38cbcc$export$2d1cff8340d03905 = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t || ($ca8b781e1b38cbcc$var$t = $ca8b781e1b38cbcc$var$_`
  margin-right: 18px;
  flex-basis: 50%;
  flex-grow: 1;
  font-size: ${0}px;
  line-height: 1.6em;

  :last-child {
    margin-right: 0;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $ca8b781e1b38cbcc$export$e4ca13e82989524a = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t1 || ($ca8b781e1b38cbcc$var$t1 = $ca8b781e1b38cbcc$var$_``));
const $ca8b781e1b38cbcc$export$623cde957a5a324e = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t2 || ($ca8b781e1b38cbcc$var$t2 = $ca8b781e1b38cbcc$var$_`
  margin-top: 2px;
  font-size: ${0}px;
  line-height: 1.4em;
  font-weight: 800;
  white-space: nowrap;
`), ({ theme: theme , $small: $small  })=>$small ? theme.fontSizesMap.sm : theme.fontSizesMap.md);
const $ca8b781e1b38cbcc$export$ed3240b66ab7bcea = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t3 || ($ca8b781e1b38cbcc$var$t3 = $ca8b781e1b38cbcc$var$_`
  margin-top: 2px;
  opacity: 0.5;
`));
const $ca8b781e1b38cbcc$export$8dce4e443c8afd41 = (0, $9LU3C$styledcomponents).div($ca8b781e1b38cbcc$var$t4 || ($ca8b781e1b38cbcc$var$t4 = $ca8b781e1b38cbcc$var$_`
  margin-top: 8px;
  opacity: ${0};
  pointer-events: ${0};
`), ({ $hidden: $hidden  })=>$hidden ? 0 : 1, ({ $hidden: $hidden  })=>$hidden ? "none" : "auto");


const $f979852e26257adb$export$976f47e15d5defb0 = (props)=>{
    const { title: title , small: small = false , extra: extra , loading: loading = false , children: children , value: value , ...rest } = props;
    const hasExtra = !!extra;
    const hasChildren = !!children;
    return /*#__PURE__*/ (0, $9LU3C$jsxs)((0, $ca8b781e1b38cbcc$export$2d1cff8340d03905), {
        ...rest,
        children: [
            /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$e4ca13e82989524a), {
                children: title
            }),
            /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$623cde957a5a324e), {
                $small: small,
                children: loading ? /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$InlineLoader), {}) : value
            }),
            hasExtra && /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$ed3240b66ab7bcea), {
                children: loading ? /*#__PURE__*/ (0, $9LU3C$jsx)((0, $9LU3C$InlineLoader), {}) : extra
            }),
            hasChildren && /*#__PURE__*/ (0, $9LU3C$jsx)((0, $ca8b781e1b38cbcc$export$8dce4e443c8afd41), {
                $hidden: loading,
                children: children
            })
        ]
    });
};


var $4ca907ef309e3a2e$exports = {};


$parcel$exportWildcard($5e4f3f5938f09cef$exports, $f979852e26257adb$exports);
$parcel$exportWildcard($5e4f3f5938f09cef$exports, $4ca907ef309e3a2e$exports);


$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $2652ea905a175dd7$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $bebed6c7df22589f$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $31d06770d11bf20e$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $debd5b9d56016368$exports);
$parcel$exportWildcard($bee4c5e5a65c56cf$exports, $5e4f3f5938f09cef$exports);


$parcel$exportWildcard($2edec60da2794fb1$exports, $e097b3ed457dd2dc$exports);
$parcel$exportWildcard($2edec60da2794fb1$exports, $09016bddec447da4$exports);
$parcel$exportWildcard($2edec60da2794fb1$exports, $3c13f78eb03de316$exports);
$parcel$exportWildcard($2edec60da2794fb1$exports, $15053db04efb3bba$exports);
$parcel$exportWildcard($2edec60da2794fb1$exports, $8e37d69f73d5e5f4$exports);
$parcel$exportWildcard($2edec60da2794fb1$exports, $bee4c5e5a65c56cf$exports);


var $2aef88d4808430da$exports = {};
var $769c4b98231bad39$exports = {};

$parcel$export($769c4b98231bad39$exports, "DATA_UNAVAILABLE", function () { return $769c4b98231bad39$export$4872120a4614b963; });
const $769c4b98231bad39$export$4872120a4614b963 = "N/A";


$parcel$exportWildcard($2aef88d4808430da$exports, $769c4b98231bad39$exports);


var $fb78df27aae727e9$exports = {};
var $7ed617aa6b701fa6$exports = {};

$parcel$export($7ed617aa6b701fa6$exports, "useCopyToClipboard", function () { return $7ed617aa6b701fa6$export$b2199c37e85de4a7; });



const $7ed617aa6b701fa6$export$b2199c37e85de4a7 = (text)=>{
    return (0, $9LU3C$useCallback)(()=>{
        (0, $9LU3C$copytoclipboard)(text);
        // TODO: without ToastInfo?
        (0, $9LU3C$ToastInfo)("Copied to clipboard");
    }, [
        text
    ]);
};


$parcel$exportWildcard($fb78df27aae727e9$exports, $7ed617aa6b701fa6$exports);


var $ea5c9287e0f80725$exports = {};
var $53fc915a7c5aca97$exports = {};


$parcel$exportWildcard($ea5c9287e0f80725$exports, $53fc915a7c5aca97$exports);





export {$2d2a02a641aeabb6$export$36cbab1c8a59f416 as AddressBadge, $210e5afef337a25b$export$7562e752e5ef1fad as Faq, $22c5d07cb270ee1a$export$45c60b0bc8893fbe as getFaqList, $85c0858cceeff774$export$2bbae861424212a5 as FormatToken, $89f5730a736d4546$export$eaf41e22530ae68d as LocalLink, $33f03c880841e3dc$export$6e2c8f0811a474ce as Section, $0eca08bb850086be$export$5d1acc5361300eff as FallbackWallet, $cd16ad6f30ec4e05$export$8c8f4b533d324773 as TokenToWallet, $14bfac055f2980c0$export$fa10365278598d8a as WalletCard, $0cd484ef9c611355$export$7d0c76f6a0418e11 as WalletCardRow, $24f5534c5a2a2725$export$36be84b4aed0dcaa as WalletCardAccount, $f979852e26257adb$export$976f47e15d5defb0 as WalletCardBalance, $769c4b98231bad39$export$4872120a4614b963 as DATA_UNAVAILABLE, $7ed617aa6b701fa6$export$b2199c37e85de4a7 as useCopyToClipboard, $49b5f8700f8da98b$export$cc3bc0b518c1c6b8 as formatBalance, $04886483abe732d1$export$a265c7403141b2f4 as standardFetcher};
//# sourceMappingURL=index.mjs.map
