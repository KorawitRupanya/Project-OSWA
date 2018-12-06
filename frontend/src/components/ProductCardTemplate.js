import React, { Component } from "react";
import ReactDOM from "react-dom";
import AuctionPageTemplate from "./AuctionPageTemplate";
import {
  Button,
  Col,
  Thumbnail,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import "../css/ProductCardTemplate.css";
import pic from "../pictures/watch.png";

class CreateProductCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var element = document.getElementById("main-components-root");
    element.parentNode.removeChild(element);
    var auction = document.createElement("div");
    auction.setAttribute("id", "main-components-root");
    document.getElementById("second-col").appendChild(auction);
    ReactDOM.render(
      <AuctionPageTemplate
        productName={this.props.productName}
        detail={this.props.detail}
        price={this.props.startingPrice}
        time={this.props.time}
        endTime={this.props.endTime}
        currentUser={this.props.currentUser}
        productID={this.props.productID}
        pictureURL={this.props.pictureURL}
      />,
      document.getElementById("main-components-root")
    );
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="Auction Product">
        {this.props.date} <br />
        Starting price at {this.props.startingPrice}.
        <br />
        {this.props.detail}
      </Popover>
    );

    return (
      <div>
        <Col id="product-card" xs={4} md={3}>
          <OverlayTrigger overlay={popover}>
            <a href="#popover">
              <Thumbnail src={this.props.pictureURL} id="card">
                <strong className="product-card-caption">
                  {this.props.productName}
                </strong>
                <p style={{ fontSize: "16px" }}>{this.props.detail}</p>
                <Button
                  style={{ width: "165px", marginBottom: "7px" }}
                  bsStyle="primary"
                  onClick={this.handleClick}
                >
                  Bid this!
                </Button>
              </Thumbnail>
            </a>
          </OverlayTrigger>
        </Col>
      </div>
    );
  }
}

export default CreateProductCard;
