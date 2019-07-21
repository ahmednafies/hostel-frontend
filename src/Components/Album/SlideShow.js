import React from "react";
import BackgroundSlider from "react-background-slider";
import { carousel } from "./Photos/Carousel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  Typography: {
    fontSize: 300
  },
  Image: {
    width: "100%"
  }
}));

function SlideShow() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="right"
      >
        <BackgroundSlider
          images={carousel.map(photo => photo.src)}
          duration={5}
          transition={2}
        />
      </Grid>
    </div>
  );
}

export default SlideShow;
