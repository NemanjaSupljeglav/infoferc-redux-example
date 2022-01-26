import "./dashboard.css";
import PostCard from "../components/postCard/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import AddNewMovie from "../components/addNewMovie/addNewMovie";
function Dashboard() {
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
      <AddNewMovie></AddNewMovie>
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
          ></PostCard>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
