import React, { Component } from "react";
import { Row, Col, Panel } from "react-bootstrap";
import "../css/BiddingDetail.css";

class BiddingDetail extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={6}>
            <small>Ends In:</small>
            <br />
            <strong id="current-time">00:14:36</strong>
          </Col>
          <Col md={6}>
            <small>Current Bid:</small>
            <br />
            <strong id="current-bid">250 THB</strong>
          </Col>
        </Row>
        <Row>
          <Panel id="current-winner" bsStyle="warning">
            <strong>1st: </strong>
            username.123
          </Panel>
        </Row>
      </div>
    );
  }
}

export default BiddingDetail;
