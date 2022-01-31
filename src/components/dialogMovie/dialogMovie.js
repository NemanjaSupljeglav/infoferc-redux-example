import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Rating from "@mui/material/Rating";
import { addNewMovie, editMovie } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "../button/button";
import { getEditMovieDelete } from "../../redux/moviesSlice";
import "./dialogMovie.css";
import { useSelector } from "react-redux";
import ContentForDialog from "../contentForDialog/contentForDialog";
function DialogAddMovie(props) {
  const eidtMovie = useSelector((state) => state.movies.movieForEdit);

  const [enteredName, setEnteredlName] = React.useState("");
  const [enteredDescription, setEnteredDescription] = React.useState("");
  const [enteredCategory, setEnteredCategory] = React.useState("");
  const [enteredYearOfPresentation, setEnteredYearOfPresentation] =
    React.useState("");
  const [enteredAvailable, setEnteredAvailable] = React.useState(true);
  const [enteredRang, setEnteredRang] = React.useState("");

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    dispatch(getEditMovieDelete());
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const dataMovie = {
      title: enteredName,
      describe: enteredDescription,
      date: enteredYearOfPresentation,
      type: enteredCategory,
      rang: enteredRang,

      isActive: enteredAvailable,
      id: 100,
      picture:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_525041723_970647970450098_70024.jpg",
    };

    {
      !eidtMovie && dispatch(addNewMovie(dataMovie));
    }
    {
      eidtMovie && dispatch(editMovie(dataMovie));
    }

    handleClose();
  };

  return (
    <form className="wrapper">
      <div>
        <Button onClick={handleClickOpen} label={"Add new"} />
        <Dialog open={props.open} onClose={handleClose}>
          {eidtMovie && <DialogTitle>Edit movie</DialogTitle>}
          {!eidtMovie && <DialogTitle>Add movie</DialogTitle>}

          <DialogContent>
            <ContentForDialog
              setEnteredlName={setEnteredlName}
              setEnteredDescription={setEnteredDescription}
              setEnteredCategory={setEnteredCategory}
              setEnteredYearOfPresentation={setEnteredYearOfPresentation}
              setEnteredAvailable={setEnteredAvailable}
              setEnteredRang={setEnteredRang}
              eidtMovie={eidtMovie}
              enteredAvailable={enteredAvailable}
              enteredCategory={enteredCategory}
            ></ContentForDialog>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} label={"Cancel"} />

            {eidtMovie && <Button onClick={submitHandler} label={"Edit"} />}
            {!eidtMovie && <Button onClick={submitHandler} label={"Add new"} />}
          </DialogActions>
        </Dialog>
      </div>
    </form>
  );
}

export default DialogAddMovie;
