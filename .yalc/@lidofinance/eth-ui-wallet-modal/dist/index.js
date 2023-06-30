import {jsx as $5Wt9e$jsx, jsxs as $5Wt9e$jsxs} from "react/jsx-runtime";
import {useCallback as $5Wt9e$useCallback, useContext as $5Wt9e$useContext, createContext as $5Wt9e$createContext, useState as $5Wt9e$useState, useMemo as $5Wt9e$useMemo, memo as $5Wt9e$memo} from "react";
import $5Wt9e$copytoclipboard from "copy-to-clipboard";
import {Modal as $5Wt9e$Modal, Identicon as $5Wt9e$Identicon, Address as $5Wt9e$Address, ButtonIcon as $5Wt9e$ButtonIcon, Copy as $5Wt9e$Copy, External as $5Wt9e$External, Button as $5Wt9e$Button, AddressBadge as $5Wt9e$AddressBadge, InlineLoader as $5Wt9e$InlineLoader, useThemeToggle as $5Wt9e$useThemeToggle, CookieThemeProvider as $5Wt9e$CookieThemeProvider} from "@lidofinance/lido-ui";
import {useSDK as $5Wt9e$useSDK, useEtherscanOpen as $5Wt9e$useEtherscanOpen, useEthereumBalance as $5Wt9e$useEthereumBalance} from "@lido-sdk/react";
import {useConnectorInfo as $5Wt9e$useConnectorInfo, useDisconnect as $5Wt9e$useDisconnect} from "reef-knot/web3-react";
import $5Wt9e$styledcomponents from "styled-components";
import {FormatToken as $5Wt9e$FormatToken} from "@lidofinance/eth-ui-primitives";
import {WalletsModalForEth as $5Wt9e$WalletsModalForEth} from "reef-knot/connect-wallet-modal";

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $be5ca2f9574b8024$exports = {};
var $3c2736386c59f2c9$exports = {};
var $4834fb6c2a5fac26$exports = {};

$parcel$export($4834fb6c2a5fac26$exports, "ConnectedWalletInfoModal", function () { return $4834fb6c2a5fac26$export$cb2837f914c2c08c; });







// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6, which is in beta ATM
// But it will be better to stop using styled-components at all.
// This is a temporary workaround, which seems to work well.


// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const $7242491312d98017$var$styled = (0, $5Wt9e$styledcomponents).default || (0, $5Wt9e$styledcomponents);
var $7242491312d98017$export$2e2bcd8739ae039 = $7242491312d98017$var$styled;


const $5706f6898733c77a$export$c3bfcbd57ff8aecd = (0, $7242491312d98017$export$2e2bcd8739ae039).div`
  padding: ${({ theme: theme  })=>theme.spaceMap.lg}px;
  background-color: var(--lido-color-background);
  border-radius: ${({ theme: theme  })=>theme.borderRadiusesMap.lg}px;
`;
const $5706f6898733c77a$export$3b0aee05d7b19bc7 = (0, $7242491312d98017$export$2e2bcd8739ae039).div`
  display: flex;
  align-items: center;
`;
const $5706f6898733c77a$export$930e21f104e8ee03 = (0, $7242491312d98017$export$2e2bcd8739ae039).div`
  flex-grow: 1;
  margin: ${({ theme: theme  })=>theme.spaceMap.sm}px 0;
  margin-right: auto;
  padding-right: ${({ theme: theme  })=>theme.spaceMap.md}px;

  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xxs}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`;
const $5706f6898733c77a$export$84f684574d655e13 = (0, $7242491312d98017$export$2e2bcd8739ae039)((0, $5Wt9e$Button))`
  flex-shrink: 0;
`;
const $5706f6898733c77a$export$3d4a7344e33549e = (0, $7242491312d98017$export$2e2bcd8739ae039).div`
  display: flex;
  align-items: center;
  margin: ${({ theme: theme  })=>theme.spaceMap.sm}px 0;
`;
const $5706f6898733c77a$export$73010e1a948c9e92 = (0, $7242491312d98017$export$2e2bcd8739ae039).div`
  margin-left: ${({ theme: theme  })=>theme.spaceMap.sm}px;

  font-size: ${({ theme: theme  })=>theme.fontSizesMap.sm}px;
  font-weight: 800;
  line-height: 1.2em;
`;
const $5706f6898733c77a$export$abf0394beab7496c = (0, $7242491312d98017$export$2e2bcd8739ae039).div`
  margin: 0 ${({ theme: theme  })=>-theme.spaceMap.sm}px;
  margin-top: ${({ theme: theme  })=>theme.spaceMap.md}px;

  button {
    margin-right: ${({ theme: theme  })=>theme.spaceMap.sm}px;
    padding-left: ${({ theme: theme  })=>theme.spaceMap.sm}px;
    padding-right: ${({ theme: theme  })=>theme.spaceMap.sm}px;
  }
`;


const $4834fb6c2a5fac26$export$cb2837f914c2c08c = (props)=>{
    const { onClose: onClose  } = props;
    const { account: account  } = (0, $5Wt9e$useSDK)();
    const { providerName: providerName  } = (0, $5Wt9e$useConnectorInfo)();
    const { disconnect: disconnect  } = (0, $5Wt9e$useDisconnect)();
    const handleDisconnect = (0, $5Wt9e$useCallback)(()=>{
        disconnect?.();
        onClose?.();
    }, [
        disconnect,
        onClose
    ]);
    // TODO
    const handleEtherscan = (0, $5Wt9e$useEtherscanOpen)(account ?? "", "address");
    return /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Modal), {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $5706f6898733c77a$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $5706f6898733c77a$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $5706f6898733c77a$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5706f6898733c77a$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $5706f6898733c77a$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Identicon), {
                            address: account ?? ""
                        }),
                        /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5706f6898733c77a$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Address), {
                                address: account ?? "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $5706f6898733c77a$export$abf0394beab7496c), {
                    children: [
                        /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$ButtonIcon), {
                            onClick: ()=>{
                                (0, $5Wt9e$copytoclipboard)(account ?? "");
                            },
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


$parcel$exportWildcard($3c2736386c59f2c9$exports, $4834fb6c2a5fac26$exports);


var $4f1a2d4fd3bc9e09$exports = {};
var $bba7b9e54db80c5d$exports = {};

$parcel$export($bba7b9e54db80c5d$exports, "WalletButton", function () { return $bba7b9e54db80c5d$export$eab4424f030fcb21; });





var $486a2f92a2295f7f$exports = {};

$parcel$export($486a2f92a2295f7f$exports, "useModal", function () { return $486a2f92a2295f7f$export$33ffd74ebf07f060; });


const $9f6757bd7f8c4d58$export$8fa8c0fc3ea86e87 = (0, $5Wt9e$createContext)({});


const $486a2f92a2295f7f$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $5Wt9e$useContext)((0, $9f6757bd7f8c4d58$export$8fa8c0fc3ea86e87));
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


var $fece9a1d04edf865$exports = {};

$parcel$export($fece9a1d04edf865$exports, "WALLET_MODAL", function () { return $fece9a1d04edf865$export$abb12153ded04b4d; });
let $fece9a1d04edf865$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($fece9a1d04edf865$export$abb12153ded04b4d || ($fece9a1d04edf865$export$abb12153ded04b4d = {}));




const $ffad33f5a054a825$export$b4b09ec636b8dc92 = (0, $7242491312d98017$export$2e2bcd8739ae039)((0, $5Wt9e$Button))`
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`;
const $ffad33f5a054a825$export$1ba39b57e9c6b91f = (0, $7242491312d98017$export$2e2bcd8739ae039).span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -10px -18px;
`;
const $ffad33f5a054a825$export$8d4cce15cb50cfeb = (0, $7242491312d98017$export$2e2bcd8739ae039).span`
  margin-right: 12px;
  margin-left: 4px;
  font-size: ${({ theme: theme  })=>theme.fontSizesMap.xs}px;

  ${({ theme: theme  })=>theme.mediaQueries.md} {
    display: none;
  }
`;
const $ffad33f5a054a825$export$39c6911ce38c2d39 = (0, $7242491312d98017$export$2e2bcd8739ae039)((0, $5Wt9e$InlineLoader))`
  width: 60px;
`;


const $bba7b9e54db80c5d$export$eab4424f030fcb21 = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $486a2f92a2295f7f$export$33ffd74ebf07f060)((0, $fece9a1d04edf865$export$abb12153ded04b4d).wallet);
    const { account: account  } = (0, $5Wt9e$useSDK)();
    const { data: balance , initialLoading: initialLoading  } = (0, $5Wt9e$useEthereumBalance)();
    return /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $ffad33f5a054a825$export$b4b09ec636b8dc92), {
        size: "sm",
        variant: "text",
        color: "secondary",
        onClick: openModal,
        ...rest,
        children: /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $ffad33f5a054a825$export$1ba39b57e9c6b91f), {
            children: [
                /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $ffad33f5a054a825$export$8d4cce15cb50cfeb), {
                    children: initialLoading ? /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $ffad33f5a054a825$export$39c6911ce38c2d39), {}) : /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$FormatToken), {
                        amount: balance,
                        symbol: "ETH"
                    })
                }),
                /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$AddressBadge), {
                    address: account ?? ""
                })
            ]
        })
    });
};


$parcel$exportWildcard($4f1a2d4fd3bc9e09$exports, $bba7b9e54db80c5d$exports);


var $7367e984a8d35418$exports = {};
var $b874c96d005179d3$exports = {};

$parcel$export($b874c96d005179d3$exports, "WalletConnectButton", function () { return $b874c96d005179d3$export$2a466333ed714424; });





const $b874c96d005179d3$export$2a466333ed714424 = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $486a2f92a2295f7f$export$33ffd74ebf07f060)((0, $fece9a1d04edf865$export$abb12153ded04b4d).connect);
    return /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$Button), {
        onClick: openModal,
        ...rest,
        children: "Connect wallet"
    });
};


$parcel$exportWildcard($7367e984a8d35418$exports, $b874c96d005179d3$exports);


$parcel$exportWildcard($be5ca2f9574b8024$exports, $3c2736386c59f2c9$exports);
$parcel$exportWildcard($be5ca2f9574b8024$exports, $4f1a2d4fd3bc9e09$exports);
$parcel$exportWildcard($be5ca2f9574b8024$exports, $7367e984a8d35418$exports);


var $83d393f0f45b5747$exports = {};

$parcel$export($83d393f0f45b5747$exports, "ProviderWalletModal", function () { return $83d393f0f45b5747$export$20f61e42ab13a53f; });







const $83d393f0f45b5747$var$_ShadowProviderWalletModal = ({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
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
    return /*#__PURE__*/ (0, $5Wt9e$jsxs)((0, $9f6757bd7f8c4d58$export$8fa8c0fc3ea86e87).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $4834fb6c2a5fac26$export$cb2837f914c2c08c), {
                open: active === (0, $fece9a1d04edf865$export$abb12153ded04b4d).wallet,
                ...common
            }),
            /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$WalletsModalForEth), {
                open: active === (0, $fece9a1d04edf865$export$abb12153ded04b4d).connect,
                metrics: walletsMetrics,
                hiddenWallets: hiddenWallets,
                ...common
            })
        ]
    });
};
const $83d393f0f45b5747$export$20f61e42ab13a53f = /*#__PURE__*/ (0, $5Wt9e$memo)((props)=>{
    return /*#__PURE__*/ (0, $5Wt9e$jsx)((0, $5Wt9e$CookieThemeProvider), {
        children: /*#__PURE__*/ (0, $5Wt9e$jsx)($83d393f0f45b5747$var$_ShadowProviderWalletModal, {
            ...props
        })
    });
});
$83d393f0f45b5747$export$20f61e42ab13a53f.displayName = "ProviderWalletModal";



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





export {$4834fb6c2a5fac26$export$cb2837f914c2c08c as ConnectedWalletInfoModal, $bba7b9e54db80c5d$export$eab4424f030fcb21 as WalletButton, $b874c96d005179d3$export$2a466333ed714424 as WalletConnectButton, $83d393f0f45b5747$export$20f61e42ab13a53f as ProviderWalletModal, $fece9a1d04edf865$export$abb12153ded04b4d as WALLET_MODAL, $f63718064d245e18$export$fc3e274055426b5 as WALLET_IDS, $486a2f92a2295f7f$export$33ffd74ebf07f060 as useModal};
//# sourceMappingURL=index.js.map
