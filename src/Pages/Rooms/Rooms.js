import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { MediaCard } from "../../Components/MediaCard";
import { bathrooms } from "../../Components/Album/Photos/Bathrooms";
import { doublerooms } from "../../Components/Album/Photos/DoubleRooms";
import { twinbedrooms } from "../../Components/Album/Photos/TwinBedrooms";
import { singlerooms } from "../../Components/Album/Photos/SingleRooms";
import { triplerooms } from "../../Components/Album/Photos/TripleRooms";
import Typography from "@material-ui/core/Typography";

const rooms = [
  {
    src: singlerooms[0].src,
    name: "Single Rooms"
  },
  {
    src: doublerooms[0].src,
    name: "Double Rooms"
  },
  {
    src: twinbedrooms[0].src,
    name: "Twin Bedrooms"
  },
  {
    src: triplerooms[0].src,
    name: "Triple Rooms"
  },
  {
    src: bathrooms[0].src,
    name: "Bathrooms"
  }
];

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
              <Grid item xs={4}>
                <MediaCard image={room} />
              </Grid>
            </Slide>
          );
        })}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Rooms);
