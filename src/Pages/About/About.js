import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
  }
}));

const fontWeight = 200;

function About() {
  const classes = useStyles();

  return (
    <div>
      <Typography>
        <h1>About</h1>
      </Typography>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="right"
        >
          <Grid item xs={10} align="left">
            <Typography paragraph>
              <Box fontWeight={fontWeight}>
                Harbour hostel Tallinn is located in a prime location in the
                Tallinn City-Centre district of Tallinn, Harbour Hostel Tallinn
                is situated <b>500m from the harbour of Tallinn</b>, 2.2 km from
                Maiden Tower and 2.3 km from Niguliste Museum-Concert Hall.
              </Box>
            </Typography>

            <Typography paragraph>
              <Box fontWeight={fontWeight}>
                The property is around 2.4 km from Lennusadam Seaplane Harbour,
                2.5 km from Tallinn Town Hall and 2.7 km from Toompea Castle.
              </Box>
            </Typography>

            <Typography paragraph>
              <Box fontWeight={fontWeight}>
                The property is non-smoking and is located 1.8 km from Estonian
                National Opera.
              </Box>
            </Typography>

            <Typography paragraph>
              <Box fontWeight={fontWeight}>
                With a shared bathroom equipped with a{" "}
                <b>shower and a hairdryer, </b>
                rooms at the hostel also provide guests with <b>free WiFi.</b>
              </Box>
            </Typography>

            <Typography paragraph>
              <Box fontWeight={fontWeight}>
                Town Hall Square is 2.7 km from Harbour Hostel Tallinn, while
                Alexander Nevsky Cathedral is 2.8 km away. The nearest airport
                is Lennart Meri Tallinn Airport, 4.4 km from the accommodation.
              </Box>
            </Typography>

            <Typography paragraph>
              <Box fontWeight={fontWeight}>
                Tallinn City-Centre is a great choice for travellers interested
                in restaurants, food and history. This is our guests' favorite
                part of Tallinn, according to independent reviews.
                <b>
                  {" "}
                  Couples particularly like the location — they rated it 10/10
                  for a two-person trip.
                </b>
              </Box>
            </Typography>

            <Typography paragraph>
              <Box fontWeight={fontWeight}>We speak your language! </Box>
            </Typography>

            <Typography paragraph>
              <Box fontWeight={fontWeight}>
                Harbour Hostel Tallinn has been welcoming guests since 8 Jun
                2019.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
