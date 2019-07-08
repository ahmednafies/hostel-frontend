import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { MediaCard } from "../../Components/MediaCard";
import Typography from "@material-ui/core/Typography";
import rooms from "./roomData";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  grid: {
    alignItems: "center",
    textAlign: "center",
    justify: "center"
  }
});

function Rooms(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.grid}>
          <Typography>
            <h1>Our Rooms</h1>
          </Typography>
        </Grid>
        {rooms.map((room, index) => {
          return (
            <Slide
              direction="left"
              in={true}
              key={index}
              style={{ transitionDelay: index * 50 }}
              mountOnEnter
              unmountOnExit
            >
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <MediaCard room={room} />
              </Grid>
            </Slide>
          );
        })}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Rooms);
