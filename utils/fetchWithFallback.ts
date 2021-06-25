type FetchWithFallback = (
  inputs: RequestInfo[],
  init?: RequestInit | undefined,
) => Promise<Response>;

export const fetchWithFallback: FetchWithFallback = async (inputs, init) => {
  const [input, ...restInputs] = inputs;

  try {
    return await fetch(input, init);
  } catch (error) {
    if (!restInputs.length) throw error;
    return await fetchWithFallback(restInputs, init);
  }
};
