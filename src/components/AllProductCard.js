import React, { Component } from "react";
import ProductCardTemplate from "./ProductCardTemplate";
import AddBtn from "./AddBtn";
import { Grid, Row } from "react-bootstrap";
import "../css/AllProductCard.css";

class AllProductCard extends Component {
  render() {
    return (
      <Grid fluid>
        <AddBtn />
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
