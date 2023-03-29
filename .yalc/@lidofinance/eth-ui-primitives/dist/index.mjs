import {jsxs as $iajOg$jsxs} from "react/jsx-runtime";
import "react";
import {utils as $iajOg$utils, constants as $iajOg$constants, BigNumber as $iajOg$BigNumber} from "ethers";

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
const $3bb79efd86bad224$export$f9c87f30bf8ee9ba = (balance = $3bb79efd86bad224$var$Zero, maxDecimalDigits = 4)=>{
    const modulo = (0, $iajOg$BigNumber).from(10).pow(Math.max(0, 18 - maxDecimalDigits));
    return $3bb79efd86bad224$var$formatEther(balance.sub(balance.mod(modulo)));
};


$parcel$exportWildcard($9a48594723ba31e7$exports, $3bb79efd86bad224$exports);


const $16670b89f027cb5e$export$2bbae861424212a5 = (props)=>{
    const { amount: amount , symbol: symbol , approx: approx = false , ...rest } = props;
    const prefix = !approx || (amount === null || amount === void 0 ? void 0 : amount.isZero()) ? "" : "≈ ";
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


$parcel$exportWildcard($b4bee4a53d79e7e7$exports, $26e00d193c06e055$exports);





export {$16670b89f027cb5e$export$2bbae861424212a5 as FormatToken, $3bb79efd86bad224$export$f9c87f30bf8ee9ba as formatFloorEtherBalance};
//# sourceMappingURL=index.mjs.map
