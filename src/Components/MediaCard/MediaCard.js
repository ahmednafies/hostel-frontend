import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },

  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: blue[800]
  }
});

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Link
      to={"/room/" + props.room.path}
      style={{ textDecoration: "none", color: blue[900] }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.room.src}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.room.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

MediaCard.propTypes = {
  room: PropTypes.object.isRequired
};

export default MediaCard;
