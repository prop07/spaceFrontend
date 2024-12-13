import { configureStore } from "@reduxjs/toolkit";
import spaceReducer from "./features/spaceSlice";

const store = configureStore({
  reducer: {
    space: spaceReducer,
  },
});

export default store;
