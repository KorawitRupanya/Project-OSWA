import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import pic1 from "../pictures/1.jpg";
import pic2 from "../pictures/2.jpg";
import pic3 from "../pictures/3.jpg";

class ImageSlideshow extends Component {
  render() {
    const slideImages = [pic1, pic2, pic3];

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    };
    return (
      <Slide {...properties} style={{ "margin-top": "20px" }}>
        <div className="each-slide">
          <img src={slideImages[0]} alt="hamster1" />
        </div>
        <div className="each-slide">
          <img src={slideImages[1]} alt="hamster2" />
        </div>
        <div className="each-slide">
          <img src={slideImages[2]} alt="hamster3" />
        </div>
      </Slide>
    );
  }
}

export default ImageSlideshow;
