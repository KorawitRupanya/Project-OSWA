import React, { Component } from "react";
import { Jumbotron, Button, Col, Thumbnail } from "react-bootstrap";
import "../css/ProductCardTemplate.css";

import pic from "../pictures/watch.png";

class ProductCardTemplate extends Component {
  render() {
    return (
      <Col id="product-card" xs={4} md={3}>
        <Thumbnail src={pic}>
          <h3 className="product-card-caption">Watch</h3>
          <p>Bidding Today at 15:00</p>
          <Button bsStyle="primary">Learn more</Button>
        </Thumbnail>
      </Col>
    );
  }
}

export default ProductCardTemplate;
