import React, { Component } from "react";
import AuctionNav from "./AuctionNav";
import AuctionPageTemplate from "./AuctionPageTemplate";
import AllProductCard from "./AllProductCard";
import ProfileTemplate from "./profile-template";
import { Grid, Row, Col } from "react-bootstrap";
import "../css/App.css";
import { getFirebaseData } from "../../../backend/getFirebaseData";

class App extends Component {
  render() {
    getFirebaseData();
    return (
      <div className="App">
        <AuctionNav role="navigation" />
        <Grid fluid>
          <Row className="show-grid">
            <Col id="first-col" md={3}>
              <ProfileTemplate />
            </Col>
            <Col id="second-col" md={8}>
              {/* This is a main component that show on index page.
              Now we have 2 large components that you can change, 
              which are ...
              1. AllProductCard
              2. AuctionPageTemplate

              If you want to show "AuctionPageTemplate", put comment below this out. */}

              {/* <AuctionPageTemplate/> */}
              <AllProductCard />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
