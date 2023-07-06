import {jsxs as $ptTHO$jsxs, jsx as $ptTHO$jsx} from "react/jsx-runtime";
import "react";
import {ProviderWeb3 as $ptTHO$ProviderWeb3} from "reef-knot/web3-react";
import {CookieThemeProvider as $ptTHO$CookieThemeProvider, CookiesTooltip as $ptTHO$CookiesTooltip, ToastContainer as $ptTHO$ToastContainer} from "@lidofinance/lido-ui";
import {Header as $ptTHO$Header, Main as $ptTHO$Main, Footer as $ptTHO$Footer} from "@lidofinance/next-widget-layout";
import {ProviderWalletModal as $ptTHO$ProviderWalletModal} from "@lidofinance/eth-ui-wallet-modal";
import {getConnectors as $ptTHO$getConnectors} from "reef-knot/core-react";
import {configureChains as $ptTHO$configureChains, createClient as $ptTHO$createClient, WagmiConfig as $ptTHO$WagmiConfig} from "wagmi";
import * as $ptTHO$wagmichains from "wagmi/chains";
import {getStaticRpcBatchProvider as $ptTHO$getStaticRpcBatchProvider} from "@lido-sdk/providers";

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






var $9ec60bbf0f4d9b73$exports = {};
var $07114f6d4167d7ad$exports = {};

$parcel$export($07114f6d4167d7ad$exports, "AppWagmiConfig", function () { return $07114f6d4167d7ad$export$92ad1c9857b6c1c8; });





const $07114f6d4167d7ad$var$wagmiChainsArray = Object.values($ptTHO$wagmichains);
let $07114f6d4167d7ad$var$defaultChain;
let $07114f6d4167d7ad$var$jsonRcpBatchProvider;
let $07114f6d4167d7ad$var$supportedChains;
let $07114f6d4167d7ad$var$chains;
let $07114f6d4167d7ad$var$provider;
let $07114f6d4167d7ad$var$webSocketProvider;
let $07114f6d4167d7ad$var$connectors;
// Here report: https://github.com/wagmi-dev/wagmi/issues/1164
// Here fix https://github.com/wagmi-dev/wagmi/pull/1166
// But not working
let $07114f6d4167d7ad$var$client;
const $07114f6d4167d7ad$export$92ad1c9857b6c1c8 = (props)=>{
    if (!$07114f6d4167d7ad$var$supportedChains) $07114f6d4167d7ad$var$supportedChains = $07114f6d4167d7ad$var$wagmiChainsArray.filter((chain)=>props.supportedChains.includes(chain.id) || chain.id === 80001);
    if (!$07114f6d4167d7ad$var$defaultChain) $07114f6d4167d7ad$var$defaultChain = $07114f6d4167d7ad$var$wagmiChainsArray.find((chain)=>chain.id === props.defaultChain);
    if (!$07114f6d4167d7ad$var$jsonRcpBatchProvider) $07114f6d4167d7ad$var$jsonRcpBatchProvider = (chain)=>({
            provider: ()=>(0, $ptTHO$getStaticRpcBatchProvider)(chain.id, props.getBackendRPCPath(chain.id), undefined, 12000),
            chain: chain
        });
    if (!$07114f6d4167d7ad$var$chains || !$07114f6d4167d7ad$var$provider || !$07114f6d4167d7ad$var$webSocketProvider) {
        const providers = (0, $ptTHO$configureChains)($07114f6d4167d7ad$var$supportedChains, [
            $07114f6d4167d7ad$var$jsonRcpBatchProvider
        ]);
        $07114f6d4167d7ad$var$chains = providers.chains;
        $07114f6d4167d7ad$var$provider = providers.provider;
        $07114f6d4167d7ad$var$webSocketProvider = providers.webSocketProvider;
    }
    if (!$07114f6d4167d7ad$var$connectors) $07114f6d4167d7ad$var$connectors = (0, $ptTHO$getConnectors)({
        chains: $07114f6d4167d7ad$var$chains,
        defaultChain: $07114f6d4167d7ad$var$defaultChain,
        rpc: props.backendRPC,
        walletconnectProjectId: props.walletconnectProjectId
    });
    if (!$07114f6d4167d7ad$var$client) $07114f6d4167d7ad$var$client = (0, $ptTHO$createClient)({
        connectors: $07114f6d4167d7ad$var$connectors,
        autoConnect: true,
        provider: $07114f6d4167d7ad$var$provider,
        webSocketProvider: $07114f6d4167d7ad$var$webSocketProvider
    });
    return /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$WagmiConfig), {
        client: $07114f6d4167d7ad$var$client,
        children: props.children
    });
};


$parcel$exportWildcard($9ec60bbf0f4d9b73$exports, $07114f6d4167d7ad$exports);



const $67e331acd993794f$export$8e0cdabd0fe32f2d = (props)=>/*#__PURE__*/ (0, $ptTHO$jsxs)((0, $ptTHO$CookieThemeProvider), {
        children: [
            /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$Header), {
                headerActions: props?.headerActions,
                children: props.navigation
            }),
            /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$Main), {
                children: props.children
            }),
            /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$Footer), {}),
            !!props.disableCookiesTooltip && /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$CookiesTooltip), {}),
            !!props.disableToasts && /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$ToastContainer), {})
        ]
    });
const $67e331acd993794f$export$baada3ff66be5e09 = (props)=>/*#__PURE__*/ (0, $ptTHO$jsx)((0, $07114f6d4167d7ad$export$92ad1c9857b6c1c8), {
        ...props.wagmi,
        children: /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$ProviderWeb3), {
            ...props.providerWeb3,
            children: /*#__PURE__*/ (0, $ptTHO$jsx)((0, $ptTHO$ProviderWalletModal), {
                ...props.reefKnot,
                children: /*#__PURE__*/ (0, $ptTHO$jsx)($67e331acd993794f$export$8e0cdabd0fe32f2d, {
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


export {$67e331acd993794f$export$8e0cdabd0fe32f2d as WidgetApp, $67e331acd993794f$export$baada3ff66be5e09 as EVMWidgetApp, $07114f6d4167d7ad$export$92ad1c9857b6c1c8 as AppWagmiConfig};
//# sourceMappingURL=index.js.map
