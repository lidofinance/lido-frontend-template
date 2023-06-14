import {jsxs as $iajOg$jsxs, jsx as $iajOg$jsx} from "react/jsx-runtime";
import "react";
import {utils as $iajOg$utils, constants as $iajOg$constants, BigNumber as $iajOg$BigNumber} from "ethers";
import {Tooltip as $iajOg$Tooltip} from "@lidofinance/lido-ui";
import {useTokenToWallet as $iajOg$useTokenToWallet} from "@lido-sdk/react";
import $iajOg$styledcomponents from "styled-components";
import {WalletFallback as $iajOg$WalletFallback} from "@lidofinance/ui-primitives";
import {useWeb3 as $iajOg$useWeb3, useSupportedChains as $iajOg$useSupportedChains} from "@reef-knot/web3-react";
import {CHAINS as $iajOg$CHAINS} from "@lido-sdk/constants";

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
var $b4bee4a53d79e7e7$exports = {};
var $26e00d193c06e055$exports = {};
var $16670b89f027cb5e$exports = {};

$parcel$export($16670b89f027cb5e$exports, "FormatToken", function () { return $16670b89f027cb5e$export$2bbae861424212a5; });


var $9a48594723ba31e7$exports = {};
var $3bb79efd86bad224$exports = {};

$parcel$export($3bb79efd86bad224$exports, "formatFloorEtherBalance", function () { return $3bb79efd86bad224$export$f9c87f30bf8ee9ba; });

const { formatEther: $3bb79efd86bad224$var$formatEther  } = (0, $iajOg$utils);
const { Zero: $3bb79efd86bad224$var$Zero  } = (0, $iajOg$constants);
const $3bb79efd86bad224$export$f9c87f30bf8ee9ba = (balance = $3bb79efd86bad224$var$Zero, decimalDigits = 4)=>{
    // ETH is divisible to 18 decimal places
    const modulo = (0, $iajOg$BigNumber).from(10).pow(Math.max(0, 18 - decimalDigits));
    // wei to ether
    const etherBalanceString = $3bb79efd86bad224$var$formatEther(balance.sub(balance.mod(modulo)));
    // formatEther is cutting zeros in decimal digits to 2,
    // but we want to cut to decimalDigits
    if (etherBalanceString.includes(".")) {
        const parts = etherBalanceString.split(".");
        if (decimalDigits === 0) return parts[0];
        if (decimalDigits < parts[1].length) return parts[0] + "." + parts[1];
        return parts[0] + "." + parts[1] + "0".repeat(decimalDigits - parts[1].length);
    }
    return etherBalanceString;
};


$parcel$exportWildcard($9a48594723ba31e7$exports, $3bb79efd86bad224$exports);


const $16670b89f027cb5e$export$2bbae861424212a5 = (props)=>{
    const { amount: amount , symbol: symbol , approx: approx = false , ...rest } = props;
    const prefix = !approx || amount?.isZero() ? "" : "≈ ";
    return /*#__PURE__*/ (0, $iajOg$jsxs)("span", {
        ...rest,
        children: [
            prefix,
            (0, $3bb79efd86bad224$export$f9c87f30bf8ee9ba)(amount),
            "\xa0",
            symbol
        ]
    });
};


$parcel$exportWildcard($26e00d193c06e055$exports, $16670b89f027cb5e$exports);


var $7013ea53415b86fb$exports = {};
var $4268c3066dd9e153$exports = {};

$parcel$export($4268c3066dd9e153$exports, "TokenToWallet", function () { return $4268c3066dd9e153$export$8c8f4b533d324773; });




// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6, which is in beta ATM
// But it will be better to stop using styled-components at all.
// This is a temporary workaround, which seems to work well.


// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const $f476407de1d86eab$var$styled = (0, $iajOg$styledcomponents).default || (0, $iajOg$styledcomponents);
var $f476407de1d86eab$export$2e2bcd8739ae039 = $f476407de1d86eab$var$styled;


const $88b5526897664120$export$38a986a8dd613d5c = (0, $f476407de1d86eab$export$2e2bcd8739ae039).button`
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
  // more info: https://github.com/lidofinance/ui/tree/main/packages/theme
  background: var(--lido-color-accentDarken);

  &:before,
  &:after {
    content: '';
    position: absolute;
    // more info: https://github.com/lidofinance/ui/tree/main/packages/theme
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
`;


const $4268c3066dd9e153$export$8c8f4b533d324773 = (props)=>{
    const { address: address , ...rest } = props;
    const { addToken: addToken  } = (0, $iajOg$useTokenToWallet)(address);
    if (!addToken) return null;
    return /*#__PURE__*/ (0, $iajOg$jsx)((0, $iajOg$Tooltip), {
        placement: "bottomLeft",
        title: "Add tokens to wallet",
        children: /*#__PURE__*/ (0, $iajOg$jsx)((0, $88b5526897664120$export$38a986a8dd613d5c), {
            tabIndex: -1,
            onClick: addToken,
            ...rest
        })
    });
};


$parcel$exportWildcard($7013ea53415b86fb$exports, $4268c3066dd9e153$exports);


var $9820260e2d9442c5$exports = {};
var $cae6e30ca9e6c4b9$exports = {};

$parcel$export($cae6e30ca9e6c4b9$exports, "WalletFallback", function () { return $cae6e30ca9e6c4b9$export$db542de45b23291e; });





const $5dd21b300492e219$export$23759efdd2d2dae9 = ()=>{
    const { error: error  } = (0, $iajOg$useWeb3)();
    const { isUnsupported: isUnsupported , supportedChains: supportedChains  } = (0, $iajOg$useSupportedChains)();
    if (isUnsupported) {
        const chainNames = supportedChains.map(({ chainId: chainId , name: name  })=>(0, $iajOg$CHAINS)[chainId] || name);
        const chainNamesFormatted = new Intl.ListFormat("en", {
            style: "long",
            type: "disjunction"
        }).format(chainNames);
        return `Unsupported chain. Please switch to ${chainNamesFormatted} in your wallet`;
    }
    return error?.message;
};


const $cae6e30ca9e6c4b9$export$db542de45b23291e = (props)=>{
    const error = (0, $5dd21b300492e219$export$23759efdd2d2dae9)();
    return /*#__PURE__*/ (0, $iajOg$jsx)((0, $iajOg$WalletFallback), {
        ...props,
        error: error ?? ""
    });
};


$parcel$exportWildcard($9820260e2d9442c5$exports, $cae6e30ca9e6c4b9$exports);


$parcel$exportWildcard($b4bee4a53d79e7e7$exports, $26e00d193c06e055$exports);
$parcel$exportWildcard($b4bee4a53d79e7e7$exports, $7013ea53415b86fb$exports);
$parcel$exportWildcard($b4bee4a53d79e7e7$exports, $9820260e2d9442c5$exports);





export {$16670b89f027cb5e$export$2bbae861424212a5 as FormatToken, $4268c3066dd9e153$export$8c8f4b533d324773 as TokenToWallet, $cae6e30ca9e6c4b9$export$db542de45b23291e as WalletFallback, $3bb79efd86bad224$export$f9c87f30bf8ee9ba as formatFloorEtherBalance};
//# sourceMappingURL=index.js.map