import api from "./API/api.json";
import PostCard from "./components/postCard/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/rangSlice";
function App() {
  const count = useSelector((state) => state.rang.value);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.rang.movies);
  return (
    <div className="App">
      {/*{movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}*/}
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
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
