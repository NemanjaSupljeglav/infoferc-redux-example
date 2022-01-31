import "./dashboard.css";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/moviesSlice";
import { useEffect, useState } from "react";
import DialogMovie from "../components/dialogMovie/dialogMovie";
import MovieTable from "../components/movieTable/movieTable";
function Dashboard() {
  const [open, setOpen] = useState(false);
  const [addNewOrEdit, setAddNewOrEdit] = useState(false);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const getPost = () => {
    dispatch(getMovies());
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="wrapper-all">
      <DialogMovie
        setOpen={setOpen}
        open={open}
        addNewOrEdit={addNewOrEdit}
        setAddNewOrEdit={setAddNewOrEdit}
      />
      <div className="app-wrapper">
        <div></div>
      </div>

      <MovieTable
        movies={movies}
        setOpen={setOpen}
        open={open}
        setAddNewOrEdit={setAddNewOrEdit}
      />
    </div>
  );
}

export default Dashboard;
