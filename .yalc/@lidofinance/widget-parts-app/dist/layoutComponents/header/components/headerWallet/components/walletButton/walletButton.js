"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@lido-sdk/react");
const widget_parts_ui_primitives_1 = require("@lidofinance/widget-parts-ui-primitives");
const widget_parts_wallet_modal_1 = require("@lidofinance/widget-parts-wallet-modal");
const styles_1 = require("./styles");
const WalletButton = (props) => {
    const { onClick, ...rest } = props;
    const { openModal } = (0, widget_parts_wallet_modal_1.useModal)(widget_parts_wallet_modal_1.WALLET_MODAL.wallet);
    const { account } = (0, react_1.useSDK)();
    const { data: balance, initialLoading } = (0, react_1.useEthereumBalance)();
    return ((0, jsx_runtime_1.jsx)(styles_1.WalledButtonStyle, { size: "sm", variant: "text", color: "secondary", onClick: openModal, ...rest, children: (0, jsx_runtime_1.jsxs)(styles_1.WalledButtonWrapperStyle, { children: [(0, jsx_runtime_1.jsx)(styles_1.WalledButtonBalanceStyle, { children: initialLoading ? ((0, jsx_runtime_1.jsx)(styles_1.WalledButtonLoaderStyle, {})) : (
                    // TODO: 'ETH' to dynamic symbol
                    (0, jsx_runtime_1.jsx)(widget_parts_ui_primitives_1.FormatToken, { amount: balance, symbol: "ETH" })) }), (0, jsx_runtime_1.jsx)(widget_parts_ui_primitives_1.AddressBadge, { address: account })] }) }));
};
exports.default = WalletButton;
