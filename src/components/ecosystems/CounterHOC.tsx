import { type Dispatch } from 'react';
import { connect } from 'react-redux';
import { type ICounterAction, add, decrement, increment } from 'stores/actions';
import { type ICounterState } from 'stores/reducers';
import CounterBoard from 'components/molecules/CounterBoard';

type StateProps = { count: number };
type DispatchProps = {
  decrement: () => void;
  increment: () => void;
  add: (amount: number) => void;
};

const mapStateToProps = (state: ICounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (
  dispatch: Dispatch<ICounterAction>
): DispatchProps => ({
  decrement: () => {
    dispatch(decrement());
  },
  increment: () => {
    dispatch(increment());
  },
  add: (amount: number) => {
    dispatch(add(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterBoard);
