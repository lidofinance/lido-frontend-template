import {jsx as $eyyxA$jsx, jsxs as $eyyxA$jsxs} from "react/jsx-runtime";
import {useCallback as $eyyxA$useCallback, useState as $eyyxA$useState, useMemo as $eyyxA$useMemo, memo as $eyyxA$memo, createContext as $eyyxA$createContext, useContext as $eyyxA$useContext} from "react";
import {Modal as $eyyxA$Modal, Identicon as $eyyxA$Identicon, Address as $eyyxA$Address, ButtonIcon as $eyyxA$ButtonIcon, External as $eyyxA$External, Button as $eyyxA$Button, useThemeToggle as $eyyxA$useThemeToggle} from "@lidofinance/lido-ui";
import {useSDK as $eyyxA$useSDK, useEtherscanOpen as $eyyxA$useEtherscanOpen} from "@lido-sdk/react";
import {useConnectorInfo as $eyyxA$useConnectorInfo, useDisconnect as $eyyxA$useDisconnect} from "@reef-knot/web3-react";
import $eyyxA$styledcomponents from "styled-components";
import {WalletsModalForEth as $eyyxA$WalletsModalForEth} from "@reef-knot/connect-wallet-modal";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}







let $e943a09fa894816f$var$_ = (t)=>t, $e943a09fa894816f$var$t, $e943a09fa894816f$var$t1, $e943a09fa894816f$var$t2, $e943a09fa894816f$var$t3, $e943a09fa894816f$var$t4, $e943a09fa894816f$var$t5, $e943a09fa894816f$var$t6;
const $e943a09fa894816f$export$c3bfcbd57ff8aecd = (0, $eyyxA$styledcomponents).div($e943a09fa894816f$var$t || ($e943a09fa894816f$var$t = $e943a09fa894816f$var$_`
  padding: ${0}px;
  background-color: var(--lido-color-background);
  border-radius: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.borderRadiusesMap.lg);
const $e943a09fa894816f$export$3b0aee05d7b19bc7 = (0, $eyyxA$styledcomponents).div($e943a09fa894816f$var$t1 || ($e943a09fa894816f$var$t1 = $e943a09fa894816f$var$_`
  display: flex;
  align-items: center;
`));
const $e943a09fa894816f$export$930e21f104e8ee03 = (0, $eyyxA$styledcomponents).div($e943a09fa894816f$var$t2 || ($e943a09fa894816f$var$t2 = $e943a09fa894816f$var$_`
  flex-grow: 1;
  margin: ${0}px 0;
  margin-right: auto;
  padding-right: ${0}px;

  font-size: ${0}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $e943a09fa894816f$export$84f684574d655e13 = (0, $eyyxA$styledcomponents)((0, $eyyxA$Button))($e943a09fa894816f$var$t3 || ($e943a09fa894816f$var$t3 = $e943a09fa894816f$var$_`
  flex-shrink: 0;
`));
const $e943a09fa894816f$export$3d4a7344e33549e = (0, $eyyxA$styledcomponents).div($e943a09fa894816f$var$t4 || ($e943a09fa894816f$var$t4 = $e943a09fa894816f$var$_`
  display: flex;
  align-items: center;
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.sm);
const $e943a09fa894816f$export$73010e1a948c9e92 = (0, $eyyxA$styledcomponents).div($e943a09fa894816f$var$t5 || ($e943a09fa894816f$var$t5 = $e943a09fa894816f$var$_`
  margin-left: ${0}px;

  font-size: ${0}px;
  font-weight: 800;
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.fontSizesMap.sm);
const $e943a09fa894816f$export$abf0394beab7496c = (0, $eyyxA$styledcomponents).div($e943a09fa894816f$var$t6 || ($e943a09fa894816f$var$t6 = $e943a09fa894816f$var$_`
  margin: 0 ${0}px;
  margin-top: ${0}px;

  button {
    margin-right: ${0}px;
    padding-left: ${0}px;
    padding-right: ${0}px;
  }
`), ({ theme: theme  })=>-theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $6408eee063493a07$var$WalletModal = (props)=>{
    const { onClose: onClose  } = props;
    const { account: account  } = (0, $eyyxA$useSDK)();
    const { providerName: providerName  } = (0, $eyyxA$useConnectorInfo)();
    const { disconnect: disconnect  } = (0, $eyyxA$useDisconnect)();
    const handleDisconnect = (0, $eyyxA$useCallback)(()=>{
        disconnect === null || disconnect === void 0 ? void 0 : disconnect();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        disconnect,
        onClose
    ]);
    // const handleCopy = useCopyToClipboard(account ?? '');
    const handleEtherscan = (0, $eyyxA$useEtherscanOpen)(account !== null && account !== void 0 ? account : "", "address");
    return /*#__PURE__*/ (0, $eyyxA$jsx)((0, $eyyxA$Modal), {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0, $eyyxA$jsxs)((0, $e943a09fa894816f$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $eyyxA$jsxs)((0, $e943a09fa894816f$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $eyyxA$jsxs)((0, $e943a09fa894816f$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $eyyxA$jsx)((0, $e943a09fa894816f$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $eyyxA$jsxs)((0, $e943a09fa894816f$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $eyyxA$jsx)((0, $eyyxA$Identicon), {
                            address: account !== null && account !== void 0 ? account : ""
                        }),
                        /*#__PURE__*/ (0, $eyyxA$jsx)((0, $e943a09fa894816f$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $eyyxA$jsx)((0, $eyyxA$Address), {
                                address: account !== null && account !== void 0 ? account : "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $eyyxA$jsx)((0, $e943a09fa894816f$export$abf0394beab7496c), {
                    children: /*#__PURE__*/ (0, $eyyxA$jsx)((0, $eyyxA$ButtonIcon), {
                        onClick: handleEtherscan,
                        icon: /*#__PURE__*/ (0, $eyyxA$jsx)((0, $eyyxA$External), {}),
                        size: "xs",
                        variant: "ghost",
                        children: "View on Etherscan"
                    })
                })
            ]
        })
    });
};
var $6408eee063493a07$export$2e2bcd8739ae039 = $6408eee063493a07$var$WalletModal;







const $6e82a4b3c8604dc5$export$ab57792b9b6974a6 = (0, $eyyxA$createContext)({});


var $c94d3404927bd285$exports = {};

$parcel$export($c94d3404927bd285$exports, "WALLET_MODAL", function () { return $c94d3404927bd285$export$abb12153ded04b4d; });
let $c94d3404927bd285$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($c94d3404927bd285$export$abb12153ded04b4d || ($c94d3404927bd285$export$abb12153ded04b4d = {}));



const $cba9b9b2e7369118$var$ProviderWalletModal = ({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
    const [active, setActive] = (0, $eyyxA$useState)(null);
    const { themeName: themeName  } = (0, $eyyxA$useThemeToggle)();
    const openModal = (0, $eyyxA$useCallback)((wModal)=>{
        setActive(wModal);
    }, []);
    const closeModal = (0, $eyyxA$useCallback)(()=>{
        setActive(null);
    }, []);
    const value = (0, $eyyxA$useMemo)(()=>({
            openModal: openModal,
            closeModal: closeModal
        }), [
        closeModal,
        openModal
    ]);
    const common = {
        onClose: closeModal,
        shouldInvertWalletIcon: themeName === "dark"
    };
    return /*#__PURE__*/ (0, $eyyxA$jsxs)((0, $6e82a4b3c8604dc5$export$ab57792b9b6974a6).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $eyyxA$jsx)((0, $6408eee063493a07$export$2e2bcd8739ae039), {
                open: active === (0, $c94d3404927bd285$export$abb12153ded04b4d).wallet,
                ...common
            }),
            /*#__PURE__*/ (0, $eyyxA$jsx)((0, $eyyxA$WalletsModalForEth), {
                open: active === (0, $c94d3404927bd285$export$abb12153ded04b4d).connect,
                metrics: walletsMetrics,
                // Controlled exception!!!
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                hiddenWallets: hiddenWallets,
                ...common
            })
        ]
    });
};
var $cba9b9b2e7369118$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $eyyxA$memo)($cba9b9b2e7369118$var$ProviderWalletModal);



var $dde40ed45ccf46ec$exports = {};

$parcel$export($dde40ed45ccf46ec$exports, "WALLET_IDS", function () { return $dde40ed45ccf46ec$export$fc3e274055426b5; });
const $dde40ed45ccf46ec$export$fc3e274055426b5 = {
    METAMASK: "Metamask",
    WALLET_CONNECT: "WalletConnect",
    LEDGER: "Ledger",
    COINBASE: "Coinbase",
    TRUST: "Trust",
    IM_TOKEN: "ImToken",
    COIN98: "Coin98",
    MATH_WALLET: "MathWallet",
    TALLY: "Tally",
    AMBIRE: "Ambire",
    BLOCKCHAINCOM: "Blockchain.com Wallet",
    ZENGO: "ZenGo",
    BRAVE: "Brave Wallet",
    OPERA: "Opera Wallet",
    EXODUS: "Exodus",
    GAMESTOP: "Gamestop",
    XDEFI: "Xdefi",
    ZERION: "Zerion"
};


var $ab0de1bf5701039c$exports = {};

$parcel$export($ab0de1bf5701039c$exports, "useModal", function () { return $ab0de1bf5701039c$export$33ffd74ebf07f060; });


const $ab0de1bf5701039c$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $eyyxA$useContext)((0, $6e82a4b3c8604dc5$export$ab57792b9b6974a6));
    const openModal = (0, $eyyxA$useCallback)(()=>{
        methods.openModal(wModal);
    }, [
        methods,
        wModal
    ]);
    return {
        openModal: openModal,
        closeModal: methods.closeModal
    };
};




export {$6408eee063493a07$export$2e2bcd8739ae039 as WalletModal, $cba9b9b2e7369118$export$2e2bcd8739ae039 as ProviderWalletModal, $c94d3404927bd285$export$abb12153ded04b4d as WALLET_MODAL, $dde40ed45ccf46ec$export$fc3e274055426b5 as WALLET_IDS, $ab0de1bf5701039c$export$33ffd74ebf07f060 as useModal};
//# sourceMappingURL=index.mjs.map
