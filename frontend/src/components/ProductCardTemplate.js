import React, { Component } from "react";
import ReactDOM from "react-dom";
import AuctionPageTemplate from "./AuctionPageTemplate";
import {
  Button,
  Col,
  Thumbnail,
  OverlayTrigger,
  Popover,
  Modal,
  Navbar,
  FormControl,
  Row
} from "react-bootstrap";
import "../css/ProductCardTemplate.css";
import pic from "../pictures/watch.png";

class CreateProductCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("product card temp: click");
    var element = document.getElementById("main-components-root");
    element.parentNode.removeChild(element);
    var auction = document.createElement("div");
    auction.setAttribute("id", "main-components-root");
    document.getElementById("second-col").appendChild(auction);
    ReactDOM.render(
      <AuctionPageTemplate
        productName={this.props.productName}
        detail={this.props.detail}
        startingPrice={this.props.price}
        time={this.props.date}
      />,
      document.getElementById("main-components-root")
    );
    console.log("name: " + this.props.productName);
    console.log("detail: " + this.props.detail);
    console.log("price: " + this.props.startingPrice);
    console.log("time: " + this.props.time);
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="Auction Product">
        {this.props.time} <br />
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
              <Thumbnail src={pic}>
                <h3 className="product-card-caption">
                  {this.props.productName}
                </h3>
                <p>{this.props.time}</p>
                <Button bsStyle="primary" onClick={this.handleClick}>
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
