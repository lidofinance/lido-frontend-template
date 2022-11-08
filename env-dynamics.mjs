/** @type string */
export const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
/** @type number */
export const defaultChain = parseInt(process.env.DEFAULT_CHAIN, 10) || 1;
/** @type number[] */
export const supportedChains = process.env?.SUPPORTED_CHAINS?.split(',').map(
  (chainId) => parseInt(chainId, 10),
) ?? [1, 4, 5];
/** @type boolean */
export const enableQaHelpers = !!process.env.ENABLE_QA_HELPERS;
