var $RCG3D$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $RCG3D$nexthead = require("next/head");
var $RCG3D$lidofinancelidoui = require("@lidofinance/lido-ui");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a3477cef5750232b$exports = {};

$parcel$export($a3477cef5750232b$exports, "PageError", function () { return $a3477cef5750232b$export$ece78e4633e29053; });




const $a3477cef5750232b$export$ece78e4633e29053 = ({ title: title , content: content  })=>/*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsxs)((0, $RCG3D$lidofinancelidoui.ServicePage), {
        title: title,
        children: [
            /*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)((0, ($parcel$interopDefault($RCG3D$nexthead))), {
                children: /*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)("title", {
                    children: "Lido | Page Not Found"
                })
            }),
            content
        ]
    });


$parcel$exportWildcard(module.exports, $a3477cef5750232b$exports);


//# sourceMappingURL=index.cjs.map
