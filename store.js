import { configureStore } from "@reduxjs/toolkit";
import gaugeReducer from "./slice";

export const store = configureStore({
  reducer: {
    gauge: gaugeReducer,
  },
});
