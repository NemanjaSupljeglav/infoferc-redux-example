import "./postCard.css";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { incrementByAmount } from "../../redux/rangSlice";
function PostCard(props) {
  const count = useSelector((state) => state.rang.value);
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
          {props.isActive && <h2 className="available-post">Available</h2>}
          {!props.isActive && <h2 className="available-post">Not available</h2>}
        </div>
        <p className="description-post">{props.describe}</p>
        <div className="rang-status">
          <h2 className="post-card-rang">
            {props.isActive && (
              <>
                {" "}
                {rangNum >= 1 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(1)} color="red" />
                  </div>
                )}
                {rangNum < 1 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(1)} />
                  </div>
                )}
              </>
            )}
            {!props.isActive && (
              <>
                {" "}
                {rangNum >= 1 && (
                  <div>
                    {" "}
                    <AiFillStar color="red" />
                  </div>
                )}
                {rangNum < 1 && (
                  <div>
                    {" "}
                    <AiFillStar />
                  </div>
                )}
              </>
            )}
            {props.isActive && (
              <>
                {rangNum >= 2 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(2)} color="red" />
                  </div>
                )}
                {rangNum < 2 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(2)} />
                  </div>
                )}
              </>
            )}

            {!props.isActive && (
              <>
                {rangNum >= 2 && (
                  <div>
                    {" "}
                    <AiFillStar color="red" />
                  </div>
                )}
                {rangNum < 2 && (
                  <div>
                    {" "}
                    <AiFillStar />
                  </div>
                )}
              </>
            )}
            {props.isActive && (
              <>
                {rangNum >= 3 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(3)} color="red" />
                  </div>
                )}
                {rangNum < 3 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(3)} />
                  </div>
                )}
              </>
            )}
            {!props.isActive && (
              <>
                {rangNum >= 3 && (
                  <div>
                    {" "}
                    <AiFillStar color="red" />
                  </div>
                )}
                {rangNum < 3 && (
                  <div>
                    {" "}
                    <AiFillStar />
                  </div>
                )}
              </>
            )}
            {props.isActive && (
              <>
                {rangNum >= 4 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(4)} color="red" />
                  </div>
                )}
                {rangNum < 4 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(4)} />
                  </div>
                )}
              </>
            )}
            {!props.isActive && (
              <>
                {rangNum >= 4 && (
                  <div>
                    {" "}
                    <AiFillStar color="red" />
                  </div>
                )}
                {rangNum < 4 && (
                  <div>
                    {" "}
                    <AiFillStar />
                  </div>
                )}
              </>
            )}
            {props.isActive && (
              <>
                {rangNum >= 5 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(5)} color="red" />
                  </div>
                )}
                {rangNum < 5 && (
                  <div>
                    {" "}
                    <AiFillStar onClick={() => setRangNum(5)} />
                  </div>
                )}
              </>
            )}
            {!props.isActive && (
              <>
                {rangNum >= 5 && (
                  <div>
                    {" "}
                    <AiFillStar color="red" />
                  </div>
                )}
                {rangNum < 5 && (
                  <div>
                    {" "}
                    <AiFillStar />
                  </div>
                )}
              </>
            )}
          </h2>
        </div>
      </div>
    </>
  );
}

export default PostCard;
