"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lido_ui_1 = require("@lidofinance/lido-ui");
const widget_parts_wallet_modal_1 = require("@lidofinance/widget-parts-wallet-modal");
const WalletConnect = (props) => {
    const { onClick, ...rest } = props;
    const { openModal } = (0, widget_parts_wallet_modal_1.useModal)(widget_parts_wallet_modal_1.WALLET_MODAL.connect);
    return ((0, jsx_runtime_1.jsx)(lido_ui_1.Button, { onClick: openModal, ...rest, children: "Connect wallet" }));
};
exports.default = WalletConnect;
