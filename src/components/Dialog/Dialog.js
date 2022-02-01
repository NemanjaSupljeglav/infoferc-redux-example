import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addNewMovie, editMovie } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";
import Button from "../button/Button";
import "./dialog.css";
import { useSelector } from "react-redux";
function DialogAddMovie({ setOpen, dataMovie, open, content }) {
  const eidtMovie = useSelector((state) => state.movies.movieForEdit);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    eidtMovie
      ? dispatch(editMovie(dataMovie))
      : dispatch(addNewMovie(dataMovie));
    handleClose();
  };

  return (
    <form className="wrapper">
      <div>
        <Dialog open={open} onClose={handleClose}>
          {editMovie ? (
            <DialogTitle>Edit movie</DialogTitle>
          ) : (
            <DialogTitle>Add movie</DialogTitle>
          )}
          <DialogContent>{content}</DialogContent>
          <DialogActions>
            <Button onClick={handleClose} label={"Cancel"} />

            {editMovie ? (
              <Button onClick={submitHandler} label={"Edit"} />
            ) : (
              <Button onClick={submitHandler} label={"Add new"} />
            )}
          </DialogActions>
        </Dialog>
      </div>
    </form>
  );
}

export default DialogAddMovie;
