import React, { Component, form } from "react";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import Picker from "react-month-picker";
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
      }
      if (subClicked) {
        return (
          <div>
            <h1> Invoice </h1>
            <dir/>
            <form>
              <ControlLabel>Name on Card</ControlLabel>
              <FormControl type="text" />
              <dir/>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Insert Your Credits Card</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Credits Card Numbers"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                {/* <HelpBlock>Validation is based on Numbers.</HelpBlock> */}
              </FormGroup>
            </form>
            <FormGroup>
              {/* Card Expiration:
            <select name="expireMM" id="expireMM">
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select name="expireYY" id="expireYY">
              <option value="">Year</option>
              <option value="10">2010</option>
              <option value="11">2011</option>
              <option value="12">2012</option>
            </select>
            <input
              class="inputCard"
              type="hidden"
              name="expiry"
              id="expiry"
              maxlength="4"
            /> */}
              <ControlLabel>Expiry date</ControlLabel>
              <FormControl type="month"/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Security Code </ControlLabel>{" "}
              <FormControl
                type="number"
                min="000"
                max="9999"
                placeholder="CVC"
              />
            </FormGroup>
            {/* <ul>
                <li>
                  <label>Pick A Month</label>
                  <div>
                    <Picker
                      ref="pickRange"
                      years={{ min: 2017, max: 2077}}
                      range={mrange}
                      lang={pickerLang}
                      // theme="dark"
                      onChange={this.handleRangeChange}
                      onDismiss={this.handleRangeDismiss}
                    />
                  </div>
                </li>
              </ul> */}{" "}
            <dir/>
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
