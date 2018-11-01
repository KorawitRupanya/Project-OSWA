import React, { Component } from "react";
import ImageSlideshow from "./ImageSlideshow";
import { Col, Alert } from "react-bootstrap";
import "../css/AuctionPageTemplate.css";

class AuctionPageTemplate extends Component {
  render() {
    return (
      <div className="Auction-page">
        <Col id="image-slideshow" md={4} style={{ "margin-left": "20px" }}>
          <ImageSlideshow />
        </Col>
        <Col id="bidding-detail" md={6}>
          <Alert bsStyle="warning" />
        </Col>
      </div>
    );
  }
}

export default AuctionPageTemplate;
