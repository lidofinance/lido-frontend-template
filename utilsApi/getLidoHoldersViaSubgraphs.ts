// eslint-disable-next-line import/no-extraneous-dependencies
import ms from 'ms';
import { standardFetcher } from '@lidofinance/ui-primitives';

import { serverRuntimeConfig } from 'config';
import { SubgraphChains } from 'types';

import { getSubgraphUrl } from './getSubgraphUrl';
import { subgraphsResponseTime } from './metrics';

interface LidoHolders extends Response {
  data: {
    stats: {
      uniqueAnytimeHolders: string;
      uniqueHolders: string;
    };
  };
}

type getLidoHoldersViaSubgraphsType = (
  chainId: SubgraphChains,
) => Promise<LidoHolders | null>;

const SUBGRAPH_ERROR_MESSAGE =
  '[getLidoHoldersViaSubgraphs] Subgraph request failed.';

export const getLidoHoldersViaSubgraphs: getLidoHoldersViaSubgraphsType =
  async (chainId: SubgraphChains) => {
    try {
      return fetchLidoHoldersViaSubgraphsWithMetrics(chainId);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message ?? SUBGRAPH_ERROR_MESSAGE);
      } else {
        throw new Error(SUBGRAPH_ERROR_MESSAGE);
      }
    }
  };

const fetchLidoHoldersViaSubgraphsWithMetrics: getLidoHoldersViaSubgraphsType =
  async (chainId: SubgraphChains) => {
    const endMetric = subgraphsResponseTime.startTimer();
    const data = fetchLidoHoldersViaSubgraphs(chainId);
    endMetric();
    return data;
  };

export const fetchLidoHoldersViaSubgraphs: getLidoHoldersViaSubgraphsType =
  async (chainId: SubgraphChains) => {
    const abortController = new AbortController();

    const timeoutMs = +serverRuntimeConfig.subgraphRequestTimeout || ms('5s');
    const timeoutId = setTimeout(() => abortController.abort(), timeoutMs);

    const url = getSubgraphUrl(chainId);
    if (!url) {
      throw new Error(`Error: subgraph chain is not supported ${chainId}`);
    }

    const query = `
      query {
        stats (id: "") {
          uniqueHolders
          uniqueAnytimeHolders
        }
      }
  `;
    const data = await standardFetcher<LidoHolders>(url, {
      method: 'POST',
      body: JSON.stringify({ query }),
      signal: abortController.signal,
    });

    clearTimeout(timeoutId);

    return data;
  };
