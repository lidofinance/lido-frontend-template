export const DEFAULT_PARAMS = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
};

type StandardFetcher = <T extends unknown>(
  url: string,
  params: RequestInit,
) => Promise<T>;

export const standardFetcher: StandardFetcher = async (
  url,
  params = DEFAULT_PARAMS,
) => {
  const response = await fetch(url, params);
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }

  const data = await response.json();
  return data;
};
