var $eRrQA$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $eRrQA$ethers = require("ethers");

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
var $d3acdc1d2b74caac$exports = {};
var $8b804b2f1a2e1cea$exports = {};
var $9699ed71cbc0201a$exports = {};

$parcel$export($9699ed71cbc0201a$exports, "FormatToken", function () { return $9699ed71cbc0201a$export$2bbae861424212a5; });


var $0371126a9166b1fc$exports = {};
var $5868ea3002458cf7$exports = {};

$parcel$export($5868ea3002458cf7$exports, "formatFloorEtherBalance", function () { return $5868ea3002458cf7$export$f9c87f30bf8ee9ba; });

const { formatEther: $5868ea3002458cf7$var$formatEther  } = (0, $eRrQA$ethers.utils);
const { Zero: $5868ea3002458cf7$var$Zero  } = (0, $eRrQA$ethers.constants);
const $5868ea3002458cf7$export$f9c87f30bf8ee9ba = (balance = $5868ea3002458cf7$var$Zero, maxDecimalDigits = 4)=>{
    const modulo = (0, $eRrQA$ethers.BigNumber).from(10).pow(Math.max(0, 18 - maxDecimalDigits));
    return $5868ea3002458cf7$var$formatEther(balance.sub(balance.mod(modulo)));
};


$parcel$exportWildcard($0371126a9166b1fc$exports, $5868ea3002458cf7$exports);


const $9699ed71cbc0201a$export$2bbae861424212a5 = (props)=>{
    const { amount: amount , symbol: symbol , approx: approx = false , ...rest } = props;
    const prefix = !approx || (amount === null || amount === void 0 ? void 0 : amount.isZero()) ? "" : "≈ ";
    return /*#__PURE__*/ (0, $eRrQA$reactjsxruntime.jsxs)("span", {
        ...rest,
        children: [
            prefix,
            (0, $5868ea3002458cf7$export$f9c87f30bf8ee9ba)(amount),
            "\xa0",
            symbol
        ]
    });
};


$parcel$exportWildcard($8b804b2f1a2e1cea$exports, $9699ed71cbc0201a$exports);


$parcel$exportWildcard($d3acdc1d2b74caac$exports, $8b804b2f1a2e1cea$exports);



$parcel$exportWildcard(module.exports, $d3acdc1d2b74caac$exports);
$parcel$exportWildcard(module.exports, $0371126a9166b1fc$exports);


//# sourceMappingURL=index.cjs.map
