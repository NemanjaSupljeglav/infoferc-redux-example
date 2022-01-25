import "./App.css";
import api from "./API/api.json";
import PostCard from "./components/postCard/PostCard";
function App() {
  return (
    <div className="App">
      <PostCard></PostCard>

      {api.map((movie) => (
        <li key={movie._id}>{movie.title}</li>
      ))}
    </div>
  );
}

export default App;
