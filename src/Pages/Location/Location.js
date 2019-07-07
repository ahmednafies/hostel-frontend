import React from "react";
import { Typography } from "@material-ui/core";
import Iframe from "react-iframe";
import Grid from "@material-ui/core/Grid";

function Location() {
  return (
    <div>
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
        <Grid item>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.4676790771475!2d24.759543616177776!3d59.44195228169837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293679e649e89%3A0x93124b4add483587!2sPaadi+14a%2C+10151+Tallinn!5e0!3m2!1sen!2see!4v1562515701497!5m2!1sen!2see"
            width="800"
            height="600"
            frameborder="0"
            style="border:0"
            allowfullscreen
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Location;
