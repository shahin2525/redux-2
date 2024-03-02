import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TPayloadNumber = {
  count: number;
};

const initialState: TPayloadNumber = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByValue: (state, action) => {
      state.count -= action.payload.data;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
