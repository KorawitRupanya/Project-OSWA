import React, { Component } from "react";
import {
  Jumbotron,
  Button,
  Col,
  Thumbnail,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import "../css/ProductCardTemplate.css";

import pic from "../pictures/watch.png";

class ProductCardTemplate extends Component {
  render() {
    const popover = (
      <Popover id="modal-popover" title="XX-RATED BLACK">
        Bidding Today at 15:00 <br />
        Starting price at $75.
        <br />
        details.........
      </Popover>
    );
    return (
      <Col id="product-card" xs={4} md={3}>
        <OverlayTrigger overlay={popover}>
          <a href="#popover">
            <Thumbnail src={pic}>
              <h3 className="product-card-caption">Watch</h3>
              <p>Bidding Today at 15:00</p>
              <Button bsStyle="primary">Learn more</Button>
            </Thumbnail>
          </a>
        </OverlayTrigger>
      </Col>
    );
  }
}

export default ProductCardTemplate;
