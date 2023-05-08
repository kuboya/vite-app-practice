import { createReducer } from '@reduxjs/toolkit';
import { decremented, incremented, added } from './actions';

export interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

export const counterSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(decremented, (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    })
    .addCase(incremented, (state) => {
      state.count += 1;
    })
    .addCase(added, (state, action) => {
      state.count += action.payload;
    });
});
