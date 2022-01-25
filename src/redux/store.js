import { configureStore } from "@reduxjs/toolkit";
import rangReducer from "./rangSlice";
export default configureStore({
  reducer: {
    rang: rangReducer,
  },
});
