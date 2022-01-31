import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ContentForDialog(props) {
  return (
    <div className="dialog-content-wrapper">
      <TextField
        autoFocus
        margin="dense"
        id="name"
        placeholder="Movie title"
        label={props.eidtMovie && props.eidtMovie.title}
        type="text"
        fullWidth
        variant="standard"
        onChange={(event) => {
          props.setEnteredlName(event.target.value);
        }}
      />

      <TextField
        autoFocus
        margin="dense"
        placeholder="Movie describe"
        id="decribe"
        label={props.eidtMovie && props.eidtMovie.describe}
        type="text"
        fullWidth
        variant="standard"
        onChange={(event) => {
          props.setEnteredDescription(event.target.value);
        }}
      />

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.enteredCategory}
            label={props.eidtMovie && props.eidtMovie?.type}
            onChange={(event) => {
              props.setEnteredCategory(event.target.value);
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
        label={props.eidtMovie && props.eidtMovie?.date}
        type="number"
        fullWidth
        variant="standard"
        className="year-of-presentation"
        onChange={(event) => {
          props.setEnteredYearOfPresentation(event.target.value);
        }}
      />

      <ToggleButtonGroup
        color="primary"
        value={props.enteredAvailable}
        onChange={(event) => {
          props.setEnteredAvailable(event.target.value);
        }}
      >
        <ToggleButton value={true}>Available</ToggleButton>
        <ToggleButton value={false}>Not Available</ToggleButton>
      </ToggleButtonGroup>
      <div className="rating-add">
        <Rating
          name="simple-controlled"
          value={props.eidtMovie && props.eidtMovie?.rang}
          label={props.eidtMovie && props.eidtMovie?.rang}
          onChange={(event) => {
            props.setEnteredRang(event.target.value);
          }}
          className="add-rang"
        />
      </div>
    </div>
  );
}

export default ContentForDialog;
