import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "../css/BiddingPriceBox.css";

class BiddingPriceBox extends Component {
  render() {
    return (
      <Table responsive id="table">
        <thead>
          <tr id="my-header">
            <th id="sub">#</th>
            <th id="sub">Username</th>
            <th id="sub">Price</th>
            <th id="sub">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default BiddingPriceBox;
