import "./dashboard.css";
import PostCard from "../components/postCard/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/moviesSlice";
import { useEffect, useState } from "react";
import DialogAddMovie from "../components/dialogAddMovie/dialogAddMovie";
import MovieDataTable from "../components/movieDataTable/movieDataTable";
function Dashboard() {
  const [open, setOpen] = useState(false);
  const count = useSelector((state) => state.movies.value);
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
      <DialogAddMovie setOpen={setOpen} open={open} />
      <div className="app-wrapper">
        {movies.map((movie) => (
          <PostCard
            key={movie.id}
            title={movie.title}
            describe={movie.describe}
            date={movie.date}
            type={movie.type}
            rang={movie.rang}
            isActive={movie.isActive}
            picture={movie.picture}
          />
        ))}
        <div></div>
      </div>
      <MovieDataTable movies={movies} />
    </div>
  );
}

export default Dashboard;
