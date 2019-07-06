import React, { Component } from "react";
import { Album } from "../../Components/Album";
import { common } from "../../Components/Album/Photos/Common";

class Gallery extends Component {
  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <Album photos={common} />
      </div>
    );
  }
}

export default Gallery;
