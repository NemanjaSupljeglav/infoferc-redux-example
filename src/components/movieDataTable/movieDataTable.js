import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { editMovie } from "../../redux/moviesSlice";
import { useDispatch } from "react-redux";
import "./movieDataTable.css";


function createData(movies, description, category, year, available, rang) {
  return { movies, description, category, year, available, rang };
}
function MovieDataTable(props) {
  const rows = [
    props.movies.map((movie) =>
      createData(
        movie.title,
        movie.describe.substring(0, 100) + " ...",
        movie.type,
        movie.date,
        movie.isActive,
        movie.rang
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
              </TableRow>
            </TableHead>

            <TableBody>
              {rows[0].map((row) => (
                <TableRow
                  key={row.movies}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    console.log(row.movies);
                  }}
                  className="row-edit-table"
                >
                  <TableCell component="th" scope="row">
                    {row.movies}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                  <TableCell align="right">
                    {row.available && "true"}
                    {!row.available && "false"}
                  </TableCell>
                  <TableCell align="right">{row.rang}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <button onClick={() => { dispatch(editMovie()) }}>klinki ocde</button>
    </div>
  );
}

export default MovieDataTable;
