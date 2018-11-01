import React, { Component } from "react";
import ImageSlideshow from "./ImageSlideshow";
import { Col, Well, Row } from "react-bootstrap";
import "../css/AuctionPageTemplate.css";

class AuctionPageTemplate extends Component {
  render() {
    return (
      <div className="Auction-page">
        <Well id="main-card">
          <Row>
            <Col id="image-slideshow" md={4}>
              <ImageSlideshow />
            </Col>
            <Col id="bidding-detail" md={5} style={{ color: "white" }}>
              <p>Bananaaaaaaaaaaaaaaa</p>
              <p>Bananaaaaaaaaaaaaaaa</p>
              <p>Bananaaaaaaaaaaaaaaa</p>
              <p>Bananaaaaaaaaaaaaaaa</p>
              <p>Bananaaaaaaaaaaaaaaa</p>
            </Col>
          </Row>
        </Well>
      </div>
    );
  }
}

export default AuctionPageTemplate;
