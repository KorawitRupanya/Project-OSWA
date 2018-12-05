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
          <img src={this.props.pictureURL} alt="picture1" />
        </div>
        <div className="each-slide">
          <img src={this.props.pictureURL} alt="picture2" />
        </div>
      </Slide>
    );
  }
}

export default ImageSlideshow;
