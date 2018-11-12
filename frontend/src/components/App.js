import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import AuctionNav from "./AuctionNav";
import AuctionPageTemplate from "./AuctionPageTemplate";
import AllProductCard from "./AllProductCard";
import { Grid, Row, Col } from "react-bootstrap";
import style from "../css/App.css";
style.use();

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <AuctionNav role="navigation" />
      <Grid fluid>
        <Row className="show-grid">
          <Col id="first-col" md={2}>
            <strong>For side nav-bar</strong>
          </Col>
          <Col id="second-col" md={8}>
            {/* Component */}
          </Col>
          <Col md={2}>
            <strong style={{ color: "orange" }}>For ad?</strong>
          </Col>
        </Row>
      </Grid>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
