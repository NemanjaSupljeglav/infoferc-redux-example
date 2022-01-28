import { createSlice } from "@reduxjs/toolkit";
import api from "../API/api.json";
const b = api;
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieForEdit: [],
  },
  reducers: {
    getMovies: (state) => {
      state.movies = api;
    },
    addNewMovie: (state, { payload }) => {
      state.movies = [payload].concat(api);
      console.log("proslo");
    },
    editMovie: (state, { payload }) => {
      let updateData = [payload].concat(api.slice(3));

      console.log(api.slice(0, 2));

      state.movies = [].concat(updateData);
    },
    getEditMovie: (state, { payload }) => {
      state.movieForEdit = api.filter(function (movie) {
        return movie.id == payload;
      });
      console.log(state.movieForEdit);
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
export const { getMovies, addNewMovie, editMovie, getEditMovie } =
  moviesSlice.actions;

export default moviesSlice.reducer;
