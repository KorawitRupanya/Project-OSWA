import React, { Component } from "react";
import {
  Button,
  Jumbotron,
  Col,
  Thumbnail,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import "../css/profile-template.css";

import pro from "../pictures/profile.png";

class ProfileTemplate extends Component {
  render() {
    const plate = (
      <Jumbotron id="plate">
        <img id="image" src={pro} />
        <h3>Name: Hairy Harry</h3>
        <p>
          <li>Member ID :007</li>
          <li>Call :191</li>
          <li>3 Own Auctions</li>
          <li>5 auctions were Bided </li>
        </p>
        <p>
          <Button bsStyle="primary">Edit Profile</Button>
        </p>
          <Button bsStyle="primary" md={10}>Sign Up</Button>
          <Button md={10}>Sign In</Button>
      </Jumbotron>
    );
    return plate;
  }
}

export default ProfileTemplate;
