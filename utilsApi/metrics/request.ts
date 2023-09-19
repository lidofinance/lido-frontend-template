import { Counter, Histogram } from 'prom-client';
import { registry } from './init';

import { dynamics, METRIC_NAMES } from 'config';

enum RequestsTimingEnum {
  Incoming = 'Incoming',
  OutgoingCompleted = 'OutgoingCompleted',
}

enum RequestsCounterEnum {
  Incoming = 'Incoming',
  OutgoingFailed = 'OutgoingFailed',
  OutgoingSent = 'OutgoingSent',
}

const RequestsTimingHelpEnum = {
  [RequestsTimingEnum.Incoming]: 'Incoming requests to our API',
  [RequestsTimingEnum.OutgoingCompleted]: 'Completed outgoing requests',
};

const RequestsCounterHelpEnum = {
  [RequestsCounterEnum.Incoming]: 'Total number of requests to our API',
  [RequestsCounterEnum.OutgoingFailed]:
    'Total number of failed outgoing requests',
  [RequestsCounterEnum.OutgoingSent]: 'Total number of sent outgoing requests',
};

const requestsTimingInit = (postfix: RequestsTimingEnum) => {
  const histogramName =
    dynamics.metricsPrefix +
    METRIC_NAMES.API_RESPONSE +
    postfix.toLocaleLowerCase();

  return new Histogram({
    name: histogramName,
    help: RequestsTimingHelpEnum[postfix],
    labelNames: ['hostname', 'route', 'entity', 'status'],
    buckets: [0.1, 0.2, 0.3, 0.6, 1, 1.5, 2, 5],
    registers: [registry],
  });
};

const requestsCounterInit = (postfix: RequestsCounterEnum) => {
  const counterName =
    dynamics.metricsPrefix +
    METRIC_NAMES.REQUESTS_TOTAL +
    postfix.toLocaleLowerCase();

  return new Counter({
    name: counterName,
    help: RequestsCounterHelpEnum[postfix],
    labelNames: ['route', 'entity', 'hostname', 'reason'],
    registers: [registry],
  });
};

export const requestsTimingIncoming = requestsTimingInit(
  RequestsTimingEnum.Incoming,
);
export const requestsTimingOutgoingCompleted = requestsTimingInit(
  RequestsTimingEnum.OutgoingCompleted,
);

export const requestsCounter = requestsCounterInit(
  RequestsCounterEnum.Incoming,
);
export const requestsCounterOutgoingFailed = requestsCounterInit(
  RequestsCounterEnum.OutgoingFailed,
);
export const requestsCounterOutgoingSent = requestsCounterInit(
  RequestsCounterEnum.OutgoingSent,
);
