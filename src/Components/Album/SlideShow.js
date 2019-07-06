import React from "react";
import { carousel } from "./Photos/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = carousel.map(image => (
  <div>
    <img src={image.src} alt={image.src} />
    <p className="legend">Welcome to Harbour Hostel Tallinn</p>
  </div>
));

function SlideShow() {
  return <Carousel autoPlay={true}>{images}</Carousel>;
}

export default SlideShow;
