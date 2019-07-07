import React from "react";
import { SlideShow } from "../../Components/Album";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <SlideShow />
    </Paper>
  );
}

export default Home;
