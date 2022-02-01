import "./postCard.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Rating from "@mui/material/Rating";
function PostCard(props) {
  const count = useSelector((state) => state.movies.value);
  const newRang = useSelector((state) => state.newRang);
  const [rangNum, setRangNum] = useState(props.rang);
  const dispatch = useDispatch();

  return (
    <>
      <div className="post-card-wrapper">
        <p className="post-type">{props.type}</p>

        <img
          className="post-cover-image"
          src={props.picture}
          alt="Post Image"
        ></img>
        <div className="title-available">
          <h2 className="post-card-title">
            {props.title} ({props.date})
          </h2>

          {props.isActive ? (
            <h2 className="available-post">Available</h2>
          ) : (
            <h2 className="available-post">Not available</h2>
          )}
        </div>
        <div className="rang-status">
          {props.isActive ? (
            <Rating
              name="simple-controlled"
              value={rangNum}
              onChange={(event, newValue) => {
                setRangNum(newValue);
              }}
            />
          ) : (
            <Rating name="simple-controlled" value={rangNum} readOnly />
          )}
        </div>
        <p className="description-post">{props.describe}</p>
      </div>
    </>
  );
}

export default PostCard;
