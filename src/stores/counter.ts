import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decremented: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    incremented: (state) => {
      state.count += 1;
    },
  },
});
