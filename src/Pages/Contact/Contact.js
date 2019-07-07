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

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
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
  createData("Website", "  https://harbourhostel.ee", <WebIcon />),
  createData("Phone No", "666 0045", <PhoneIcon />)
];

function Contact() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography>
        <h1>Contact</h1>
      </Typography>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Avatar>{row.icon}</Avatar>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.value}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default Contact;
