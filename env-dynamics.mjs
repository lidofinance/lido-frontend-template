/**
 * Convert to bool:
 * - true to true
 * - 'true' to true
 * - 1 to true
 * - '1' to true
 * - another values to false
 * @returns boolean
 */
const toBoolean = (dataStr) => {
  return !!(dataStr?.toLowerCase?.() === 'true' || dataStr === true || Number.parseInt(dataStr, 10) === 1);
};

/** @type string */
export const matomoHost = process.env.MATOMO_HOST;

/**
 * PAY ATTENTION: Change the string to be relevant to your project.
 * For example:
 * - Ethereum_Staking_Widget
 * - Kusama_Stacking_Widget
 * */
/** @type string */
export const matomoEventCategory = 'Lido_Frontend_Template';

/**
 * PAY ATTENTION: Change, change the string to be relevant to your project.
 * For example:
 * - eth_widget_
 * - ksm_widget_
 * */
/** @type string */
export const matomoEventNamePrefix = 'template_widget_';

/**
 * PAY ATTENTION: Change the string to be relevant to your project.
 * For example:
 * - eth_stake_widget_ui_
 * - kusama_staking_widget_
 * */
/** @type string */
export const metricsPrefix = 'frontend_template_';

/** @type number */
export const defaultChain = parseInt(process.env.DEFAULT_CHAIN, 10) || 1;

/** @type number[] */
export const supportedChains = process.env?.SUPPORTED_CHAINS?.split(',').map(
  (chainId) => parseInt(chainId, 10),
) ?? [1, 4, 5];

/** @type string */
export const walletconnectProjectId = process.env.WALLETCONNECT_PROJECT_ID;

// Example!
/** @type boolean */
// export const enableQaHelpers = toBoolean(process.env.ENABLE_QA_HELPERS);
