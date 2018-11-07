import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import crown from "../pictures/crown.png";
import Timer from "./Timer";
import "../css/BiddingDetail.css";

class BiddingDetail extends Component {
  constructor(startPrice, biddingPrice, biddingTime) {
    super();
    this.state = {
      suggest_price: 10, //startPrice
      bidding_price: 5, //biddingPrice
      bidding_time: 15 //biddingTime
    };
  }

  onClickDecreaseButton = () => {
    var suggestPrice = this.state.suggest_price,
      biddingPrice = this.state.bidding_price,
      newPrice = suggestPrice;

    if (suggestPrice - biddingPrice >= 10)
      newPrice = suggestPrice - biddingPrice;
    this.setState({
      suggest_price: newPrice
    });
  };

  onClickIncreaseButton = () => {
    this.setState({
      suggest_price: this.state.suggest_price + this.state.bidding_price
    });
  };

  render() {
    return (
      <div>
        <Row style={{ textAlign: "left" }}>
          <Col md={4}>
            <small>Ends In:</small>
            <br />
            <strong id="current-time">00:14:36</strong>
          </Col>
          <Col md={8}>
            <small>Current Bid:</small>
            <br />
            <strong id="current-bid">250 THB</strong>
          </Col>
        </Row>
        <Row id="current-winner">
          <img id="crown-pic" src={crown} alt="crown" />
          username.123
        </Row>
        <Row>
          <Col md={5} style={{ textAlign: "left", marginLeft: "5px" }}>
            <small>Place Your Bid:</small>
            <br />
            <div id="bidding-price-set">
              <Button
                id="bid-price-control-btn"
                onClick={this.onClickDecreaseButton}
              >
                {" "}
                -{" "}
              </Button>
              <strong id="suggest-price">{this.state.suggest_price}</strong>
              <Button
                id="bid-price-control-btn"
                onClick={this.onClickIncreaseButton}
              >
                {" "}
                +{" "}
              </Button>
            </div>
          </Col>
          <Col md={5}>
            <Button id="bid-btn" bsStyle="warning" bsSize="large">
              <strong>:: Place bid ::</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BiddingDetail;
