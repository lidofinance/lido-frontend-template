// TODO: move to next.config?
// PAY ATTENTION: Change the string to be relevant to your project.
// For example:
// - Ethereum_Staking_Widget
// - Kusama_Stacking_Widget
export const MATOMO_EVENT_CATEGORY = 'Lido_Frontend_Template';

// PAY ATTENTION: Change, change the string to be relevant to your project.
// For example:
// - eth_widget_
// - ksm_widget_
export const getMatomoEventNameWithPrefix = (name: string) =>
  `template_widget_${name}`;
