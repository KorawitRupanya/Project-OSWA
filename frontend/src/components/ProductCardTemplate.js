import React, { Component } from "react";
import {
  Button,
  Col,
  Thumbnail,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import "../css/ProductCardTemplate.css";
import pic from "../pictures/watch.png";



class CreateProductCard extends Component{
  render(){
    const popover = (
      <Popover id="modal-popover" title="XX-RATED BLACK">
        {props.time} <br />
        Starting price at {props.startingPrice}.
        <br />
        {props.detail}
      </Popover>
    );
  return(
    <Col id="product-card" xs={4} md={3}>
    <OverlayTrigger overlay={popover}>
      <a href="#popover">
        <Thumbnail src={pic}>
          <h3 className="product-card-caption">{props.produceName}</h3>
          <p>{props.time}</p>
          <Button bsStyle="primary">Learn more</Button>
        </Thumbnail>
      </a>
    </OverlayTrigger>
  </Col>
    
    )
  }
}

export default{
  CreateProductCard
};
