import React, { Component } from "react";
import { Col, Well, Row } from "react-bootstrap";
import ImageSlideshow from "./ImageSlideshow";
import BiddingDetail from "./BiddingDetail";
import ProductDetail from "./ProductDetail";
import Timer from "./Timer";
import "../css/AuctionPageTemplate.css";

class AuctionPageTemplate extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="Auction-page">
        <div id="timer">
          <Timer />
        </div>
        <Well id="main-card">
          <Row>
            <Col id="image-slideshow" md={4}>
              <ImageSlideshow />
            </Col>
            <Col md={1}>
              <div className="vl" />
            </Col>
            <Col id="bidding-detail" md={6}>
              <h1 id="product-name">{this.props.productName}</h1>
              {/*edit this when conect page together */}
              <BiddingDetail
                currentPrice={this.props.price}
                currentUser={this.props.currentUser}
                productID={this.props.productID}
              />
            </Col>
          </Row>
        </Well>

        <Well id="product-detail">
          <Row>
            <ProductDetail detail={this.props.detail} />
          </Row>
        </Well>
      </div>
    );
  }
}

export default AuctionPageTemplate;
