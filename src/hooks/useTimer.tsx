import { type SyntheticEvent, useEffect, useState } from 'react';

export const useTimer = (
  maxCount: number
): [number, (event: SyntheticEvent) => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);

  const tick = (): void => {
    setTimeLeft((t) => t - 1);
  };

  const reset = (event: SyntheticEvent): void => {
    event.stopPropagation();
    setTimeLeft(maxCount);
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(maxCount);
  }, [timeLeft, maxCount]);

  return [timeLeft, reset];
};
