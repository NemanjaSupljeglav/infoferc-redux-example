import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { editMovie, getMovies } from "../redux/moviesSlice";
import { useEffect, useState } from "react";
import Dialog from "../components/dialogs/Dialog";
//MUIDataTable
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { faCheck, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEditMovie } from "../redux/moviesSlice";
import { getEditMovieDelete } from "../redux/moviesSlice";
//Dialog
import Button from "../components/buttons/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { addNewMovie } from "../redux/moviesSlice";
//Notification
import { ReactNotifications } from "react-notifications-component";
import { Store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
function Dashboard() {
  const eidtMovie = useSelector((state) => state.movies.movieForEdit);
  const [open, setOpen] = useState(false);
  const [addNewOrEdit, setAddNewOrEdit] = useState("");
  const [enteredName, setEnteredlName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [proba, setProba] = useState(0);
  const [enteredCategory, setEnteredCategory] = useState(
    eidtMovie ? eidtMovie?.type : ""
  );
  const [enteredYearOfPresentation, setEnteredYearOfPresentation] =
    useState("");
  const [enteredAvailable, setEnteredAvailable] = useState(
    eidtMovie ? eidtMovie.isActive : true
  );
  const [enteredRang, setEnteredRang] = useState(
    eidtMovie ? eidtMovie.rang : 2
  );
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const getPost = () => {
    dispatch(getMovies());
  };
  useEffect(() => {
    getPost();
  }, []);

  //MUIDataTable

  const columns = [
    {
      name: "datum_zaprimanja",
      label: "Datum zaprimanja",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "datum_stizanja_zzo",
      label: "Datum stizanja",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "dijagnoza",
      label: "Dijagnoza",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "tip_povrede",
      label: "Tip potvrde",
      options: {
        filter: true,
        sort: true,
      },
    },





    {
      name: "Actions",
      label: "",
      property: "id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              {movies[dataIndex]?.isActive ? (
                <FontAwesomeIcon
                  className="row-edit-table"
                  icon={faEdit}
                  onClick={() => {
                    setAddNewOrEdit("Edit movie");
                    dispatch(getEditMovie(movies[dataIndex]?.id));
                    setOpen(true);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => {
                    console.log("This movie is not available");
                  }}
                />
              )}
            </>
          );
        },
      },
    },
  ];
  const columns2 = [
    {
      name: "iznos_troska",
      label: "Iznos troška",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "datum_troska",
      label: "Datum",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "napomena",
      label: "Napomena",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "Actions",
      label: "",
      property: "id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              {movies[dataIndex]?.isActive ? (
                <FontAwesomeIcon
                  className="row-edit-table"
                  icon={faEdit}
                  onClick={() => {
                    setAddNewOrEdit("Edit movie");
                    dispatch(getEditMovie(movies[dataIndex]?.id));
                    setOpen(true);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => {
                    console.log("This movie is not available");
                  }}
                />
              )}
            </>
          );
        },
      },
    },
  ];
  const columns3 = [
    {
      name: "iznos_uplate",
      label: "Iznos uplate",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "datum_uplate",
      label: "Datum uplate",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "napomena",
      label: "Napomena",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "Actions",
      label: "",
      property: "id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              {movies[dataIndex]?.isActive ? (
                <FontAwesomeIcon
                  className="row-edit-table"
                  icon={faEdit}
                  onClick={() => {
                    setAddNewOrEdit("Edit movie");
                    dispatch(getEditMovie(movies[dataIndex]?.id));
                    setOpen(true);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => {
                    console.log("This movie is not available");
                  }}
                />
              )}
            </>
          );
        },
      },
    },
  ];
  function handleAddNewMovie() {
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
    }
    //test

    //test

    {
      enteredName == "" && callnotification("Nemanja", "nema ime", "warning");
    }

    eidtMovie
      ? dispatch(editMovie(dataMovie))
      : dispatch(addNewMovie(dataMovie));
    setOpen(false);
  }

  const dialogContent = (
    <div>
      <div className="dialog-content-wrapper">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name={eidtMovie && eidtMovie.title}
          placeholder="Movie title"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={eidtMovie && eidtMovie.title}
          onChange={(event) => {
            setEnteredlName(event.target.value);
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          placeholder="Movie describe"
          id="decribe"
          defaultValue={eidtMovie && eidtMovie.describe}
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setEnteredDescription(event.target.value);
          }}
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {eidtMovie ? "" : "Category"}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={enteredCategory}
              defaultValue={eidtMovie ? eidtMovie.type : ""}
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
          defaultValue={eidtMovie && eidtMovie.date}
          variant="standard"
          className="year-of-presentation"
          onChange={(event) => {
            setEnteredYearOfPresentation(event.target.value);
          }}
        />

        <ToggleButtonGroup
          color="primary"
          value={enteredAvailable}
          defaultValue={eidtMovie ? eidtMovie.isActive : true}
          onChange={setEnteredAvailable}
        >
          <ToggleButton
            value={true}
            onClick={() => {
              setEnteredAvailable(true);
              console.log(enteredAvailable);
            }}
          >
            Available
          </ToggleButton>
          <ToggleButton
            value={false}
            onClick={() => {
              setEnteredAvailable(false);
              console.log(enteredAvailable);
            }}
          >
            Not Available
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="rating-add">
          <Rating
            name="simple-controlled"
            defaultValue={eidtMovie ? eidtMovie.rang : 3}
            label={enteredRang}
            onChange={(event) => {
              setEnteredRang(event.target.value);
            }}
            className="add-rang"
          />
        </div>
      </div>
    </div>
  );
  const options2 = {
    print: false,
    viewColumns: false,
    selectableRows: false,
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {

      const colSpan = rowData.length + 1;
      console.log(colSpan, "colSpan")
      console.log(rowData, "rowData")
      console.log(rowMeta.rowIndex, "rowMeta")
      console.log(movies[rowMeta.rowIndex]?.troskovi[rowMeta.rowIndex]?.uplate, "dataTable 0 ostvarebi uplate be")
      //dataTable[rowMeta.rowIndex]?.ostvareni_troškovi
      return (
        <MUIDataTable
          title={"Uplate"}
          data={movies[rowMeta.rowIndex]?.troskovi[rowMeta.rowIndex]?.uplate}
          columns={columns3}
          className="movie-data-table-wrapper"
          options={options}
        />
      )
    },
    expandableRowsHeader: false
  };
  //Table option
  const options = {
    print: false,
    viewColumns: false,
    selectableRows: false,
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {

      const colSpan = rowData.length + 1;
      const rowMetaa = rowMeta;
      dispatch(getMovies(2));
      return (
        <MUIDataTable
          title={"Troškovi"}
          data={movies[rowMeta.rowIndex]?.troskovi}
          columns={columns2}
          className="movie-data-table-wrapper"
          options={options2}
        />
      )
    },
    expandableRowsHeader: false
  };

  //Notification data
  function callnotification(title, message, type) {
    Store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }
  return (
    <>
      <div className="open-dialog">
        <Button
          onClick={() => {
            setAddNewOrEdit("Add movie");
            dispatch(getEditMovieDelete());
            setOpen(true);
          }}
          label={"Add new"}
        />
      </div>

      <div className="wrapper-all">
        <ReactNotifications rel="stylesheet" className="" />
        <button
          onClick={() => {
            callnotification();
          }}
        >
          calll notii
        </button>
        <Dialog
          setOpen={setOpen}
          open={open}
          addNewOrEdit={addNewOrEdit}
          setAddNewOrEdit={setAddNewOrEdit}
          content={dialogContent}
          title={addNewOrEdit}
          handleAddNewMovie={handleAddNewMovie}
        />
        <div className="app-wrapper">
          <div></div>
        </div>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"Ozljede na radu"}
            data={movies}
            columns={columns}
            className="movie-data-table-wrapper"
            options={options}
          />
        </ThemeProvider>
      </div>
    </>
  );
}

export default Dashboard;
