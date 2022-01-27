import { createSlice } from "@reduxjs/toolkit";
import api from "../API/api.json";
const b = api
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: (state) => {
      state.movies = api;
    },
    addNewMovie: (state, { payload }) => {
      state.movies = [payload].concat(api);
      console.log("proslo");
    },
    editMovie: (state) => {
      console.log("api")
      console.log(api[1])
      console.log("api")
      state.movies = api.slice(1)
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
export const { getMovies, addNewMovie, editMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
