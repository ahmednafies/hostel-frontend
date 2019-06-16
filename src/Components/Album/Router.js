
import React from 'react';
import Grid from '@material-ui/core/Grid';

import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-eric.css';
function Router() {

    return (
      <Grid
      container
      spacing={3}
      alignItems="center"
      justify="center"
      style={{ minHeight: '60vh' }}
    >
      <Grid item xs={4}>
        <AwesomeButton type="secondary" size="large">Double Rooms</AwesomeButton>
      </Grid>
      <Grid item xs={4}>
        <AwesomeButton type="secondary" size="large">Twin Bedrooms</AwesomeButton>
      </Grid> 
      <Grid item xs={4}>
        <AwesomeButton type="secondary" size="large">Single Rooms</AwesomeButton>
      </Grid>
      <Grid item xs={4}>
        <AwesomeButton type="secondary" size="large">Triple Rooms</AwesomeButton>
      </Grid>  
      <Grid item xs={4}>
        <AwesomeButton type="secondary" size="large">Bathrooms</AwesomeButton>
      </Grid>
      <Grid item xs={4}>
        <AwesomeButton type="secondary" size="large">Common</AwesomeButton>
      </Grid>   
    </Grid> 
  )
}

export default Router;