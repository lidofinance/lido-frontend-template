import { MatomoEventType } from '@lidofinance/analytics-matomo';

import { MATOMO_EVENT_CATEGORY, getMatomoEventNameWithPrefix } from './matomo';

export const enum MATOMO_CLICK_EVENTS_TYPES {
  submitStake = 'submitStake',
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
  // PAY ATTENTION: Extra matomo events can be added here
};