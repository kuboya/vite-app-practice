import {
  type SyntheticEvent,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';

export const useTimer = (
  maxCount: number
): [number, (event: SyntheticEvent) => void] => {
  const intervalId = useRef<ReturnType<typeof setInterval>>();

  const [timeLeft, setTimeLeft] = useState(maxCount);

  const tick = useCallback((): void => {
    setTimeLeft((t) => t - 1);
  }, []);

  const reset = useCallback(
    (event?: SyntheticEvent): void => {
      event?.stopPropagation();

      if (intervalId.current !== undefined) {
        clearInterval(intervalId.current);
      }

      setTimeLeft(maxCount);

      intervalId.current = setInterval(tick, 1000);
    },
    [maxCount, tick]
  );

  useEffect(() => {
    reset();

    return () => {
      clearInterval(intervalId.current);
    };
  }, [reset]);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, maxCount, reset]);

  return [timeLeft, reset];
};
