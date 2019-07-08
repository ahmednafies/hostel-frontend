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
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
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
      <Paper className={classes.root}>
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
    </div>
  );
}
export default Contact;
