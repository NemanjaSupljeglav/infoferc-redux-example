import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
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
import ButonAddMove from "../buttonAddMovie/butonAddMove";
import { getEditMovieDelete } from "../../redux/moviesSlice";
import "./dialogAddMovie.css";
import { useSelector } from "react-redux";
function DialogAddMovie(props) {
  const eidtMovie = useSelector((state) => state.movies.movieForEdit);

  const [enteredName, setEnteredlName] = React.useState("");
  const [enteredDescription, setEnteredDescription] = React.useState("");
  const [enteredCategory, setEnteredCategory] = React.useState("");
  const [enteredYearOfPresentation, setEnteredYearOfPresentation] =
    React.useState("");
  const [enteredAvailable, setEnteredAvailable] = React.useState("true");
  const [enteredRang, setEnteredRang] = React.useState("");


  const dispatch = useDispatch();
  const handleClickOpen = () => {
    dispatch(getEditMovieDelete());
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const nameHandler = (event) => {
    setEnteredlName(event.target.value);
  };
  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const categoryHandler = (event) => {
    setEnteredCategory(event.target.value);
  };
  const yearOfPresentationHandler = (event) => {
    setEnteredYearOfPresentation(event.target.value);
  };
  const availableHandler = (event) => {
    setEnteredAvailable(event.target.value);
  };
  const rangHandler = (event) => {


    setEnteredRang(event.target.value);
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



    { !eidtMovie[0] && dispatch(addNewMovie(dataMovie)) }
    { eidtMovie[0] && dispatch(editMovie(dataMovie)) }

    handleClose();
  };

  return (
    <form className="wrapper">
      <div>
        <ButonAddMove handleClickOpen={handleClickOpen} />
        <Dialog open={props.open} onClose={handleClose}>
          {eidtMovie[0] && <DialogTitle>Edit movie</DialogTitle>}
          {!eidtMovie[0] && <DialogTitle>Add movie</DialogTitle>}

          <DialogContent>

            <label id="name" label="name">Name</label>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              placeholder="Some Text"
              type="text"
              fullWidth
              variant="standard"
              onChange={nameHandler}
            />
            <label id="decribe" label="decribe">Description</label>
            <TextField
              autoFocus
              margin="dense"
              id="decribe"
              label={eidtMovie && eidtMovie[0]?.describe}
              type="text"
              fullWidth
              variant="standard"
              onChange={descriptionHandler}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enteredCategory}
                  label={eidtMovie && eidtMovie[0]?.type}
                  onChange={categoryHandler}

                >
                  <MenuItem value={"Horror"}>Horror</MenuItem>
                  <MenuItem value={"Action"}>Action</MenuItem>
                  <MenuItem value={"Comedy"}>Comedy</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={eidtMovie && eidtMovie[0]?.date}
              type="number"
              fullWidth
              variant="standard"
              className="year-of-presentation"
              onChange={yearOfPresentationHandler}
            />

            <ToggleButtonGroup
              color="primary"
              value={enteredAvailable}
              onChange={availableHandler}
            >
              <ToggleButton value="true">Available</ToggleButton>
              <ToggleButton value="false">Not Available</ToggleButton>
            </ToggleButtonGroup>
            <div className="rating-add">
              <Rating
                name="simple-controlled"
                value={eidtMovie && eidtMovie[0]?.rang}
                label={eidtMovie && eidtMovie[0]?.rang}
                onChange={rangHandler}
                className="add-rang"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>

            {eidtMovie[0] && <Button onClick={submitHandler}>Edit</Button>}
            {!eidtMovie[0] && <Button v>Add movie</Button>}
          </DialogActions>
        </Dialog>
      </div>
    </form>
  );
}

export default DialogAddMovie;
