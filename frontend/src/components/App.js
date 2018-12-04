import React, { Component } from "react";
import AuctionNav from "./AuctionNav";
import AuctionPageTemplate from "./AuctionPageTemplate";
import AllProductCard from "./AllProductCard";
import ProfileTemplate from "./profile-template";
import { Grid, Row, Col } from "react-bootstrap";
import "../css/App.css";
import { waitData } from "../../../backend/getFirebaseData";

class App extends Component {
  render() {
    waitData();
    return (
      <div className="App">
        <AuctionNav role="navigation" />
        <Grid fluid style={{ zIndex: "1" }}>
          <Row className="show-grid">
            <Col id="first-col" md={3} style={{ marginTop: "60px" }}>
              <ProfileTemplate />
            </Col>
            <Col id="second-col" md={8}>
              {/* <AllProductCard /> */}
              <AuctionPageTemplate />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
