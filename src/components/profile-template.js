import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import SignInBar from "./SignInButton";
import "../css/profile-template.css";

class ProfileTemplate extends Component {
  render() {
    const plate = (
      <Jumbotron id="plate">
        <SignInBar />
      </Jumbotron>
    );
    return plate;
  }
}

export default ProfileTemplate;
