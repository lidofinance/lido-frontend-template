var $53sus$reactjsxruntime = require("react/jsx-runtime");
var $53sus$react = require("react");
var $53sus$lidofinancelidoui = require("@lidofinance/lido-ui");
var $53sus$lidosdkreact = require("@lido-sdk/react");
var $53sus$reefknotweb3react = require("@reef-knot/web3-react");
var $53sus$lidofinanceuiprimitives = require("@lidofinance/ui-primitives");
var $53sus$styledcomponents = require("styled-components");
var $53sus$reefknotconnectwalletmodal = require("@reef-knot/connect-wallet-modal");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $a1b5280aa329b566$exports = {};

$parcel$export($a1b5280aa329b566$exports, "WalletModal", function () { return $a1b5280aa329b566$export$851b8e4aa786e6a1; });








let $83a1b7551960c39b$var$_ = (t)=>t, $83a1b7551960c39b$var$t, $83a1b7551960c39b$var$t1, $83a1b7551960c39b$var$t2, $83a1b7551960c39b$var$t3, $83a1b7551960c39b$var$t4, $83a1b7551960c39b$var$t5, $83a1b7551960c39b$var$t6;
const $83a1b7551960c39b$export$c3bfcbd57ff8aecd = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($83a1b7551960c39b$var$t || ($83a1b7551960c39b$var$t = $83a1b7551960c39b$var$_`
  padding: ${0}px;
  background-color: var(--lido-color-background);
  border-radius: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.borderRadiusesMap.lg);
const $83a1b7551960c39b$export$3b0aee05d7b19bc7 = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($83a1b7551960c39b$var$t1 || ($83a1b7551960c39b$var$t1 = $83a1b7551960c39b$var$_`
  display: flex;
  align-items: center;
`));
const $83a1b7551960c39b$export$930e21f104e8ee03 = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($83a1b7551960c39b$var$t2 || ($83a1b7551960c39b$var$t2 = $83a1b7551960c39b$var$_`
  flex-grow: 1;
  margin: ${0}px 0;
  margin-right: auto;
  padding-right: ${0}px;

  font-size: ${0}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $83a1b7551960c39b$export$84f684574d655e13 = (0, ($parcel$interopDefault($53sus$styledcomponents)))((0, $53sus$lidofinancelidoui.Button))($83a1b7551960c39b$var$t3 || ($83a1b7551960c39b$var$t3 = $83a1b7551960c39b$var$_`
  flex-shrink: 0;
`));
const $83a1b7551960c39b$export$3d4a7344e33549e = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($83a1b7551960c39b$var$t4 || ($83a1b7551960c39b$var$t4 = $83a1b7551960c39b$var$_`
  display: flex;
  align-items: center;
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.sm);
const $83a1b7551960c39b$export$73010e1a948c9e92 = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($83a1b7551960c39b$var$t5 || ($83a1b7551960c39b$var$t5 = $83a1b7551960c39b$var$_`
  margin-left: ${0}px;

  font-size: ${0}px;
  font-weight: 800;
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.fontSizesMap.sm);
const $83a1b7551960c39b$export$abf0394beab7496c = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($83a1b7551960c39b$var$t6 || ($83a1b7551960c39b$var$t6 = $83a1b7551960c39b$var$_`
  margin: 0 ${0}px;
  margin-top: ${0}px;

  button {
    margin-right: ${0}px;
    padding-left: ${0}px;
    padding-right: ${0}px;
  }
`), ({ theme: theme  })=>-theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $a1b5280aa329b566$export$851b8e4aa786e6a1 = (props)=>{
    const { onClose: onClose  } = props;
    const { account: account  } = (0, $53sus$lidosdkreact.useSDK)();
    const { providerName: providerName  } = (0, $53sus$reefknotweb3react.useConnectorInfo)();
    const { disconnect: disconnect  } = (0, $53sus$reefknotweb3react.useDisconnect)();
    const handleDisconnect = (0, $53sus$react.useCallback)(()=>{
        disconnect === null || disconnect === void 0 ? void 0 : disconnect();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        disconnect,
        onClose
    ]);
    const handleCopy = (0, $53sus$lidofinanceuiprimitives.useCopyToClipboard)(account !== null && account !== void 0 ? account : "");
    const handleEtherscan = (0, $53sus$lidosdkreact.useEtherscanOpen)(account !== null && account !== void 0 ? account : "", "address");
    return /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.Modal), {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $83a1b7551960c39b$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $83a1b7551960c39b$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $83a1b7551960c39b$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $83a1b7551960c39b$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $83a1b7551960c39b$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.Identicon), {
                            address: account !== null && account !== void 0 ? account : ""
                        }),
                        /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $83a1b7551960c39b$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.Address), {
                                address: account !== null && account !== void 0 ? account : "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $83a1b7551960c39b$export$abf0394beab7496c), {
                    children: [
                        /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.ButtonIcon), {
                            onClick: handleCopy,
                            icon: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.Copy), {}),
                            size: "xs",
                            variant: "ghost",
                            children: "Copy address"
                        }),
                        /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.ButtonIcon), {
                            onClick: handleEtherscan,
                            icon: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.External), {}),
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


var $7116f5af98f0c5bd$exports = {};

$parcel$export($7116f5af98f0c5bd$exports, "ProviderWalletModal", function () { return $7116f5af98f0c5bd$export$20f61e42ab13a53f; });





const $45086f49b87e231e$export$ab57792b9b6974a6 = (0, $53sus$react.createContext)({});


var $724a2b6c20e6b206$exports = {};

$parcel$export($724a2b6c20e6b206$exports, "WALLET_MODAL", function () { return $724a2b6c20e6b206$export$abb12153ded04b4d; });
let $724a2b6c20e6b206$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($724a2b6c20e6b206$export$abb12153ded04b4d || ($724a2b6c20e6b206$export$abb12153ded04b4d = {}));



const $7116f5af98f0c5bd$export$20f61e42ab13a53f = /*#__PURE__*/ (0, $53sus$react.memo)(({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
    const [active, setActive] = (0, $53sus$react.useState)(null);
    const { themeName: themeName  } = (0, $53sus$lidofinancelidoui.useThemeToggle)();
    const openModal = (0, $53sus$react.useCallback)((wModal)=>{
        setActive(wModal);
    }, []);
    const closeModal = (0, $53sus$react.useCallback)(()=>{
        setActive(null);
    }, []);
    const value = (0, $53sus$react.useMemo)(()=>({
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
    return /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $45086f49b87e231e$export$ab57792b9b6974a6).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $a1b5280aa329b566$export$851b8e4aa786e6a1), {
                open: active === (0, $724a2b6c20e6b206$export$abb12153ded04b4d).wallet,
                ...common
            }),
            /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$reefknotconnectwalletmodal.WalletsModalForEth), {
                open: active === (0, $724a2b6c20e6b206$export$abb12153ded04b4d).connect,
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
$7116f5af98f0c5bd$export$20f61e42ab13a53f.displayName = "ProviderWalletModal";



var $f701e6fbd71da626$exports = {};

$parcel$export($f701e6fbd71da626$exports, "WALLET_IDS", function () { return $f701e6fbd71da626$export$fc3e274055426b5; });
const $f701e6fbd71da626$export$fc3e274055426b5 = {
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


var $74a600b2737e9d2e$exports = {};

$parcel$export($74a600b2737e9d2e$exports, "useModal", function () { return $74a600b2737e9d2e$export$33ffd74ebf07f060; });


const $74a600b2737e9d2e$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $53sus$react.useContext)((0, $45086f49b87e231e$export$ab57792b9b6974a6));
    const openModal = (0, $53sus$react.useCallback)(()=>{
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


$parcel$exportWildcard(module.exports, $a1b5280aa329b566$exports);
$parcel$exportWildcard(module.exports, $7116f5af98f0c5bd$exports);
$parcel$exportWildcard(module.exports, $724a2b6c20e6b206$exports);
$parcel$exportWildcard(module.exports, $f701e6fbd71da626$exports);
$parcel$exportWildcard(module.exports, $74a600b2737e9d2e$exports);


//# sourceMappingURL=index.cjs.map
