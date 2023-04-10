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
                children: /*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsxs)("title", {
                    children: [
                        "Lido | ",
                        title
                    ]
                })
            }),
            content
        ]
    });


var $897c4d10c77c9d43$exports = {};

$parcel$export($897c4d10c77c9d43$exports, "Page404", function () { return $897c4d10c77c9d43$export$3cb69218ff952ef8; });



const $897c4d10c77c9d43$var$DefaultContent = ()=>/*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)((0, $RCG3D$reactjsxruntime.Fragment), {
        children: "Page Not Found \xaf\\_(ツ)_/\xaf'"
    });
const $897c4d10c77c9d43$export$3cb69218ff952ef8 = ({ title: title , content: content  })=>/*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)((0, $a3477cef5750232b$export$ece78e4633e29053), {
        title: title !== null && title !== void 0 ? title : "404",
        content: content !== null && content !== void 0 ? content : /*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)($897c4d10c77c9d43$var$DefaultContent, {})
    });


var $ba7842c3da55dc2b$exports = {};

$parcel$export($ba7842c3da55dc2b$exports, "Page500", function () { return $ba7842c3da55dc2b$export$fd3f669c2104219d; });



const $ba7842c3da55dc2b$var$DefaultContent = ()=>/*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)((0, $RCG3D$reactjsxruntime.Fragment), {
        children: "Oops! Something went wrong.'"
    });
const $ba7842c3da55dc2b$export$fd3f669c2104219d = ({ title: title , content: content  })=>/*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)((0, $a3477cef5750232b$export$ece78e4633e29053), {
        title: title !== null && title !== void 0 ? title : "500",
        content: content !== null && content !== void 0 ? content : /*#__PURE__*/ (0, $RCG3D$reactjsxruntime.jsx)($ba7842c3da55dc2b$var$DefaultContent, {})
    });


$parcel$exportWildcard(module.exports, $a3477cef5750232b$exports);
$parcel$exportWildcard(module.exports, $897c4d10c77c9d43$exports);
$parcel$exportWildcard(module.exports, $ba7842c3da55dc2b$exports);


//# sourceMappingURL=index.cjs.map
