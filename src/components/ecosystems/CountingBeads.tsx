import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { ICounterState } from 'stores/reducers';
import ColorfulBeads from 'components/molecules/ColorfulBeads';

const CountingBeads: FC<{ count?: number }> = () => {
  const count = useSelector<ICounterState, number>((state) => state.count);

  return <ColorfulBeads count={count} />;
};

export default CountingBeads;
