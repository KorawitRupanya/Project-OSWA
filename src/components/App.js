import React, { Component } from "react";
import AuctionNav from "./AuctionNav.js";
import { Grid, Row, Col } from "react-bootstrap";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuctionNav role="navigation" />
        <body>
          <Grid fluid>
            <Row className="show-grid">
              <Col id="first-col" xs={6} md={2}>
                <strong>For side nav-bar</strong>
              </Col>
              <Col xs={12} md={10}>
                <p id="paragraph">For auction product card</p>
              </Col>
            </Row>
          </Grid>
        </body>
      </div>
    );
  }
}

export default App;
