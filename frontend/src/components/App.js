import React, { Component } from "react";
import AuctionNav from "./AuctionNav";
import AuctionPageTemplate from "./AuctionPageTemplate";
import AllProductCard from "./AllProductCard";
import ProfileTemplate from "./profile-template";
import { Grid, Row, Col } from "react-bootstrap";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuctionNav role="navigation" />
        <Grid fluid>
          <Row className="show-grid">
            <Col id="first-col" md={3}>
              <ProfileTemplate />
            </Col>
            <Col id="second-col" md={8}>
              <AllProductCard />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
