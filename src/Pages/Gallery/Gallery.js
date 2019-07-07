import React from "react";
import { Album } from "../../Components/Album";
import { common } from "../../Components/Album/Photos/Common";
import Typography from "@material-ui/core/Typography";

function Gallery() {
  return (
    <div>
      <Typography>
        <h1>Gallery</h1>
      </Typography>
      <Album photos={common} />
    </div>
  );
}

export default Gallery;
