import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function NavButton() {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" aria-label="Location" className={classes.fab}>
        <LocationOnIcon />
      </Fab>
    </div>
  );
}

export default NavButton;