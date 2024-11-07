import { createSlice } from "@reduxjs/toolkit";

const GAUGE_VALUE = 50;

const INITIAL_STATE = { value: GAUGE_VALUE };

const gaugeSlice = createSlice({
  name: "gauge",
  initialState: INITIAL_STATE,
  reducers: {
    setGaugeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGaugeValue } = gaugeSlice.actions;
export default gaugeSlice.reducer;
