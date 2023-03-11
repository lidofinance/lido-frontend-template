var $5hXrG$reactjsxruntime = require("react/jsx-runtime");
var $5hXrG$react = require("react");
var $5hXrG$lidofinancelidoui = require("@lidofinance/lido-ui");
var $5hXrG$lidosdkreact = require("@lido-sdk/react");
var $5hXrG$reefknotweb3react = require("@reef-knot/web3-react");
var $5hXrG$styledcomponents = require("styled-components");
var $5hXrG$reefknotconnectwalletmodal = require("@reef-knot/connect-wallet-modal");

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
var $1827ec952297a3a9$exports = {};

$parcel$export($1827ec952297a3a9$exports, "WalletModal", function () { return $1827ec952297a3a9$export$851b8e4aa786e6a1; });







let $ca8f9fd48e7c4f08$var$_ = (t)=>t, $ca8f9fd48e7c4f08$var$t, $ca8f9fd48e7c4f08$var$t1, $ca8f9fd48e7c4f08$var$t2, $ca8f9fd48e7c4f08$var$t3, $ca8f9fd48e7c4f08$var$t4, $ca8f9fd48e7c4f08$var$t5, $ca8f9fd48e7c4f08$var$t6;
const $ca8f9fd48e7c4f08$export$c3bfcbd57ff8aecd = (0, ($parcel$interopDefault($5hXrG$styledcomponents))).div($ca8f9fd48e7c4f08$var$t || ($ca8f9fd48e7c4f08$var$t = $ca8f9fd48e7c4f08$var$_`
  padding: ${0}px;
  background-color: var(--lido-color-background);
  border-radius: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.borderRadiusesMap.lg);
const $ca8f9fd48e7c4f08$export$3b0aee05d7b19bc7 = (0, ($parcel$interopDefault($5hXrG$styledcomponents))).div($ca8f9fd48e7c4f08$var$t1 || ($ca8f9fd48e7c4f08$var$t1 = $ca8f9fd48e7c4f08$var$_`
  display: flex;
  align-items: center;
`));
const $ca8f9fd48e7c4f08$export$930e21f104e8ee03 = (0, ($parcel$interopDefault($5hXrG$styledcomponents))).div($ca8f9fd48e7c4f08$var$t2 || ($ca8f9fd48e7c4f08$var$t2 = $ca8f9fd48e7c4f08$var$_`
  flex-grow: 1;
  margin: ${0}px 0;
  margin-right: auto;
  padding-right: ${0}px;

  font-size: ${0}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $ca8f9fd48e7c4f08$export$84f684574d655e13 = (0, ($parcel$interopDefault($5hXrG$styledcomponents)))((0, $5hXrG$lidofinancelidoui.Button))($ca8f9fd48e7c4f08$var$t3 || ($ca8f9fd48e7c4f08$var$t3 = $ca8f9fd48e7c4f08$var$_`
  flex-shrink: 0;
`));
const $ca8f9fd48e7c4f08$export$3d4a7344e33549e = (0, ($parcel$interopDefault($5hXrG$styledcomponents))).div($ca8f9fd48e7c4f08$var$t4 || ($ca8f9fd48e7c4f08$var$t4 = $ca8f9fd48e7c4f08$var$_`
  display: flex;
  align-items: center;
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.sm);
const $ca8f9fd48e7c4f08$export$73010e1a948c9e92 = (0, ($parcel$interopDefault($5hXrG$styledcomponents))).div($ca8f9fd48e7c4f08$var$t5 || ($ca8f9fd48e7c4f08$var$t5 = $ca8f9fd48e7c4f08$var$_`
  margin-left: ${0}px;

  font-size: ${0}px;
  font-weight: 800;
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.fontSizesMap.sm);
const $ca8f9fd48e7c4f08$export$abf0394beab7496c = (0, ($parcel$interopDefault($5hXrG$styledcomponents))).div($ca8f9fd48e7c4f08$var$t6 || ($ca8f9fd48e7c4f08$var$t6 = $ca8f9fd48e7c4f08$var$_`
  margin: 0 ${0}px;
  margin-top: ${0}px;

  button {
    margin-right: ${0}px;
    padding-left: ${0}px;
    padding-right: ${0}px;
  }
`), ({ theme: theme  })=>-theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $1827ec952297a3a9$export$851b8e4aa786e6a1 = (props)=>{
    const { onClose: onClose  } = props;
    const { account: account  } = (0, $5hXrG$lidosdkreact.useSDK)();
    const { providerName: providerName  } = (0, $5hXrG$reefknotweb3react.useConnectorInfo)();
    const { disconnect: disconnect  } = (0, $5hXrG$reefknotweb3react.useDisconnect)();
    const handleDisconnect = (0, $5hXrG$react.useCallback)(()=>{
        disconnect === null || disconnect === void 0 ? void 0 : disconnect();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        disconnect,
        onClose
    ]);
    // const handleCopy = useCopyToClipboard(account ?? '');
    const handleEtherscan = (0, $5hXrG$lidosdkreact.useEtherscanOpen)(account !== null && account !== void 0 ? account : "", "address");
    return /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $5hXrG$lidofinancelidoui.Modal), {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsxs)((0, $ca8f9fd48e7c4f08$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsxs)((0, $ca8f9fd48e7c4f08$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsxs)((0, $ca8f9fd48e7c4f08$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $ca8f9fd48e7c4f08$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsxs)((0, $ca8f9fd48e7c4f08$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $5hXrG$lidofinancelidoui.Identicon), {
                            address: account !== null && account !== void 0 ? account : ""
                        }),
                        /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $ca8f9fd48e7c4f08$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $5hXrG$lidofinancelidoui.Address), {
                                address: account !== null && account !== void 0 ? account : "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $ca8f9fd48e7c4f08$export$abf0394beab7496c), {
                    children: /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $5hXrG$lidofinancelidoui.ButtonIcon), {
                        onClick: handleEtherscan,
                        icon: /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $5hXrG$lidofinancelidoui.External), {}),
                        size: "xs",
                        variant: "ghost",
                        children: "View on Etherscan"
                    })
                })
            ]
        })
    });
};


var $e8cb81cd64e8c335$exports = {};

$parcel$export($e8cb81cd64e8c335$exports, "ProviderWalletModal", function () { return $e8cb81cd64e8c335$export$20f61e42ab13a53f; });





const $f2a6f8f90d1d48e3$export$ab57792b9b6974a6 = (0, $5hXrG$react.createContext)({});


var $21efebc094fdba90$exports = {};

$parcel$export($21efebc094fdba90$exports, "WALLET_MODAL", function () { return $21efebc094fdba90$export$abb12153ded04b4d; });
let $21efebc094fdba90$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($21efebc094fdba90$export$abb12153ded04b4d || ($21efebc094fdba90$export$abb12153ded04b4d = {}));



const $e8cb81cd64e8c335$export$20f61e42ab13a53f = /*#__PURE__*/ (0, $5hXrG$react.memo)(({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
    const [active, setActive] = (0, $5hXrG$react.useState)(null);
    const { themeName: themeName  } = (0, $5hXrG$lidofinancelidoui.useThemeToggle)();
    const openModal = (0, $5hXrG$react.useCallback)((wModal)=>{
        setActive(wModal);
    }, []);
    const closeModal = (0, $5hXrG$react.useCallback)(()=>{
        setActive(null);
    }, []);
    const value = (0, $5hXrG$react.useMemo)(()=>({
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
    return /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsxs)((0, $f2a6f8f90d1d48e3$export$ab57792b9b6974a6).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $1827ec952297a3a9$export$851b8e4aa786e6a1), {
                open: active === (0, $21efebc094fdba90$export$abb12153ded04b4d).wallet,
                ...common
            }),
            /*#__PURE__*/ (0, $5hXrG$reactjsxruntime.jsx)((0, $5hXrG$reefknotconnectwalletmodal.WalletsModalForEth), {
                open: active === (0, $21efebc094fdba90$export$abb12153ded04b4d).connect,
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
$e8cb81cd64e8c335$export$20f61e42ab13a53f.displayName = "ProviderWalletModal";



var $c62b79982ad86825$exports = {};

$parcel$export($c62b79982ad86825$exports, "WALLET_IDS", function () { return $c62b79982ad86825$export$fc3e274055426b5; });
const $c62b79982ad86825$export$fc3e274055426b5 = {
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


var $3a5d30bf142aeca9$exports = {};

$parcel$export($3a5d30bf142aeca9$exports, "useModal", function () { return $3a5d30bf142aeca9$export$33ffd74ebf07f060; });


const $3a5d30bf142aeca9$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $5hXrG$react.useContext)((0, $f2a6f8f90d1d48e3$export$ab57792b9b6974a6));
    const openModal = (0, $5hXrG$react.useCallback)(()=>{
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


$parcel$exportWildcard(module.exports, $1827ec952297a3a9$exports);
$parcel$exportWildcard(module.exports, $e8cb81cd64e8c335$exports);
$parcel$exportWildcard(module.exports, $21efebc094fdba90$exports);
$parcel$exportWildcard(module.exports, $c62b79982ad86825$exports);
$parcel$exportWildcard(module.exports, $3a5d30bf142aeca9$exports);


//# sourceMappingURL=index.cjs.map
