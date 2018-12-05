import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../css/BiddingDetail.css";
import { auth, database } from "../../../backend/firebase";

class BiddingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggest_price: parseInt(this.props.currentPrice), //startPrice
      bidding_price: 100, //biddingPrice
      bidding_time: 15 //biddingTime
    };
  }

  placeBid = e => {
    e.preventDefault();
    var user = auth.currentUser;

    if (user != null) {
      // console.log("Email: " + user.email); //email that user sign up

      var currentPrice = parseInt(this.props.currentPrice);
      var bidPrice = this.state.suggest_price;

      if (bidPrice > currentPrice) {
        var produceID = this.props.productID;
        var productRef = database.ref("auction_cards/" + produceID);

        productRef.update({ price: bidPrice, currentUser: user.email });
      }
    }
  };

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
        <Row style={{ textAlign: "left", marginLeft: "5px" }}>
          <small>Current Bid:</small>
          <br />
          <strong id="current-bid">{this.props.currentPrice} THB</strong>
        </Row>
        <Row id="current-winner">
          <img
            id="crown-pic"
            src={"https://i.ibb.co/7grsyzL/crown.png"}
            alt="crown"
          />
          {this.props.currentUser}
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
            <Button
              id="bid-btn"
              bsStyle="warning"
              bsSize="large"
              onClick={evt => this.placeBid(evt)}
            >
              <strong style={{ color: "white" }}>:: Place bid ::</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BiddingDetail;
