import React, { Component } from "react";
import {
  Button,
  Col,
  Thumbnail,
  OverlayTrigger,
  Popover,
  Modal,
  Navbar,
  FormControl,
  Row,
} from "react-bootstrap";
import "../css/ProductCardTemplate.css";
import pic from "../pictures/watch.png";



class CreateProductCard extends Component{

  constructor(props, context) {
    super(props, context);
  }

  render(){
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
          <h3 className="product-card-caption">{this.props.produceName}</h3>
          <p>{this.props.time}</p>
           <Button bsStyle="primary">Bid this!</Button>
        </Thumbnail>
      </a>
    </OverlayTrigger>
  </Col>
    </div>
  );
}
  }


export default CreateProductCard;
