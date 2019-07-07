import React from "react";
import PropTypes from "prop-types";
import { Album } from "../../Components/Album";
import Typography from "@material-ui/core/Typography";
import rooms from "./roomData";

function RoomView({ match }) {
  const getRoom = () => {
    for (var index in rooms) {
      if (match.params.path === rooms[index].path) {
        return rooms[index].data;
      }
    }
  };
  return (
    <div>
      <Typography>
        <h1>{match.params.room}</h1>
      </Typography>
      <Album photos={getRoom()} />
    </div>
  );
}

RoomView.propTypes = {
  name: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired
};

export default RoomView;
