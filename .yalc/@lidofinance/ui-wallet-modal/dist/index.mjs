import {jsx as $9YTDV$jsx, jsxs as $9YTDV$jsxs} from "react/jsx-runtime";
import {useCallback as $9YTDV$useCallback, memo as $9YTDV$memo, useState as $9YTDV$useState, useMemo as $9YTDV$useMemo, createContext as $9YTDV$createContext, useContext as $9YTDV$useContext} from "react";
import {Modal as $9YTDV$Modal, Identicon as $9YTDV$Identicon, Address as $9YTDV$Address, ButtonIcon as $9YTDV$ButtonIcon, External as $9YTDV$External, Button as $9YTDV$Button, useThemeToggle as $9YTDV$useThemeToggle} from "@lidofinance/lido-ui";
import {useSDK as $9YTDV$useSDK, useEtherscanOpen as $9YTDV$useEtherscanOpen} from "@lido-sdk/react";
import {useConnectorInfo as $9YTDV$useConnectorInfo, useDisconnect as $9YTDV$useDisconnect} from "@reef-knot/web3-react";
import $9YTDV$styledcomponents from "styled-components";
import {WalletsModalForEth as $9YTDV$WalletsModalForEth} from "@reef-knot/connect-wallet-modal";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $d146f0f1641acc5a$exports = {};

$parcel$export($d146f0f1641acc5a$exports, "WalletModal", function () { return $d146f0f1641acc5a$export$851b8e4aa786e6a1; });







let $561b2ec00fac2dc1$var$_ = (t)=>t, $561b2ec00fac2dc1$var$t, $561b2ec00fac2dc1$var$t1, $561b2ec00fac2dc1$var$t2, $561b2ec00fac2dc1$var$t3, $561b2ec00fac2dc1$var$t4, $561b2ec00fac2dc1$var$t5, $561b2ec00fac2dc1$var$t6;
const $561b2ec00fac2dc1$export$c3bfcbd57ff8aecd = (0, $9YTDV$styledcomponents).div($561b2ec00fac2dc1$var$t || ($561b2ec00fac2dc1$var$t = $561b2ec00fac2dc1$var$_`
  padding: ${0}px;
  background-color: var(--lido-color-background);
  border-radius: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.borderRadiusesMap.lg);
const $561b2ec00fac2dc1$export$3b0aee05d7b19bc7 = (0, $9YTDV$styledcomponents).div($561b2ec00fac2dc1$var$t1 || ($561b2ec00fac2dc1$var$t1 = $561b2ec00fac2dc1$var$_`
  display: flex;
  align-items: center;
`));
const $561b2ec00fac2dc1$export$930e21f104e8ee03 = (0, $9YTDV$styledcomponents).div($561b2ec00fac2dc1$var$t2 || ($561b2ec00fac2dc1$var$t2 = $561b2ec00fac2dc1$var$_`
  flex-grow: 1;
  margin: ${0}px 0;
  margin-right: auto;
  padding-right: ${0}px;

  font-size: ${0}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $561b2ec00fac2dc1$export$84f684574d655e13 = (0, $9YTDV$styledcomponents)((0, $9YTDV$Button))($561b2ec00fac2dc1$var$t3 || ($561b2ec00fac2dc1$var$t3 = $561b2ec00fac2dc1$var$_`
  flex-shrink: 0;
`));
const $561b2ec00fac2dc1$export$3d4a7344e33549e = (0, $9YTDV$styledcomponents).div($561b2ec00fac2dc1$var$t4 || ($561b2ec00fac2dc1$var$t4 = $561b2ec00fac2dc1$var$_`
  display: flex;
  align-items: center;
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.sm);
const $561b2ec00fac2dc1$export$73010e1a948c9e92 = (0, $9YTDV$styledcomponents).div($561b2ec00fac2dc1$var$t5 || ($561b2ec00fac2dc1$var$t5 = $561b2ec00fac2dc1$var$_`
  margin-left: ${0}px;

  font-size: ${0}px;
  font-weight: 800;
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.fontSizesMap.sm);
const $561b2ec00fac2dc1$export$abf0394beab7496c = (0, $9YTDV$styledcomponents).div($561b2ec00fac2dc1$var$t6 || ($561b2ec00fac2dc1$var$t6 = $561b2ec00fac2dc1$var$_`
  margin: 0 ${0}px;
  margin-top: ${0}px;

  button {
    margin-right: ${0}px;
    padding-left: ${0}px;
    padding-right: ${0}px;
  }
`), ({ theme: theme  })=>-theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $d146f0f1641acc5a$export$851b8e4aa786e6a1 = (props)=>{
    const { onClose: onClose  } = props;
    const { account: account  } = (0, $9YTDV$useSDK)();
    const { providerName: providerName  } = (0, $9YTDV$useConnectorInfo)();
    const { disconnect: disconnect  } = (0, $9YTDV$useDisconnect)();
    const handleDisconnect = (0, $9YTDV$useCallback)(()=>{
        disconnect === null || disconnect === void 0 ? void 0 : disconnect();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        disconnect,
        onClose
    ]);
    // const handleCopy = useCopyToClipboard(account ?? '');
    const handleEtherscan = (0, $9YTDV$useEtherscanOpen)(account !== null && account !== void 0 ? account : "", "address");
    return /*#__PURE__*/ (0, $9YTDV$jsx)((0, $9YTDV$Modal), {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0, $9YTDV$jsxs)((0, $561b2ec00fac2dc1$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $9YTDV$jsxs)((0, $561b2ec00fac2dc1$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $9YTDV$jsxs)((0, $561b2ec00fac2dc1$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $9YTDV$jsx)((0, $561b2ec00fac2dc1$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $9YTDV$jsxs)((0, $561b2ec00fac2dc1$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $9YTDV$jsx)((0, $9YTDV$Identicon), {
                            address: account !== null && account !== void 0 ? account : ""
                        }),
                        /*#__PURE__*/ (0, $9YTDV$jsx)((0, $561b2ec00fac2dc1$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $9YTDV$jsx)((0, $9YTDV$Address), {
                                address: account !== null && account !== void 0 ? account : "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $9YTDV$jsx)((0, $561b2ec00fac2dc1$export$abf0394beab7496c), {
                    children: /*#__PURE__*/ (0, $9YTDV$jsx)((0, $9YTDV$ButtonIcon), {
                        onClick: handleEtherscan,
                        icon: /*#__PURE__*/ (0, $9YTDV$jsx)((0, $9YTDV$External), {}),
                        size: "xs",
                        variant: "ghost",
                        children: "View on Etherscan"
                    })
                })
            ]
        })
    });
};


var $b06659b9b9977d8d$exports = {};

$parcel$export($b06659b9b9977d8d$exports, "ProviderWalletModal", function () { return $b06659b9b9977d8d$export$20f61e42ab13a53f; });





const $0e97fd97e7c1367f$export$ab57792b9b6974a6 = (0, $9YTDV$createContext)({});


var $11d4f7b9f81a3b2f$exports = {};

$parcel$export($11d4f7b9f81a3b2f$exports, "WALLET_MODAL", function () { return $11d4f7b9f81a3b2f$export$abb12153ded04b4d; });
let $11d4f7b9f81a3b2f$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($11d4f7b9f81a3b2f$export$abb12153ded04b4d || ($11d4f7b9f81a3b2f$export$abb12153ded04b4d = {}));



const $b06659b9b9977d8d$export$20f61e42ab13a53f = /*#__PURE__*/ (0, $9YTDV$memo)(({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
    const [active, setActive] = (0, $9YTDV$useState)(null);
    const { themeName: themeName  } = (0, $9YTDV$useThemeToggle)();
    const openModal = (0, $9YTDV$useCallback)((wModal)=>{
        setActive(wModal);
    }, []);
    const closeModal = (0, $9YTDV$useCallback)(()=>{
        setActive(null);
    }, []);
    const value = (0, $9YTDV$useMemo)(()=>({
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
    return /*#__PURE__*/ (0, $9YTDV$jsxs)((0, $0e97fd97e7c1367f$export$ab57792b9b6974a6).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $9YTDV$jsx)((0, $d146f0f1641acc5a$export$851b8e4aa786e6a1), {
                open: active === (0, $11d4f7b9f81a3b2f$export$abb12153ded04b4d).wallet,
                ...common
            }),
            /*#__PURE__*/ (0, $9YTDV$jsx)((0, $9YTDV$WalletsModalForEth), {
                open: active === (0, $11d4f7b9f81a3b2f$export$abb12153ded04b4d).connect,
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
$b06659b9b9977d8d$export$20f61e42ab13a53f.displayName = "ProviderWalletModal";



var $8f8bbb0ea8272e30$exports = {};

$parcel$export($8f8bbb0ea8272e30$exports, "WALLET_IDS", function () { return $8f8bbb0ea8272e30$export$fc3e274055426b5; });
const $8f8bbb0ea8272e30$export$fc3e274055426b5 = {
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


var $d5fef00bce1df74e$exports = {};

$parcel$export($d5fef00bce1df74e$exports, "useModal", function () { return $d5fef00bce1df74e$export$33ffd74ebf07f060; });


const $d5fef00bce1df74e$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $9YTDV$useContext)((0, $0e97fd97e7c1367f$export$ab57792b9b6974a6));
    const openModal = (0, $9YTDV$useCallback)(()=>{
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




export {$d146f0f1641acc5a$export$851b8e4aa786e6a1 as WalletModal, $b06659b9b9977d8d$export$20f61e42ab13a53f as ProviderWalletModal, $11d4f7b9f81a3b2f$export$abb12153ded04b4d as WALLET_MODAL, $8f8bbb0ea8272e30$export$fc3e274055426b5 as WALLET_IDS, $d5fef00bce1df74e$export$33ffd74ebf07f060 as useModal};
//# sourceMappingURL=index.mjs.map
