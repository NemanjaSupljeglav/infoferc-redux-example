import "./postCard.css";
import { AiFillStar } from "react-icons/ai";
function PostCard(props) {
  return (
    <div className="post-card-wrapper">
      <p className="post-type">Horor</p>

      <img
        className="post-cover-image"
        src="https://upload.wikimedia.org/wikipedia/sh/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg"
        alt="Post Image"
      ></img>

      <h2 className="post-card-title">Spider-Man (1994)</h2>

      <p className="description-post">
        Spider-Man ili Čovjek pauk je izmišljeni stripovski lik izdavačke kuće
        Marvel Comics. Stvorili su ga pisac Stan Lee i pisac-crtač Steve Ditko,
        a svoje prvo pojavljivanje je imao u kolovozu 1962. godine u stripu
        Amazing Fantasy #15. Lee i Ditko su zamislili lik kao siroče koje
        odgajaju njegovi ujna May i ujak Ben te da...
      </p>
      <div className="rang-status">
        <h2 className="post-card-rang">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />5
        </h2>
        <h2 className="post-card-status">Available</h2>
      </div>
    </div>
  );
}

export default PostCard;
