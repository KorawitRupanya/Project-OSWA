import React, { Component, form } from "react";
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";
import pro from "../pictures/profile.png";
import "../css/AuctionPageTemplate.css";

class SignInBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isSubClicked: false
    };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.buttonUnClicked = this.buttonUnClicked.bind(this);
    this.subButtonClicked = this.subButtonClicked.bind(this);
    this.subButtonUnClicked = this.subButtonUnClicked.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  getValidationState() {
    const cardNumLen = this.state.value.length;
    if (cardNumLen > 6) return "success";
    else return "error";
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
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

  subButtonClicked() {
    this.setState({
      isSubClicked: true
    });
  }

  subButtonUnClicked() {
    this.setState({
      isSubClicked: false
    });
  }

  saveClicked() {}

  render() {
    const clicked = this.state.isClicked;
    const subClicked = this.state.isSubClicked;
    if (clicked) {
      if (!subClicked) {
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
            </p>
            <p>
              <Button bsStyle="primary" md={10} onClick={this.subButtonClicked}>
                Payment Methods
              </Button>
            </p>
            <p>
              <Button bsStyle="warning" md={10} onClick={this.buttonUnClicked}>
                Logout
              </Button>
            </p>
          </div>
        );
      } if (subClicked) {
        return (
          <div>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Insert Your Credits Card Numbers</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on Numbers.</HelpBlock>
              </FormGroup>
            </form>
            <Button bsStyle="primary" md={10} onClick={this.subButtonUnClicked}>
              Save
            </Button>
          </div>
        );
      }
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
