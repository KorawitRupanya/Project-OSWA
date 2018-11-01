import React, { Component } from "react";
import ImageSlideshow from "./ImageSlideshow";
import { Col, Row } from "react-bootstrap";
import "../css/AuctionPageTemplate.css";
import { left } from "glamor";

class AuctionPageTemplate extends Component {
  render() {
    return (
      <div className="Auction-page">
        <Row className="show-grid">
          <Col id="image-slideshow" md={4}>
            <ImageSlideshow />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AuctionPageTemplate;
