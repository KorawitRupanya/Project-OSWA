import React, { Component } from "react";
import AuctionNav from "./AuctionNav";
import AuctionPageTemplate from "./AuctionPageTemplate";
import AllProductCard from "./AllProductCard";
import { Grid, Row, Col } from "react-bootstrap";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuctionNav role="navigation" />
        <Grid fluid>
          <Row className="show-grid">
            <Col id="first-col" md={2}>
              <strong>For side nav-bar</strong>
            </Col>
            <Col id="second-col" md={8}>
              <AllProductCard />
            </Col>
            <Col md={2}>
              <strong style={{ color: "orange" }}>For ad?</strong>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
