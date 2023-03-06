"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lido_ui_1 = require("@lidofinance/lido-ui");
const react_2 = require("@lido-sdk/react");
const web3_react_1 = require("@reef-knot/web3-react");
// import { useCopyToClipboard } from '@common/hooks';
const styles_1 = require("./styles");
const WalletModal = (props) => {
    const { onClose } = props;
    const { account } = (0, react_2.useSDK)();
    const { providerName } = (0, web3_react_1.useConnectorInfo)();
    const { disconnect } = (0, web3_react_1.useDisconnect)();
    const handleDisconnect = (0, react_1.useCallback)(() => {
        disconnect?.();
        onClose?.();
    }, [disconnect, onClose]);
    // const handleCopy = useCopyToClipboard(account ?? '');
    const handleEtherscan = (0, react_2.useEtherscanOpen)(account ?? '', 'address');
    return ((0, jsx_runtime_1.jsx)(lido_ui_1.Modal, { title: "Account", ...props, children: (0, jsx_runtime_1.jsxs)(styles_1.WalletModalContentStyle, { children: [(0, jsx_runtime_1.jsxs)(styles_1.WalletModalConnectedStyle, { children: [providerName && (0, jsx_runtime_1.jsxs)(styles_1.WalletModalConnectorStyle, { children: ["Connected with ", providerName] }), disconnect && ((0, jsx_runtime_1.jsx)(styles_1.WalletModalDisconnectStyle, { size: "xs", variant: "outlined", onClick: handleDisconnect, children: "Disconnect" }))] }), (0, jsx_runtime_1.jsxs)(styles_1.WalletModalAccountStyle, { children: [(0, jsx_runtime_1.jsx)(lido_ui_1.Identicon, { address: account ?? '' }), (0, jsx_runtime_1.jsx)(styles_1.WalletModalAddressStyle, { children: (0, jsx_runtime_1.jsx)(lido_ui_1.Address, { address: account ?? '', symbols: 6 }) })] }), (0, jsx_runtime_1.jsx)(styles_1.WalletModalActionsStyle, { children: (0, jsx_runtime_1.jsx)(lido_ui_1.ButtonIcon, { onClick: handleEtherscan, icon: (0, jsx_runtime_1.jsx)(lido_ui_1.External, {}), size: "xs", variant: "ghost", children: "View on Etherscan" }) })] }) }));
};
exports.default = WalletModal;
