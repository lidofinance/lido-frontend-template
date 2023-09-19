import { MatomoEventType } from '@lidofinance/analytics-matomo';

import { default as dynamics } from './dynamics';
import { getMatomoEventNameWithPrefix } from './matomo';

const MATOMO_EVENT_CATEGORY = dynamics.matomoEventCategory;

export const enum MATOMO_CLICK_EVENTS_TYPES {
  submitStake = 'submitStake',
  faqLidoLandingLink = 'faqLidoLandingLink',
  faqExamplePageLocalLink = 'faqExamplePageLocalLink',
  // PAY ATTENTION: Extra matomo events can be added here
}

export const MATOMO_CLICK_EVENTS: Record<
  MATOMO_CLICK_EVENTS_TYPES,
  MatomoEventType
> = {
  [MATOMO_CLICK_EVENTS_TYPES.submitStake]: [
    MATOMO_EVENT_CATEGORY,
    'Push staking submit button',
    getMatomoEventNameWithPrefix('stake'),
  ],
  [MATOMO_CLICK_EVENTS_TYPES.faqLidoLandingLink]: [
    MATOMO_EVENT_CATEGORY,
    'Push «Lido landing link» in FAQ',
    getMatomoEventNameWithPrefix('faq_lidoLandingLink'),
  ],
  [MATOMO_CLICK_EVENTS_TYPES.faqExamplePageLocalLink]: [
    MATOMO_EVENT_CATEGORY,
    'Push «Example page local link» in FAQ',
    getMatomoEventNameWithPrefix('faq_examplePageLocalLink'),
  ],
  // PAY ATTENTION: Extra matomo events can be added here
};
