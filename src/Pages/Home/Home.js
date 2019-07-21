import React from "react";
import Grid from "@material-ui/core/Grid";
import { SlideShow } from "../../Components/Album";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-eric.css";
import { Typography } from "@material-ui/core";

function Home() {
  return (
    <div>
      <SlideShow />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        style={{ minHeight: "60vh" }}
      >
        <Grid item>
          <AwesomeButton
            type="secondary"
            size="large"
            href="https://www.booking.com/hotel/ee/harbour-hostel-tallinn.en-gb.html"
            target="_blank"
          >
            <Typography>Book Now</Typography>
          </AwesomeButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
