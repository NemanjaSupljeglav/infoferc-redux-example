import { configureStore } from "@reduxjs/toolkit";
import rangReducer from "./rangSlice";
import moviesSlice from "./moviesSlice";
export default configureStore({
  reducer: {
    movies: moviesSlice,
  },
});
