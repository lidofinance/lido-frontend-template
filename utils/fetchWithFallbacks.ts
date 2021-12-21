import clone from 'just-clone';
import { rpcResponse } from './metrics/rpcResponse';
import { serverLogger } from './serverLogger';

type FetchWithFallbacks = (
  inputs: RequestInfo[],
  init?: RequestInit | undefined,
) => Promise<Response>;

export const fetchWithFallbacks: FetchWithFallbacks = async (inputs, init) => {
  const [input, ...restInputs] = inputs;

  const info = typeof init === 'object' ? clone(init) : undefined;

  let hostname;
  try {
    const url = new URL(input as string);
    hostname = url.hostname;

    serverLogger.info('Sending request to ' + hostname, info);
    const end = rpcResponse.labels(hostname).startTimer();
    const response = await fetch(input, init);
    end();

    if (response.ok) {
      serverLogger.info(`Request to ${hostname} successful`, info);
      return response;
    }

    throw new Error('[fetchWithFallbacks] Response not ok');
  } catch (error) {
    if (!restInputs.length) {
      serverLogger.info(`Request to ${hostname} failed`, info);
      throw error;
    }
    return fetchWithFallbacks(restInputs, init);
  }
};
