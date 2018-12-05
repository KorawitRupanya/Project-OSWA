import React, { Component } from "react";

class ProductDetail extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div style={{ marginLeft: "30px" }}>
        <h2 style={{ color: "orange" }}>Product detail</h2>
        <p>
         {this.props.detail}
        </p>
      </div>
    );
  }
}

export default ProductDetail;
