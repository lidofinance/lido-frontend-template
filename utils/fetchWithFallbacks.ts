import { rpcResponse } from './metrics/rpcResponse';

type FetchWithFallbacks = (
  inputs: RequestInfo[],
  init?: RequestInit | undefined,
) => Promise<Response>;

export const fetchWithFallbacks: FetchWithFallbacks = async (inputs, init) => {
  const [input, ...restInputs] = inputs;

  try {
    const url = new URL(input as string);
    console.log(url.hostname);
    const end = rpcResponse.labels(url.hostname).startTimer();
    const response = await fetch(input, init);
    end();

    if (response.ok) {
      return response;
    }

    throw new Error('[fetchWithFallbacks] Response not ok');
  } catch (error) {
    if (!restInputs.length) throw error;
    return fetchWithFallbacks(restInputs, init);
  }
};
