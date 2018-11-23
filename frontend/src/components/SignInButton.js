import React, { Component } from "react";
import { Button } from "react-bootstrap";
import pro from "../pictures/profile.png";
import "../css/AuctionPageTemplate.css";

class SignInBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isSignClicked: false
    };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.buttonUnClicked = this.buttonUnClicked.bind(this);
    this.signClicked = this.signClicked.bind(this);
    this.signUnClicked = this.signUnClicked.bind(this);
  }

  buttonClicked() {
    this.setState({
      isClicked: true
    });
  }

  buttonUnClicked() {
    this.setState({
      isClicked: false
    });
  }

  signClicked() {
    this.setState({
      isSignClicked: true
    });
  }

  signUnClicked() {
    this.setState({
      isSignClicked: false
    });
  }

  saveClicked() {}

  render() {
    const clicked = this.state.isClicked;
    const signClicked = this.state.isSignClicked;
    if (clicked) {
      return (
        <div>
          <img id="image" src={pro} alt={"Profile pictures"} />
          <h3>Name: Hairy Harry</h3>
          <p>
            <li>Member ID :007</li>
            <li>Call :191</li>
            <li>3 Own Auctions</li>
            <li>5 auctions were Bidded </li>
          </p>
          <p>
            <Button bsStyle="primary">Edit Profile</Button>
            <Button bsStyle="warning" md={10} onClick={this.buttonUnClicked}>
              Logout
            </Button>
          </p>
        </div>
      );
    } else if (signClicked) {
      return (
        <div>
          <h2>Sign Up</h2>
          <dir/>
          <input placeholder="Username"/>
          <input placeholder="Password"/>
          <dir/>
          <Button bsStyle="warning" md={10} onClick={this.signUnClicked}>
              Enter
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button bsStyle="primary" md={10} onClick={this.signClicked}>
            Sign Up
          </Button>
          <hr
            style={{
              color: "gray",
              backgroundColor: "gray",
              height: 1
            }}
          />
          <Button bsStyle="warning" onClick={this.buttonClicked}>
            Sign in
          </Button>
        </div>
      );
    }
  }
}

export default SignInBar;
