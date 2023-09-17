import { MATOMO_CLICK_EVENTS } from './matomoClickEvents';

export const matomoEventMap = new Map();

matomoEventMap.set('https://lido.fi/', MATOMO_CLICK_EVENTS.faqLidoLandingLink);
matomoEventMap.set('/example', MATOMO_CLICK_EVENTS.faqExamplePageLocalLink);
