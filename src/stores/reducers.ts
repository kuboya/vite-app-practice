import type { Reducer } from 'redux';
import { CoutnerActions as Action, type ICounterAction } from './actions';

export interface ICounterState {
  count: number;
}
export const initialState: ICounterState = { count: 0 };

export const counterReducer: Reducer<ICounterState, ICounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Action.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Action.DECREMENT:
      return { ...state, count: state.count < 1 ? 0 : state.count - 1 };
    case Action.ADD:
      return { ...state, count: state.count + (action.amount ?? 0) };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
