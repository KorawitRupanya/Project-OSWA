import React, { Component } from "react";
import { Jumbotron, Button, Col } from "react-bootstrap";
import "../css/ProductCardTemplate.css";
import pic from "../pictures/watch.png";

class ProductCardTemplate extends Component {
  render() {
    return (
      <Col id="product-card" xs={4} md={2} >
        <div class="container">
          <Jumbotron id="myCard">
            <h4>X Watch</h4>
            <img
              class="fit-picture"
              src={pic}
              alt="Grapefruit slice atop a pile of other slices"
            />
            <p id="time">Bidding today at 15:00</p>
            <Button bsStyle="primary" id="bualoay">
              Learn more
            </Button>
          </Jumbotron>
        </div>
      </Col>
    );
  }
}

export default ProductCardTemplate;
