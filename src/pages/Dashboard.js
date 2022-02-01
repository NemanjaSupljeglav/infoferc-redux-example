import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/moviesSlice";
import { useEffect, useState } from "react";
import Dialog from "../components/Dialog/Dialog";
//MUIDataTable
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { faCheck, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEditMovie } from "../redux/moviesSlice";
import { getEditMovieDelete } from "../redux/moviesSlice";
//Dialog
import Button from "../components/button/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function Dashboard() {
  const [open, setOpen] = useState(false);
  const [addNewOrEdit, setAddNewOrEdit] = useState("");
  const [enteredName, setEnteredlName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredYearOfPresentation, setEnteredYearOfPresentation] =
    useState("");
  const [enteredAvailable, setEnteredAvailable] = useState(true);
  const [enteredRang, setEnteredRang] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const eidtMovie = useSelector((state) => state.movies.movieForEdit);
  const getPost = () => {
    dispatch(getMovies());
  };
  useEffect(() => {
    getPost();
  }, []);

  //MUIDataTable

  const columns = [
    {
      name: "title",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "describe",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "date",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "type",
      label: "Category",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "rang",
      label: "Rang",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "isActive",
      label: "Active",
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              {movies[dataIndex].isActive ? (
                <FontAwesomeIcon icon={faCheck} color="green" />
              ) : (
                <FontAwesomeIcon icon={faTimes} color="red" />
              )}
            </>
          );
        },
      },
    },

    {
      name: "",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <FontAwesomeIcon
              className="row-edit-table"
              icon={faEdit}
              onClick={() => {
                console.log("Klikno", dataIndex);
                setAddNewOrEdit("Edit movie");
                dispatch(getEditMovie(dataIndex));
                setOpen(true);
              }}
            />
          );
        },
      },
    },
  ];

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
  const dialogContent = (
    <div>
      <div className="dialog-content-wrapper">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          placeholder="Movie title"
          label={eidtMovie && eidtMovie.title}
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setEnteredlName(event.target.value);
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          placeholder="Movie describe"
          id="decribe"
          label={eidtMovie && eidtMovie.describe}
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setEnteredDescription(event.target.value);
          }}
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enteredCategory}
              label={eidtMovie && eidtMovie.typee}
              onChange={(event) => {
                setEnteredCategory(event.target.value);
              }}
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
          label={eidtMovie && eidtMovie?.date}
          type="number"
          fullWidth
          variant="standard"
          className="year-of-presentation"
          onChange={(event) => {
            setEnteredYearOfPresentation(event.target.value);
          }}
        />

        <ToggleButtonGroup
          color="primary"
          value={enteredAvailable}
          onChange={(event) => {
            setEnteredAvailable(event.target.value);
          }}
        >
          <ToggleButton value={true}>Available</ToggleButton>
          <ToggleButton value={false}>Not Available</ToggleButton>
        </ToggleButtonGroup>
        <div className="rating-add">
          <Rating
            name="simple-controlled"
            value={eidtMovie && eidtMovie?.rang}
            label={eidtMovie && eidtMovie?.rang}
            onChange={(event) => {
              setEnteredRang(event.target.value);
            }}
            className="add-rang"
          />
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Button
        onClick={() => {
          setAddNewOrEdit("Add movie");
          dispatch(getEditMovieDelete());
          setOpen(true);
          setAddNewOrEdit("Add new movie");
        }}
        label={"Add new"}
      />
      <div className="wrapper-all">
        <Dialog
          setOpen={setOpen}
          open={open}
          addNewOrEdit={addNewOrEdit}
          setAddNewOrEdit={setAddNewOrEdit}
          content={dialogContent}
          dataMovie={dataMovie}
          title={addNewOrEdit}
        />
        <div className="app-wrapper">
          <div></div>
        </div>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"30 Most Popular Movies"}
            data={movies}
            columns={columns}
            className="movie-data-table-wrapper"
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Dashboard;
