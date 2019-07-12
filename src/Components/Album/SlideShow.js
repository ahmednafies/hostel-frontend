import React from "react";
import BackgroundSlider from "react-background-slider";
import { carousel } from "./Photos/Carousel";

function SlideShow() {
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

export default SlideShow;
