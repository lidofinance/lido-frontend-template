import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const useMountedState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] => {
  const mountedRef = useRef(false);
  const [state, setState] = useState<S>(initialState);

  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  const setMountedState: Dispatch<SetStateAction<S>> = useCallback(
    (...args) => {
      if (!mountedRef.current) return;
      setState(...args);
    },
    [],
  );

  return [state, setMountedState];
};
