import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ContactEmailIcon from "@material-ui/icons/ContactMailRounded";
import PhoneIcon from "@material-ui/icons/PhoneRounded";
import WebIcon from "@material-ui/icons/WebRounded";
import Avatar from "@material-ui/core/Avatar";
import LocationOnIcon from "@material-ui/icons/LocationOnRounded";
import blue from "@material-ui/core/colors/blue";
import Grid from "@material-ui/core/Grid";

import { contact } from "../../Components/Album/Photos/Contact";

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

function createData(name, value, icon) {
  return { name, value, icon };
}

const rows = [
  createData("Email", "info@harbourhostel.ee", <ContactEmailIcon />),
  createData("Website", "https://harbourhostel.ee", <WebIcon />),
  createData("Phone no.", "+372 666 0045", <PhoneIcon />),
  createData(
    "Address",
    "14a Paadi, Tallinn City-Centre, 10151 Tallinn, Estonia",
    <LocationOnIcon />
  )
];

function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Typography>
        <h1>Contact</h1>
      </Typography>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="right"
        >
          <Grid item xs={12} sm={11} md={10} lg={10} align="center">
            <img className={classes.Image} src={contact[0].src} alt="about" />
          </Grid>
          <Grid item xs={12} sm={11} md={10} lg={10} align="center">
            <Paper className>
              <Table className={classes.table}>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        <Avatar style={{ color: blue[600] }}>{row.icon}</Avatar>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{row.value}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Contact;
