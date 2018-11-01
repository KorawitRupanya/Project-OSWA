import React, { Component } from "react";
import ProductCardTemplate from "./ProductCardTemplate";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "../css/AllProductCard.css";

class AllProductCard extends Component {
  render() {
    return (
      <Grid fluid>
        <Button id="add-btn" bsStyle="warning">
          <strong>ADD</strong>
        </Button>
        <Row className="show-grid">
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
          <ProductCardTemplate />
        </Row>
      </Grid>
    );
  }
}

export default AllProductCard;
