import { useContext } from 'react';
import { steth, TokenContextValue } from 'providers';
import { TOKENS } from 'config';

export const useStethToken = (): TokenContextValue<TOKENS.steth> => {
  return useContext(steth.TokenContext);
};
