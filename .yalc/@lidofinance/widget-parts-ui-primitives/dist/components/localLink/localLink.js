"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const router_1 = require("next/router");
const link_1 = __importDefault(require("next/link"));
const LocalLink = (props) => {
    const { href, ...rest } = props;
    const router = (0, router_1.useRouter)();
    const { ref, embed } = router.query;
    const extraQuery = {};
    if (ref)
        extraQuery.ref = ref;
    if (embed)
        extraQuery.embed = embed;
    return (0, jsx_runtime_1.jsx)(link_1.default, { ...rest, href: href });
};
exports.default = LocalLink;
