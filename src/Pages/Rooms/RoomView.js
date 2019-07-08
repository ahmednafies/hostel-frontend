import React from "react";
import PropTypes from "prop-types";
import { Album } from "../../Components/Album";
import Typography from "@material-ui/core/Typography";
import rooms from "./roomData";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBackRounded";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
  },
  grid: {
    alignItems: "center",
    textAlign: "center",
    justify: "center"
  }
}));

function RoomView({ match }) {
  const getRoom = () => {
    for (var index in rooms) {
      if (match.params.path === rooms[index].path) {
        return rooms[index];
      }
    }
  };
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={2} className={classes.grid}>
          <Link to={"/rooms"} style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              <ArrowBackIcon />

              {" Back"}
            </Button>
          </Link>
        </Grid>
        <Grid item xs={3} className={classes.grid} />
        <Typography>
          <h1>{getRoom().name}</h1>
        </Typography>
      </Grid>
      <Album photos={getRoom().data} />
    </div>
  );
}

RoomView.propTypes = {
  name: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired
};

export default RoomView;
