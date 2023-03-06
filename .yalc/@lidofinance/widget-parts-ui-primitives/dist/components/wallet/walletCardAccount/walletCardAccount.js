"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const addressBadge_1 = require("../../addressBadge");
const widget_parts_wallet_modal_1 = require("@lidofinance/widget-parts-wallet-modal");
const styles_1 = require("./styles");
const WalletCardAccount = (props) => {
    const { account, ...rest } = props;
    const { openModal } = (0, widget_parts_wallet_modal_1.useModal)(widget_parts_wallet_modal_1.WALLET_MODAL.wallet);
    return ((0, jsx_runtime_1.jsx)(styles_1.WalletCardAccountStyle, { ...rest, children: (0, jsx_runtime_1.jsx)(addressBadge_1.AddressBadge, { address: account, onClick: openModal, color: "accent" }) }));
};
exports.default = WalletCardAccount;
