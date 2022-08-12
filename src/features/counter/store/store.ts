import { AppDispatch } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    increment(state: CounterState) {
      state.value += 1;
    },

    decrement(state: CounterState) {
      state.value -= 1;
    },

    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function asyncIncrement(): (dispatch: AppDispatch) => Promise<void> {
  return async function (dispatch: AppDispatch) {
    await sleep(3000);
    dispatch(increment());
  };
}
