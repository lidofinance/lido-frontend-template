import {jsx as $5Wt9e$jsx, jsxs as $5Wt9e$jsxs} from "react/jsx-runtime";
import {useCallback as $5Wt9e$useCallback, memo as $5Wt9e$memo, useState as $5Wt9e$useState, useMemo as $5Wt9e$useMemo, createContext as $5Wt9e$createContext, useContext as $5Wt9e$useContext} from "react";
import {Modal as $5Wt9e$Modal, Identicon as $5Wt9e$Identicon, Address as $5Wt9e$Address, ButtonIcon as $5Wt9e$ButtonIcon, Copy as $5Wt9e$Copy, External as $5Wt9e$External, Button as $5Wt9e$Button, useThemeToggle as $5Wt9e$useThemeToggle} from "@lidofinance/lido-ui";
import {useSDK as $5Wt9e$useSDK, useEtherscanOpen as $5Wt9e$useEtherscanOpen} from "@lido-sdk/react";
import {useConnectorInfo as $5Wt9e$useConnectorInfo, useDisconnect as $5Wt9e$useDisconnect} from "@reef-knot/web3-react";
import {useCopyToClipboard as $5Wt9e$useCopyToClipboard} from "@lidofinance/ui-primitives";
import $5Wt9e$styledcomponents from "styled-components";
import {WalletsModalForEth as $5Wt9e$WalletsModalForEth} from "@reef-knot/connect-wallet-modal";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $60db5f3e574e0e26$exports = {};

$parcel$export($60db5f3e574e0e26$exports, "WalletModal", function () { return $60db5f3e574e0e26$export$851b8e4aa786e6a1; });








let $f34ef7ecd1b90ada$var$_ = (t)=>t, $f34ef7ecd1b90ada$var$t, $f34ef7ecd1b90ada$var$t1, $f34ef7ecd1b90ada$var$t2, $f34ef7ecd1b90ada$var$t3, $f34ef7ecd1b90ada$var$t4, $f34ef7ecd1b90ada$var$t5, $f34ef7ecd1b90ada$var$t6;
const $f34ef7ecd1b90ada$export$c3bfcbd57ff8aecd = (0, $5Wt9e$styledcomponents).div($f34ef7ecd1b90ada$var$t || ($f34ef7ecd1b90ada$var$t = $f34ef7ecd1b90ada$var$_`
  padding: ${0}px;
  background-color: var(--lido-color-background);
  border-radius: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.borderRadiusesMap.lg);
const $f34ef7ecd1b90ada$export$3b0aee05d7b19bc7 = (0, $5Wt9e$styledcomponents).div($f34ef7ecd1b90ada$var$t1 || ($f34ef7ecd1b90ada$var$t1 = $f34ef7ecd1b90ada$var$_`
  display: flex;
  align-items: center;
`));
const $f34ef7ecd1b90ada$export$930e21f104e8ee03 = (0, $5Wt9e$styledcomponents).div($f34ef7ecd1b90ada$var$t2 || ($f34ef7ecd1b90ada$var$t2 = $f34ef7ecd1b90ada$var$_`
  flex-grow: 1;
  margin: ${0}px 0;
  margin-right: auto;
  padding-right: ${0}px;

  font-size: ${0}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $f34ef7ecd1b90ada$export$84f684574d655e13 = (0, $5Wt9e$styledcomponents)((0, $5Wt9e$Button))($f34ef7ecd1b90ada$var$t3 || ($f34ef7ecd1b90ada$var$t3 = $f34ef7ecd1b90ada$var$_`
  flex-shrink: 0;
`));
const $f34ef7ecd1b90ada$export$3d4a7344e33549e = (0, $5Wt9e$styledcomponents).div($f34ef7ecd1b90ada$var$t4 || ($f34ef7ecd1b90ada$var$t4 = $f34ef7ecd1b90ada$var$_`
  display: flex;
  align-items: center;
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.sm);
const $f34ef7ecd1b90ada$export$73010e1a948c9e92 = (0, $5Wt9e$styledcomponents).div($f34ef7ecd1b90ada$var$t5 || ($f34ef7ecd1b90ada$var$t5 = $f34ef7ecd1b90ada$var$_`
  margin-left: ${0}px;

  font-size: ${0}px;
  font-weight: 800;
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.fontSizesMap.sm);
const $f34ef7ecd1b90ada$export$abf0394beab7496c = (0, $5Wt9e$styledcomponents).div($f34ef7ecd1b90ada$var$t6 || ($f34ef7ecd1b90ada$var$t6 = $f34ef7ecd1b90ada$var$_`
  margin: 0 ${0}px;
  margin-top: ${0}px;

  button {
    margin-right: ${0}px;
    padding-left: ${0}px;
    padding-right: ${0}px;
  }
`), ({ theme: theme  })=>-theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $60db5f3e574e0e26$export$851b8e4aa786e6a1 = (props)=>{
    const { onClose: onClose  } = props;
    const { account: account  } = (0, $5Wt9e$useSDK)();
    const { providerName: providerName  } = (0, $5Wt9e$useConnectorInfo)();
    const { disconnect: disconnect  } = (0, $5Wt9e$useDisconnect)();
    const handleDisconnect = (0, $5Wt9e$useCallback)(()=>{
        disconnect === null || disconnect === void 0 ? void 0 : disconnect();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        disconnect,
        onClose
    ]);
    const handleCopy = (0, $5Wt9e$useCopyToClipboard)(account !== null && account !== void 0 ? account : "");
    const handleEtherscan = (0, $5Wt9e$useEtherscanOpen)(account !== null && account !== void 0 ? account : "", "address");
    return /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Modal), {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $f34ef7ecd1b90ada$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $f34ef7ecd1b90ada$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $f34ef7ecd1b90ada$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $f34ef7ecd1b90ada$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $f34ef7ecd1b90ada$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Identicon), {
                            address: account !== null && account !== void 0 ? account : ""
                        }),
                        /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $f34ef7ecd1b90ada$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Address), {
                                address: account !== null && account !== void 0 ? account : "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $f34ef7ecd1b90ada$export$abf0394beab7496c), {
                    children: [
                        /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$ButtonIcon), {
                            onClick: handleCopy,
                            icon: /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Copy), {}),
                            size: "xs",
                            variant: "ghost",
                            children: "Copy address"
                        }),
                        /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$ButtonIcon), {
                            onClick: handleEtherscan,
                            icon: /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$External), {}),
                            size: "xs",
                            variant: "ghost",
                            children: "View on Etherscan"
                        })
                    ]
                })
            ]
        })
    });
};


var $731c06846bb5c49f$exports = {};

$parcel$export($731c06846bb5c49f$exports, "ProviderWalletModal", function () { return $731c06846bb5c49f$export$20f61e42ab13a53f; });





const $9f6757bd7f8c4d58$export$ab57792b9b6974a6 = (0, $5Wt9e$createContext)({});


var $fece9a1d04edf865$exports = {};

$parcel$export($fece9a1d04edf865$exports, "WALLET_MODAL", function () { return $fece9a1d04edf865$export$abb12153ded04b4d; });
let $fece9a1d04edf865$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($fece9a1d04edf865$export$abb12153ded04b4d || ($fece9a1d04edf865$export$abb12153ded04b4d = {}));



const $731c06846bb5c49f$export$20f61e42ab13a53f = /*#__PURE__*/ (0, $5Wt9e$memo)(({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
    const [active, setActive] = (0, $5Wt9e$useState)(null);
    const { themeName: themeName  } = (0, $5Wt9e$useThemeToggle)();
    const openModal = (0, $5Wt9e$useCallback)((wModal)=>{
        setActive(wModal);
    }, []);
    const closeModal = (0, $5Wt9e$useCallback)(()=>{
        setActive(null);
    }, []);
    const value = (0, $5Wt9e$useMemo)(()=>({
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
    return /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $9f6757bd7f8c4d58$export$ab57792b9b6974a6).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $60db5f3e574e0e26$export$851b8e4aa786e6a1), {
                open: active === (0, $fece9a1d04edf865$export$abb12153ded04b4d).wallet,
                ...common
            }),
            /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$WalletsModalForEth), {
                open: active === (0, $fece9a1d04edf865$export$abb12153ded04b4d).connect,
                metrics: walletsMetrics,
                // Controlled exception!!!
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                hiddenWallets: hiddenWallets,
                ...common
            })
        ]
    });
});
$731c06846bb5c49f$export$20f61e42ab13a53f.displayName = "ProviderWalletModal";



var $f63718064d245e18$exports = {};

$parcel$export($f63718064d245e18$exports, "WALLET_IDS", function () { return $f63718064d245e18$export$fc3e274055426b5; });
const $f63718064d245e18$export$fc3e274055426b5 = {
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


var $486a2f92a2295f7f$exports = {};

$parcel$export($486a2f92a2295f7f$exports, "useModal", function () { return $486a2f92a2295f7f$export$33ffd74ebf07f060; });


const $486a2f92a2295f7f$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $5Wt9e$useContext)((0, $9f6757bd7f8c4d58$export$ab57792b9b6974a6));
    const openModal = (0, $5Wt9e$useCallback)(()=>{
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




export {$60db5f3e574e0e26$export$851b8e4aa786e6a1 as WalletModal, $731c06846bb5c49f$export$20f61e42ab13a53f as ProviderWalletModal, $fece9a1d04edf865$export$abb12153ded04b4d as WALLET_MODAL, $f63718064d245e18$export$fc3e274055426b5 as WALLET_IDS, $486a2f92a2295f7f$export$33ffd74ebf07f060 as useModal};
//# sourceMappingURL=index.mjs.map
