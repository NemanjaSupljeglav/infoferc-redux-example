import { createSlice } from "@reduxjs/toolkit";
import api from "../API/api.json";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 6,
    movies: api,
    newRang: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload;
      state.newRang = action.payload;
    },
  },
});

/*
export const FetchMovie = () => {

  return async (dispatch) => {

   

    try {
      const response = await fetch("", {
        method: "GET",
        mode: 'cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

        },

        body: JSON.stringify({
       movies,
        }),
      });

*/
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
