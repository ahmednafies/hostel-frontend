import React, { Component } from "react";
import BackgroundSlider from "react-background-slider";
import { carousel } from "./Photos/Carousel";

class SlideShow extends Component {
  render() {
    return (
      <div>
        <BackgroundSlider
          images={carousel.map(photo => photo.src)}
          duration={5}
          transition={2}
        />
      </div>
    );
  }
}

export default SlideShow;
