import React, { Component } from "react";
import BackgroundSlider from "react-background-slider";
import { carousel } from "./Photos/Carousel";

class Carousel extends Component {
  render() {
    return (
      <div>
        <BackgroundSlider
          images={carousel.map(photo => photo.src)}
          duration={10}
          transition={4}
        />
      </div>
    );
  }
}

export default Carousel;
