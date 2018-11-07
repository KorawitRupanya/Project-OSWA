import React, { Component } from "react";
import { Col, Well, Row } from "react-bootstrap";
import ImageSlideshow from "./ImageSlideshow";
import BiddingDetail from "./BiddingDetail";
import BiddingPriceBox from "./BiddingPriceBox";
import ProductDetail from "./ProductDetail";
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
              <div className="vl" />
            </Col>
            <Col id="bidding-detail" md={6}>
              <h1 id="product-name">Product's name</h1>
              <BiddingDetail />
            </Col>
          </Row>
        </Well>
        <Well id="bidding-price-box">
          <Row>
            <BiddingPriceBox />
          </Row>
        </Well>
        <Well id="product-detail">
          <Row>
            <ProductDetail />
          </Row>
        </Well>
      </div>
    );
  }
}

export default AuctionPageTemplate;
