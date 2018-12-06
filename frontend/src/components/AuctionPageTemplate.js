import React, { Component } from "react";
import { Col, Well, Row, Button } from "react-bootstrap";
import ImageSlideshow from "./ImageSlideshow";
import BiddingDetail from "./BiddingDetail";
import ProductDetail from "./ProductDetail";
import Timer from "./Timer";
import "../css/AuctionPageTemplate.css";

// this.props.time;

class AuctionPageTemplate extends Component {
  constructor(props, context) {
    super(props, context);
    this.isTimesUP = this.isTimesUP.bind(this);
  }

  isTimesUP() {
    let now = new Date();
    let endTime = new Date(this.props.endTime * 1000);
    console.log("now:" + now);
    console.log("close: " + endTime);
    console.log("date now: " + now.getDate());
    console.log("time now: " + now.getTime());
    console.log("close date: " + endTime.getDate());
    console.log("close time: " + endTime.getTime());
    if (now.getTime() >= endTime.getTime()) {
      console.log("time's up!");
      return true;
    } else {
      console.log("nope!");
      return false;
    }
  }

  render() {
    return (
      <div className="Auction-page" style={{ height: "100%" }}>
        <Well id="main-card">
          <Row>
            <Col id="image-slideshow" md={4}>
              <ImageSlideshow pictureURL={this.props.pictureURL} />
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
                endTime={this.props.endTime}
              />
            </Col>
            {/* <Button onClick={this.isTimesUP}>Time</Button> */}
          </Row>
        </Well>

        <Well id="product-detail">
          <Row>
            <ProductDetail detail={this.props.detail} />
          </Row>
        </Well>
        <div style={{ height: "220px" }} />
      </div>
    );
  }
}

export default AuctionPageTemplate;
