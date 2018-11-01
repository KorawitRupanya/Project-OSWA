import React, { Component } from "react";
import { Jumbotron, Button, Col , Thumbnail } from "react-bootstrap";
import "../css/ProductCardTemplate.css";

import pic from "../pictures/watch.png";


class ProductCardTemplate extends Component {
  render() {
    return (
      <Col id="product-card" xs={4} md={3}>
      <Thumbnail src={pic}>
        <h3 className = "product-card-caption">Watch</h3>
        <p>Bidding Today at 15:00</p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
          &nbsp;
          <Button bsStyle="default">add notification</Button>
        </p>
      </Thumbnail>
    </Col>
      // <Col id="product-card" xs={4} md={2} >
      //   <div class="container">
      //     <Jumbotron id="myCard">
      //       <h4>X Watch</h4>
            // <img
            //   class="fit-picture"
            //   src={pic}
            //   alt="Grapefruit slice atop a pile of other slices"
            // />
      //       <p id="time">Bidding today at 15:00</p>
      //       <Button bsStyle="primary" id="bualoay">
      //         Learn more
      //       </Button>
      //     </Jumbotron>
      //   </div>
      // </Col>
    );
  }
}

export default ProductCardTemplate;
