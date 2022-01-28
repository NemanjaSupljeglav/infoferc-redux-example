import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getEditMovie } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";
import "./movieDataTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
function createData(movies, description, category, year, available, rang, id) {
  return { movies, description, category, year, available, rang, id };
}
let a = {
  title: "Nemanja Snow",
  describe:
    "Opis neki culpa elit consectetur occaecat in excepteur ut laboris ex pariatur minim. Velit pariatur laborum qui ullamco est sit Lorem commodo deserunt non mollit veniam. Ipsum officia incididunt nulla ut nostrud laboris esse reprehenderit dolor aliqua dolore. Ullamco et occaecat minim irure pariatur esse.\r\n",
  date: "19994",
  type: "Comedy",
  rang: 2,
  isActive: false,
  id: 1,
  picture:
    "https://upload.wikimedia.org/wikipedia/sh/0/02/Spider-Man_2_Poster.jpg",
};
function MovieDataTable(props) {
  const rows = [
    props.movies.map((movie) =>
      createData(
        movie.title,
        movie.describe.substring(0, 100) + " ...",
        movie.type,
        movie.date,
        movie.isActive,
        movie.rang,
        movie.id
      )
    ),
  ];
  const dispatch = useDispatch();
  return (
    <div className="movie-data-table-wrapper">
      {props.movies && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Movies</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Year of presentation</TableCell>
                <TableCell align="right">Available</TableCell>
                <TableCell align="right">Rang</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows[0].map((row) => (
                <TableRow
                  key={row.movies}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.movies}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                  <TableCell align="right">
                    {row.available && (
                      <FontAwesomeIcon icon={faCheck} color="green" />
                    )}
                    {!row.available && (
                      <FontAwesomeIcon icon={faTimes} color="red" />
                    )}
                  </TableCell>
                  <TableCell align="right">{row.rang}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="row-edit-table"
                      onClick={() => {
                        props.setAddNewOrEdit(false);
                        props.setOpen(true);
                        dispatch(getEditMovie(row.id));
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <button
        onClick={() => {
          props.setAddNewOrEdit(false);
          props.setOpen(true);
          dispatch(getEditMovie(2));
        }}
      >
        klikni ovde
      </button>
    </div>
  );
}

export default MovieDataTable;
