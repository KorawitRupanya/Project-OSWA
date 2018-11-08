import React, { Component } from "react";
import { Button } from "react-bootstrap";
import pro from "../pictures/profile.png";
import "../css/AuctionPageTemplate.css";

class SignInBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.buttonUnClicked = this.buttonUnClicked.bind(this);
  }

  buttonClicked() {
    console.log("clicked");
    this.setState({
      isClicked: true
    });
  }

  buttonUnClicked(){
    console.log("not clicked yet")
    this.setState({
      isClicked: false
    });
  }

  render() {
    const clicked = this.state.isClicked;
    console.log(clicked);
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
    } else {
      return (
        <div>
          <Button bsStyle="primary" md={10}>
            Sign Up
          </Button>
          <hr
            style={{
              color: "gray",
              backgroundColor: "gray",
              height: 3
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
