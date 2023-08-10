import { configureStore } from "@reduxjs/toolkit";
import simReducer from "./features/sim-slice";
import formReducer from "./features/formSlice";

export const store = configureStore({
  reducer: { simDeals: simReducer,
             form: formReducer },
});
