import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { faCheck, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEditMovie } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";
import "./movieTable.css";
function MovieTable(props) {
  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    "Description",
    "Category",
    "Year of presentation",
    "Available",
    "Rang",
    "Edit",
  ];

  const data = props.movies.map((movie) => [
    movie.title,
    movie.describe.substring(0, 100) + " ...",
    movie.type,
    movie.date,
    [
      movie.isActive && <FontAwesomeIcon icon={faCheck} color="green" />,
      !movie.isActive && <FontAwesomeIcon icon={faTimes} color="red" />,
    ],
    movie.rang,
    <FontAwesomeIcon
      icon={faEdit}
      className="row-edit-table"
      onClick={() => {
        props.setAddNewOrEdit(false);
        props.setOpen(true);
        dispatch(getEditMovie(movie.id));
      }}
    />,
  ]);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={"30 Most Popular Movies"}
        data={data}
        columns={columns}
        className="movie-data-table-wrapper"
      />
    </ThemeProvider>
  );
}
export default MovieTable;
