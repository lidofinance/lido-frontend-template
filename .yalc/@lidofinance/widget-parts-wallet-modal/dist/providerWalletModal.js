"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const connect_wallet_modal_1 = require("@reef-knot/connect-wallet-modal");
const lido_ui_1 = require("@lidofinance/lido-ui");
const context_1 = require("./context");
const enums_1 = require("./enums");
const walletModal_1 = __importDefault(require("./walletModal"));
const ProviderWalletModal = ({ children, walletsMetrics, hiddenWallets, }) => {
    const [active, setActive] = (0, react_1.useState)(null);
    const { themeName } = (0, lido_ui_1.useThemeToggle)();
    const openModal = (0, react_1.useCallback)((wModal) => {
        setActive(wModal);
    }, []);
    const closeModal = (0, react_1.useCallback)(() => {
        setActive(null);
    }, []);
    const value = (0, react_1.useMemo)(() => ({
        openModal,
        closeModal,
    }), [closeModal, openModal]);
    const common = {
        onClose: closeModal,
        shouldInvertWalletIcon: themeName === 'dark',
    };
    return ((0, jsx_runtime_1.jsxs)(context_1.ModalContext.Provider, { value: value, children: [children, (0, jsx_runtime_1.jsx)(walletModal_1.default, { open: active === enums_1.WALLET_MODAL.wallet, ...common }), (0, jsx_runtime_1.jsx)(connect_wallet_modal_1.WalletsModalForEth, { open: active === enums_1.WALLET_MODAL.connect, metrics: walletsMetrics, 
                // Controlled exception!!!
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                hiddenWallets: hiddenWallets, ...common })] }));
};
exports.default = (0, react_1.memo)(ProviderWalletModal);
