import React, { Component } from "react";
import { Col, Well, Row } from "react-bootstrap";
import ImageSlideshow from "./ImageSlideshow";
import BiddingDetail from "./BiddingDetail";
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
            <Col md={1}>
              <div class="vl" />
            </Col>
            <Col id="bidding-detail" md={4}>
              <h1 id="product-name">Product's name</h1>
              <BiddingDetail />
            </Col>
          </Row>
        </Well>
      </div>
    );
  }
}

export default AuctionPageTemplate;
