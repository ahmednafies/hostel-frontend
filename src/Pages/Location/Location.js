import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { location } from "../../Components/Album/Photos/Location";
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
  embed: {
    width: "100%",
    height: 300,
    flex: 1
  },
  Image: {
    width: "100%",
    flex: 1
  }
}));

const fontWeight = 200;

function Location() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <h1>Location</h1>
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        style={{ minHeight: "60vh" }}
      >
        <Grid item xs={12} sm={11} md={10} lg={10} align="center">
          <img className={classes.Image} src={location[0].src} alt="Location" />
        </Grid>
        <Grid item xs={12} sm={11} md={10} lg={10} align="left">
          <Typography paragraph>
            <Box fontWeight={fontWeight}>
              Harbour hostel Tallinn is located at around{" "}
              <b>500m from the harbour of Tallinn</b>, The address of the hostel
              is <b>14a Paadi, Tallinn City-Centre, 10151</b> and across the
              street from <b>Nautica center</b>
            </Box>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={11} md={10} lg={10} align="center">
          <img className={classes.Image} src={location[1].src} alt="Location" />
        </Grid>
        <Grid item xs={12} sm={11} md={10} lg={10} align="left">
          <Typography paragraph>
            <Box fontWeight={fontWeight}>
              And here is our location on <b>google maps.</b>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={11} md={10} lg={10} align="center">
          <iframe
            title="map"
            className={classes.embed}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.4676790771475!2d24.759543616177776!3d59.44195228169837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293679e649e89%3A0x93124b4add483587!2sPaadi+14a%2C+10151+Tallinn!5e0!3m2!1sen!2see!4v1562515701497!5m2!1sen!2see"
            frameborder="0"
            allowfullscreen
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Location;
