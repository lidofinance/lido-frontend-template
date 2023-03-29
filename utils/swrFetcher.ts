const DEFAULT_PARAMS = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
};

type SwrFetcher = <T>(url: string, params?: RequestInit) => Promise<T>;

export const swrFetcher: SwrFetcher = async (url, params) => {
  const response = await fetch(url, {
    ...DEFAULT_PARAMS,
    ...params,
  });

  if (!response.ok) {
    throw new Error('[swrFetcher]: An error occurred while fetching the data.');
  }

  return response.json();
};
