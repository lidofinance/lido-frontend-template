var $5TZEi$reactjsxruntime = require("react/jsx-runtime");
var $5TZEi$react = require("react");
var $5TZEi$lidofinancelidoui = require("@lidofinance/lido-ui");
var $5TZEi$lidosdkreact = require("@lido-sdk/react");
var $5TZEi$reefknotweb3react = require("@reef-knot/web3-react");
var $5TZEi$styledcomponents = require("styled-components");
var $5TZEi$reefknotconnectwalletmodal = require("@reef-knot/connect-wallet-modal");

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

$parcel$export(module.exports, "WalletModal", function () { return $a6a668cfe7742d4e$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "ProviderWalletModal", function () { return $45f28562d815f378$export$2e2bcd8739ae039; });







let $63bfd6a069cba547$var$_ = (t)=>t, $63bfd6a069cba547$var$t, $63bfd6a069cba547$var$t1, $63bfd6a069cba547$var$t2, $63bfd6a069cba547$var$t3, $63bfd6a069cba547$var$t4, $63bfd6a069cba547$var$t5, $63bfd6a069cba547$var$t6;
const $63bfd6a069cba547$export$c3bfcbd57ff8aecd = (0, ($parcel$interopDefault($5TZEi$styledcomponents))).div($63bfd6a069cba547$var$t || ($63bfd6a069cba547$var$t = $63bfd6a069cba547$var$_`
  padding: ${0}px;
  background-color: var(--lido-color-background);
  border-radius: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.borderRadiusesMap.lg);
const $63bfd6a069cba547$export$3b0aee05d7b19bc7 = (0, ($parcel$interopDefault($5TZEi$styledcomponents))).div($63bfd6a069cba547$var$t1 || ($63bfd6a069cba547$var$t1 = $63bfd6a069cba547$var$_`
  display: flex;
  align-items: center;
`));
const $63bfd6a069cba547$export$930e21f104e8ee03 = (0, ($parcel$interopDefault($5TZEi$styledcomponents))).div($63bfd6a069cba547$var$t2 || ($63bfd6a069cba547$var$t2 = $63bfd6a069cba547$var$_`
  flex-grow: 1;
  margin: ${0}px 0;
  margin-right: auto;
  padding-right: ${0}px;

  font-size: ${0}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $63bfd6a069cba547$export$84f684574d655e13 = (0, ($parcel$interopDefault($5TZEi$styledcomponents)))((0, $5TZEi$lidofinancelidoui.Button))($63bfd6a069cba547$var$t3 || ($63bfd6a069cba547$var$t3 = $63bfd6a069cba547$var$_`
  flex-shrink: 0;
`));
const $63bfd6a069cba547$export$3d4a7344e33549e = (0, ($parcel$interopDefault($5TZEi$styledcomponents))).div($63bfd6a069cba547$var$t4 || ($63bfd6a069cba547$var$t4 = $63bfd6a069cba547$var$_`
  display: flex;
  align-items: center;
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.sm);
const $63bfd6a069cba547$export$73010e1a948c9e92 = (0, ($parcel$interopDefault($5TZEi$styledcomponents))).div($63bfd6a069cba547$var$t5 || ($63bfd6a069cba547$var$t5 = $63bfd6a069cba547$var$_`
  margin-left: ${0}px;

  font-size: ${0}px;
  font-weight: 800;
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.fontSizesMap.sm);
const $63bfd6a069cba547$export$abf0394beab7496c = (0, ($parcel$interopDefault($5TZEi$styledcomponents))).div($63bfd6a069cba547$var$t6 || ($63bfd6a069cba547$var$t6 = $63bfd6a069cba547$var$_`
  margin: 0 ${0}px;
  margin-top: ${0}px;

  button {
    margin-right: ${0}px;
    padding-left: ${0}px;
    padding-right: ${0}px;
  }
`), ({ theme: theme  })=>-theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $a6a668cfe7742d4e$var$WalletModal = (props)=>{
    const { onClose: onClose  } = props;
    const { account: account  } = (0, $5TZEi$lidosdkreact.useSDK)();
    const { providerName: providerName  } = (0, $5TZEi$reefknotweb3react.useConnectorInfo)();
    const { disconnect: disconnect  } = (0, $5TZEi$reefknotweb3react.useDisconnect)();
    const handleDisconnect = (0, $5TZEi$react.useCallback)(()=>{
        disconnect === null || disconnect === void 0 ? void 0 : disconnect();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        disconnect,
        onClose
    ]);
    // const handleCopy = useCopyToClipboard(account ?? '');
    const handleEtherscan = (0, $5TZEi$lidosdkreact.useEtherscanOpen)(account !== null && account !== void 0 ? account : "", "address");
    return /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $5TZEi$lidofinancelidoui.Modal), {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsxs)((0, $63bfd6a069cba547$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsxs)((0, $63bfd6a069cba547$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsxs)((0, $63bfd6a069cba547$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $63bfd6a069cba547$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsxs)((0, $63bfd6a069cba547$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $5TZEi$lidofinancelidoui.Identicon), {
                            address: account !== null && account !== void 0 ? account : ""
                        }),
                        /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $63bfd6a069cba547$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $5TZEi$lidofinancelidoui.Address), {
                                address: account !== null && account !== void 0 ? account : "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $63bfd6a069cba547$export$abf0394beab7496c), {
                    children: /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $5TZEi$lidofinancelidoui.ButtonIcon), {
                        onClick: handleEtherscan,
                        icon: /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $5TZEi$lidofinancelidoui.External), {}),
                        size: "xs",
                        variant: "ghost",
                        children: "View on Etherscan"
                    })
                })
            ]
        })
    });
};
var $a6a668cfe7742d4e$export$2e2bcd8739ae039 = $a6a668cfe7742d4e$var$WalletModal;







const $16ad3e87f9f13dbf$export$ab57792b9b6974a6 = (0, $5TZEi$react.createContext)({});


var $bb58e6223b32c86f$exports = {};

$parcel$export($bb58e6223b32c86f$exports, "WALLET_MODAL", function () { return $bb58e6223b32c86f$export$abb12153ded04b4d; });
let $bb58e6223b32c86f$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($bb58e6223b32c86f$export$abb12153ded04b4d || ($bb58e6223b32c86f$export$abb12153ded04b4d = {}));



const $45f28562d815f378$var$ProviderWalletModal = ({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
    const [active, setActive] = (0, $5TZEi$react.useState)(null);
    const { themeName: themeName  } = (0, $5TZEi$lidofinancelidoui.useThemeToggle)();
    const openModal = (0, $5TZEi$react.useCallback)((wModal)=>{
        setActive(wModal);
    }, []);
    const closeModal = (0, $5TZEi$react.useCallback)(()=>{
        setActive(null);
    }, []);
    const value = (0, $5TZEi$react.useMemo)(()=>({
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
    return /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsxs)((0, $16ad3e87f9f13dbf$export$ab57792b9b6974a6).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $a6a668cfe7742d4e$export$2e2bcd8739ae039), {
                open: active === (0, $bb58e6223b32c86f$export$abb12153ded04b4d).wallet,
                ...common
            }),
            /*#__PURE__*/ (0, $5TZEi$reactjsxruntime.jsx)((0, $5TZEi$reefknotconnectwalletmodal.WalletsModalForEth), {
                open: active === (0, $bb58e6223b32c86f$export$abb12153ded04b4d).connect,
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
var $45f28562d815f378$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $5TZEi$react.memo)($45f28562d815f378$var$ProviderWalletModal);



var $c05fb780b0ea1abd$exports = {};

$parcel$export($c05fb780b0ea1abd$exports, "WALLET_IDS", function () { return $c05fb780b0ea1abd$export$fc3e274055426b5; });
const $c05fb780b0ea1abd$export$fc3e274055426b5 = {
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


var $974289ed4718533f$exports = {};

$parcel$export($974289ed4718533f$exports, "useModal", function () { return $974289ed4718533f$export$33ffd74ebf07f060; });


const $974289ed4718533f$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $5TZEi$react.useContext)((0, $16ad3e87f9f13dbf$export$ab57792b9b6974a6));
    const openModal = (0, $5TZEi$react.useCallback)(()=>{
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


$parcel$exportWildcard(module.exports, $bb58e6223b32c86f$exports);
$parcel$exportWildcard(module.exports, $c05fb780b0ea1abd$exports);
$parcel$exportWildcard(module.exports, $974289ed4718533f$exports);


//# sourceMappingURL=index.cjs.map
