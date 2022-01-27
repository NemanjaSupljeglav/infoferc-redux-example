import Button from "@mui/material/Button";

function ButonAddMove(props) {
  return (
    <div className="butonAddMove-wrapper">
      <Button variant="outlined" onClick={props.handleClickOpen}>
        Add new movie
      </Button>
    </div>
  );
}

export default ButonAddMove;
