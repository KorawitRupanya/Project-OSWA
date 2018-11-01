import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
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
        <Row id="current-winner">
          <div>
            <strong>1st: </strong>
            username.123
          </div>
        </Row>
        <Row>
          <Col md={6}>
            <small>Place Your Bid:</small>
            <br />
            <ButtonGroup>
              <Button> - </Button>
              <Button>260</Button>
              <Button> + </Button>
            </ButtonGroup>
          </Col>
          <Col md={6}>
            <Button id="bid-btn" bsStyle="warning" bsSize="large">
              <strong>:: Place bid ::</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BiddingDetail;
