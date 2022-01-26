import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Rating from "@mui/material/Rating";
import { addNewMovie } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./addNewMovie.css";

function AddNewMovie() {
  const [open, setOpen] = React.useState(false);
  const [enteredName, setEnteredlName] = React.useState("");
  const [enteredDescription, setEnteredDescription] = React.useState("");
  const [enteredCategory, setEnteredCategory] = React.useState("");
  const [enteredYearOfPresentation, setEnteredYearOfPresentation] =
    React.useState("");
  const [enteredAvailable, setEnteredAvailable] = React.useState("true");
  const [enteredRang, setEnteredRang] = React.useState(0);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    console.log("event.target");
    console.log(event.target);

    setEnteredRang(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit proso");
    const dataMovie = {
      title: enteredName,
      describe: enteredDescription,
      date: enteredYearOfPresentation,
      type: enteredCategory,
      rang: enteredRang,

      isActive: enteredAvailable,
      id: 100,
      picture:
        "https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg",
    };
    console.log("submit proso", dataMovie);

    dispatch(addNewMovie(dataMovie));
    handleClose();
  };
  return (
    <form className="wrapper">
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add new movie
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add movie</DialogTitle>
          <DialogContent>
            <DialogContentText>Add your favorite movie.</DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Movie name"
              type="text"
              fullWidth
              variant="standard"
              onChange={nameHandler}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
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
                  label="Category"
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
              label="Year of presentation"
              type="text"
              fullWidth
              variant="standard"
              className="year-of-presentation"
              onChange={yearOfPresentationHandler}
              required
            />

            <ToggleButtonGroup
              color="primary"
              value={enteredAvailable}
              exclusive
              onChange={availableHandler}
            >
              <ToggleButton value="true">Available</ToggleButton>
              <ToggleButton value="false">Not Available</ToggleButton>
            </ToggleButtonGroup>
            <div className="rating-add">
              <Rating
                name="simple-controlled"
                value={enteredRang}
                onChange={rangHandler}
                className="add-rang"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={submitHandler} type="submit">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </form>
  );
}

export default AddNewMovie;
