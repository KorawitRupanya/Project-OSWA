import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

class ImageSlideshow extends Component {
  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    };
    return (
      <Slide {...properties} style={{ marginTop: "20px" }}>
        <div className="each-slide">
          <img
            src={"https://i.ibb.co/nzsrbmZ/broadway-3-grande.jpg"}
            alt="hamster1"
          />
        </div>
        <div className="each-slide">
          <img src={"https://i.ibb.co/M2dkmFD/002.jpg"} alt="hamster2" />
        </div>
        <div className="each-slide">
          <img src={"https://i.ibb.co/gJcv0Zx/watch.png"} alt="hamster3" />
        </div>
      </Slide>
    );
  }
}

export default ImageSlideshow;
