import {jsxs as $gv0PY$jsxs, jsx as $gv0PY$jsx} from "react/jsx-runtime";
import "react";
import {ProviderWeb3 as $gv0PY$ProviderWeb3} from "reef-knot/web3-react";
import {CookieThemeProvider as $gv0PY$CookieThemeProvider, CookiesTooltip as $gv0PY$CookiesTooltip, ToastContainer as $gv0PY$ToastContainer} from "@lidofinance/lido-ui";
import {Header as $gv0PY$Header, Main as $gv0PY$Main, Footer as $gv0PY$Footer} from "@lidofinance/next-widget-layout";
import {ProviderWalletModal as $gv0PY$ProviderWalletModal} from "@lidofinance/eth-ui-wallet-modal";
import {getConnectors as $gv0PY$getConnectors} from "reef-knot/core-react";
import {configureChains as $gv0PY$configureChains, createClient as $gv0PY$createClient, WagmiConfig as $gv0PY$WagmiConfig} from "wagmi";
import * as $gv0PY$wagmichains from "wagmi/chains";
import {jsonRpcProvider as $gv0PY$jsonRpcProvider} from "wagmi/providers/jsonRpc";

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






var $38ddeda052689a93$exports = {};
var $a457050fc3bf712c$exports = {};

$parcel$export($a457050fc3bf712c$exports, "AppWagmiConfig", function () { return $a457050fc3bf712c$export$92ad1c9857b6c1c8; });





const $a457050fc3bf712c$export$92ad1c9857b6c1c8 = (props)=>{
    const wagmiChainsArray = Object.values($gv0PY$wagmichains);
    const supportedChains = wagmiChainsArray.filter((chain)=>props.supportedChains.includes(chain.id) || chain.id === 80001);
    const defaultChain = wagmiChainsArray.find((chain)=>chain.id === props.defaultChain);
    const { chains: chains , provider: provider , webSocketProvider: webSocketProvider  } = (0, $gv0PY$configureChains)(supportedChains, [
        (0, $gv0PY$jsonRpcProvider)({
            rpc: (chain)=>({
                    http: props.getBackendRPCPath(chain.id)
                })
        })
    ]);
    const connectors = (0, $gv0PY$getConnectors)({
        chains: chains,
        defaultChain: defaultChain,
        rpc: props.backendRPC,
        walletconnectProjectId: props.walletconnectProjectId
    });
    const client = (0, $gv0PY$createClient)({
        connectors: connectors,
        autoConnect: true,
        provider: provider,
        webSocketProvider: webSocketProvider
    });
    return /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$WagmiConfig), {
        client: client,
        children: props.children
    });
};


$parcel$exportWildcard($38ddeda052689a93$exports, $a457050fc3bf712c$exports);



const $65c37c265eb37c26$export$8e0cdabd0fe32f2d = (props)=>/*#__PURE__*/ (0, $gv0PY$jsxs)((0, $gv0PY$CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$Header), {
                headerActions: props?.headerActions,
                children: props.navigation
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$Main), {
                children: props.children
            }),
            /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$Footer), {}),
            !!props.disableCookiesTooltip && /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$CookiesTooltip), {}),
            !!props.disableToasts && /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$ToastContainer), {})
        ]
    });
const $65c37c265eb37c26$export$baada3ff66be5e09 = (props)=>/*#__PURE__*/ (0, $gv0PY$jsx)((0, $a457050fc3bf712c$export$92ad1c9857b6c1c8), {
        ...props.wagmi,
        children: /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$ProviderWeb3), {
            ...props.providerWeb3,
            children: /*#__PURE__*/ (0, $gv0PY$jsx)((0, $gv0PY$ProviderWalletModal), {
                ...props.reefKnot,
                children: /*#__PURE__*/ (0, $gv0PY$jsx)($65c37c265eb37c26$export$8e0cdabd0fe32f2d, {
                    navigation: props.navigation,
                    headerActions: props?.headerActions,
                    navigationLinks: props?.navigationLinks,
                    disableCookiesTooltip: props?.disableCookiesTooltip,
                    disableToasts: props?.disableToasts,
                    children: props.children
                })
            })
        })
    });


export {$65c37c265eb37c26$export$8e0cdabd0fe32f2d as WidgetApp, $65c37c265eb37c26$export$baada3ff66be5e09 as EVMWidgetApp, $a457050fc3bf712c$export$92ad1c9857b6c1c8 as AppWagmiConfig};
//# sourceMappingURL=index.js.map
