import { createSlice } from "@reduxjs/toolkit";
import api from "../API/api.json";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: (state) => {
      state.movies = api;
      console.log("proslo");
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
export const { getMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
