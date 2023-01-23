import { serverLogger } from './serverLogger';

type FetchWithFallbacks = (
  inputs: RequestInfo[],
  init?: RequestInit | undefined,
) => Promise<Response>;

export const fetchWithFallbacks: FetchWithFallbacks = async (inputs, init) => {
  const [input, ...restInputs] = inputs;

  let hostname;
  try {
    const url = new URL(input as string);
    hostname = url.hostname;

    serverLogger.debug('Sending request to ' + hostname, init);
    // TODO: use metric rpcMetricsFactory().rpcResponseTime
    // const end = rpcResponse.labels(hostname).startTimer();
    const response = await fetch(input, init);
    // end();

    if (response.ok) {
      serverLogger.debug(`Request to ${hostname} successful`, init);
      return response;
    }

    throw new Error('[fetchWithFallbacks] Response not ok');
  } catch (error) {
    if (!restInputs.length) {
      serverLogger.error(`All requests failed`, init);
      throw error;
    }
    return fetchWithFallbacks(restInputs, init);
  }
};
