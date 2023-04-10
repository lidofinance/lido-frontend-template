import {jsxs as $5MjI2$jsxs, jsx as $5MjI2$jsx, Fragment as $5MjI2$Fragment} from "react/jsx-runtime";
import "react";
import $5MjI2$nexthead from "next/head";
import {ServicePage as $5MjI2$ServicePage} from "@lidofinance/lido-ui";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $1415d00c5931e9d4$exports = {};

$parcel$export($1415d00c5931e9d4$exports, "PageError", function () { return $1415d00c5931e9d4$export$ece78e4633e29053; });




const $1415d00c5931e9d4$export$ece78e4633e29053 = ({ title: title , content: content  })=>/*#__PURE__*/ (0, $5MjI2$jsxs)((0, $5MjI2$ServicePage), {
        title: title,
        children: [
            /*#__PURE__*/ (0, $5MjI2$jsx)((0, $5MjI2$nexthead), {
                children: /*#__PURE__*/ (0, $5MjI2$jsxs)("title", {
                    children: [
                        "Lido | ",
                        title
                    ]
                })
            }),
            content
        ]
    });


var $54c9481511c95e6d$exports = {};

$parcel$export($54c9481511c95e6d$exports, "Page404", function () { return $54c9481511c95e6d$export$3cb69218ff952ef8; });



const $54c9481511c95e6d$var$DefaultContent = ()=>/*#__PURE__*/ (0, $5MjI2$jsx)((0, $5MjI2$Fragment), {
        children: "Page Not Found \xaf\\_(ツ)_/\xaf'"
    });
const $54c9481511c95e6d$export$3cb69218ff952ef8 = ({ title: title , content: content  })=>/*#__PURE__*/ (0, $5MjI2$jsx)((0, $1415d00c5931e9d4$export$ece78e4633e29053), {
        title: title !== null && title !== void 0 ? title : "404",
        content: content !== null && content !== void 0 ? content : /*#__PURE__*/ (0, $5MjI2$jsx)($54c9481511c95e6d$var$DefaultContent, {})
    });


var $9408d61a34a377d4$exports = {};

$parcel$export($9408d61a34a377d4$exports, "Page500", function () { return $9408d61a34a377d4$export$fd3f669c2104219d; });



const $9408d61a34a377d4$var$DefaultContent = ()=>/*#__PURE__*/ (0, $5MjI2$jsx)((0, $5MjI2$Fragment), {
        children: "Oops! Something went wrong.'"
    });
const $9408d61a34a377d4$export$fd3f669c2104219d = ({ title: title , content: content  })=>/*#__PURE__*/ (0, $5MjI2$jsx)((0, $1415d00c5931e9d4$export$ece78e4633e29053), {
        title: title !== null && title !== void 0 ? title : "500",
        content: content !== null && content !== void 0 ? content : /*#__PURE__*/ (0, $5MjI2$jsx)($9408d61a34a377d4$var$DefaultContent, {})
    });




export {$1415d00c5931e9d4$export$ece78e4633e29053 as PageError, $54c9481511c95e6d$export$3cb69218ff952ef8 as Page404, $9408d61a34a377d4$export$fd3f669c2104219d as Page500};
//# sourceMappingURL=index.mjs.map
