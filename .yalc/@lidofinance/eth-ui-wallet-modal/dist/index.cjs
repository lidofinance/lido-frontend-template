var $53sus$reactjsxruntime = require("react/jsx-runtime");
var $53sus$react = require("react");
var $53sus$lidofinancelidoui = require("@lidofinance/lido-ui");
var $53sus$lidofinanceuiprimitives = require("@lidofinance/ui-primitives");
var $53sus$lidosdkreact = require("@lido-sdk/react");
var $53sus$reefknotweb3react = require("@reef-knot/web3-react");
var $53sus$styledcomponents = require("styled-components");
var $53sus$lidofinanceethuiprimitives = require("@lidofinance/eth-ui-primitives");
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
var $cf93e340d197c9ae$exports = {};
var $a6aafa012cd206ea$exports = {};
var $f215aa7540648009$exports = {};

$parcel$export($f215aa7540648009$exports, "ConnectedWalletInfoModal", function () { return $f215aa7540648009$export$cb2837f914c2c08c; });








let $318766b0b8f4d305$var$_ = (t)=>t, $318766b0b8f4d305$var$t, $318766b0b8f4d305$var$t1, $318766b0b8f4d305$var$t2, $318766b0b8f4d305$var$t3, $318766b0b8f4d305$var$t4, $318766b0b8f4d305$var$t5, $318766b0b8f4d305$var$t6;
const $318766b0b8f4d305$export$c3bfcbd57ff8aecd = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($318766b0b8f4d305$var$t || ($318766b0b8f4d305$var$t = $318766b0b8f4d305$var$_`
  padding: ${0}px;
  background-color: var(--lido-color-background);
  border-radius: ${0}px;
`), ({ theme: theme  })=>theme.spaceMap.lg, ({ theme: theme  })=>theme.borderRadiusesMap.lg);
const $318766b0b8f4d305$export$3b0aee05d7b19bc7 = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($318766b0b8f4d305$var$t1 || ($318766b0b8f4d305$var$t1 = $318766b0b8f4d305$var$_`
  display: flex;
  align-items: center;
`));
const $318766b0b8f4d305$export$930e21f104e8ee03 = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($318766b0b8f4d305$var$t2 || ($318766b0b8f4d305$var$t2 = $318766b0b8f4d305$var$_`
  flex-grow: 1;
  margin: ${0}px 0;
  margin-right: auto;
  padding-right: ${0}px;

  font-size: ${0}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.fontSizesMap.xxs);
const $318766b0b8f4d305$export$84f684574d655e13 = (0, ($parcel$interopDefault($53sus$styledcomponents)))((0, $53sus$lidofinancelidoui.Button))($318766b0b8f4d305$var$t3 || ($318766b0b8f4d305$var$t3 = $318766b0b8f4d305$var$_`
  flex-shrink: 0;
`));
const $318766b0b8f4d305$export$3d4a7344e33549e = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($318766b0b8f4d305$var$t4 || ($318766b0b8f4d305$var$t4 = $318766b0b8f4d305$var$_`
  display: flex;
  align-items: center;
  margin: ${0}px 0;
`), ({ theme: theme  })=>theme.spaceMap.sm);
const $318766b0b8f4d305$export$73010e1a948c9e92 = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($318766b0b8f4d305$var$t5 || ($318766b0b8f4d305$var$t5 = $318766b0b8f4d305$var$_`
  margin-left: ${0}px;

  font-size: ${0}px;
  font-weight: 800;
  line-height: 1.2em;
`), ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.fontSizesMap.sm);
const $318766b0b8f4d305$export$abf0394beab7496c = (0, ($parcel$interopDefault($53sus$styledcomponents))).div($318766b0b8f4d305$var$t6 || ($318766b0b8f4d305$var$t6 = $318766b0b8f4d305$var$_`
  margin: 0 ${0}px;
  margin-top: ${0}px;

  button {
    margin-right: ${0}px;
    padding-left: ${0}px;
    padding-right: ${0}px;
  }
`), ({ theme: theme  })=>-theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.md, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm, ({ theme: theme  })=>theme.spaceMap.sm);


const $f215aa7540648009$export$cb2837f914c2c08c = (props)=>{
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
        children: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $318766b0b8f4d305$export$c3bfcbd57ff8aecd), {
            children: [
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $318766b0b8f4d305$export$3b0aee05d7b19bc7), {
                    children: [
                        providerName && /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $318766b0b8f4d305$export$930e21f104e8ee03), {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $318766b0b8f4d305$export$84f684574d655e13), {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $318766b0b8f4d305$export$3d4a7344e33549e), {
                    children: [
                        /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.Identicon), {
                            address: account !== null && account !== void 0 ? account : ""
                        }),
                        /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $318766b0b8f4d305$export$73010e1a948c9e92), {
                            children: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.Address), {
                                address: account !== null && account !== void 0 ? account : "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $318766b0b8f4d305$export$abf0394beab7496c), {
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


$parcel$exportWildcard($a6aafa012cd206ea$exports, $f215aa7540648009$exports);


var $01a017be51a2078a$exports = {};
var $8604b09e4a8b0413$exports = {};

$parcel$export($8604b09e4a8b0413$exports, "WalletButton", function () { return $8604b09e4a8b0413$export$eab4424f030fcb21; });




var $74a600b2737e9d2e$exports = {};

$parcel$export($74a600b2737e9d2e$exports, "useModal", function () { return $74a600b2737e9d2e$export$33ffd74ebf07f060; });


const $45086f49b87e231e$export$8fa8c0fc3ea86e87 = (0, $53sus$react.createContext)({});


const $74a600b2737e9d2e$export$33ffd74ebf07f060 = (wModal)=>{
    const methods = (0, $53sus$react.useContext)((0, $45086f49b87e231e$export$8fa8c0fc3ea86e87));
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


var $724a2b6c20e6b206$exports = {};

$parcel$export($724a2b6c20e6b206$exports, "WALLET_MODAL", function () { return $724a2b6c20e6b206$export$abb12153ded04b4d; });
let $724a2b6c20e6b206$export$abb12153ded04b4d;
(function(WALLET_MODAL) {
    WALLET_MODAL[WALLET_MODAL["connect"] = 0] = "connect";
    WALLET_MODAL[WALLET_MODAL["wallet"] = 1] = "wallet";
})($724a2b6c20e6b206$export$abb12153ded04b4d || ($724a2b6c20e6b206$export$abb12153ded04b4d = {}));




let $0bbbc23952131f32$var$_ = (t)=>t, $0bbbc23952131f32$var$t, $0bbbc23952131f32$var$t1, $0bbbc23952131f32$var$t2, $0bbbc23952131f32$var$t3;
const $0bbbc23952131f32$export$b4b09ec636b8dc92 = (0, ($parcel$interopDefault($53sus$styledcomponents)))((0, $53sus$lidofinancelidoui.Button))($0bbbc23952131f32$var$t || ($0bbbc23952131f32$var$t = $0bbbc23952131f32$var$_`
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`));
const $0bbbc23952131f32$export$1ba39b57e9c6b91f = (0, ($parcel$interopDefault($53sus$styledcomponents))).span($0bbbc23952131f32$var$t1 || ($0bbbc23952131f32$var$t1 = $0bbbc23952131f32$var$_`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -10px -18px;
`));
const $0bbbc23952131f32$export$8d4cce15cb50cfeb = (0, ($parcel$interopDefault($53sus$styledcomponents))).span($0bbbc23952131f32$var$t2 || ($0bbbc23952131f32$var$t2 = $0bbbc23952131f32$var$_`
  margin-right: 12px;
  margin-left: 4px;
  font-size: ${0}px;

  ${0} {
    display: none;
  }
`), ({ theme: theme  })=>theme.fontSizesMap.xs, ({ theme: theme  })=>theme.mediaQueries.md);
const $0bbbc23952131f32$export$39c6911ce38c2d39 = (0, ($parcel$interopDefault($53sus$styledcomponents)))((0, $53sus$lidofinancelidoui.InlineLoader))($0bbbc23952131f32$var$t3 || ($0bbbc23952131f32$var$t3 = $0bbbc23952131f32$var$_`
  width: 60px;
`));


const $8604b09e4a8b0413$export$eab4424f030fcb21 = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $74a600b2737e9d2e$export$33ffd74ebf07f060)((0, $724a2b6c20e6b206$export$abb12153ded04b4d).wallet);
    const { account: account  } = (0, $53sus$lidosdkreact.useSDK)();
    const { data: balance , initialLoading: initialLoading  } = (0, $53sus$lidosdkreact.useEthereumBalance)();
    return /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $0bbbc23952131f32$export$b4b09ec636b8dc92), {
        size: "sm",
        variant: "text",
        color: "secondary",
        onClick: openModal,
        ...rest,
        children: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $0bbbc23952131f32$export$1ba39b57e9c6b91f), {
            children: [
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $0bbbc23952131f32$export$8d4cce15cb50cfeb), {
                    children: initialLoading ? /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $0bbbc23952131f32$export$39c6911ce38c2d39), {}) : /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinanceethuiprimitives.FormatToken), {
                        amount: balance,
                        symbol: "ETH"
                    })
                }),
                /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.AddressBadge), {
                    address: account !== null && account !== void 0 ? account : ""
                })
            ]
        })
    });
};


$parcel$exportWildcard($01a017be51a2078a$exports, $8604b09e4a8b0413$exports);


var $a818770a40094664$exports = {};
var $120319f9dacbe38e$exports = {};

$parcel$export($120319f9dacbe38e$exports, "WalletConnectButton", function () { return $120319f9dacbe38e$export$2a466333ed714424; });




const $120319f9dacbe38e$export$2a466333ed714424 = (props)=>{
    const { onClick: onClick , ...rest } = props;
    const { openModal: openModal  } = (0, $74a600b2737e9d2e$export$33ffd74ebf07f060)((0, $724a2b6c20e6b206$export$abb12153ded04b4d).connect);
    return /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.Button), {
        onClick: openModal,
        ...rest,
        children: "Connect wallet"
    });
};


$parcel$exportWildcard($a818770a40094664$exports, $120319f9dacbe38e$exports);


$parcel$exportWildcard($cf93e340d197c9ae$exports, $a6aafa012cd206ea$exports);
$parcel$exportWildcard($cf93e340d197c9ae$exports, $01a017be51a2078a$exports);
$parcel$exportWildcard($cf93e340d197c9ae$exports, $a818770a40094664$exports);


var $7e65aae0f2757818$exports = {};

$parcel$export($7e65aae0f2757818$exports, "ProviderWalletModal", function () { return $7e65aae0f2757818$export$20f61e42ab13a53f; });







const $7e65aae0f2757818$var$_ShadowProviderWalletModal = ({ children: children , walletsMetrics: walletsMetrics , hiddenWallets: hiddenWallets  })=>{
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
    return /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsxs)((0, $45086f49b87e231e$export$8fa8c0fc3ea86e87).Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $f215aa7540648009$export$cb2837f914c2c08c), {
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
};
const $7e65aae0f2757818$export$20f61e42ab13a53f = /*#__PURE__*/ (0, $53sus$react.memo)((props)=>{
    return /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)((0, $53sus$lidofinancelidoui.CookieThemeProvider), {
        children: /*#__PURE__*/ (0, $53sus$reactjsxruntime.jsx)($7e65aae0f2757818$var$_ShadowProviderWalletModal, {
            ...props
        })
    });
});
$7e65aae0f2757818$export$20f61e42ab13a53f.displayName = "ProviderWalletModal";



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



$parcel$exportWildcard(module.exports, $cf93e340d197c9ae$exports);
$parcel$exportWildcard(module.exports, $7e65aae0f2757818$exports);
$parcel$exportWildcard(module.exports, $724a2b6c20e6b206$exports);
$parcel$exportWildcard(module.exports, $f701e6fbd71da626$exports);
$parcel$exportWildcard(module.exports, $74a600b2737e9d2e$exports);


//# sourceMappingURL=index.cjs.map
