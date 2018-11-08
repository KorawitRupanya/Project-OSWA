import React, { Component } from "react";
import {
  Popover,
  Button,
  Modal,
  OverlayTrigger,
  Navbar,
  FormControl,
  Row,
  Col
} from "react-bootstrap";
import StartDatePicker from "./StartDatePicker";
import "../css/AddBtn.css";

class BiddingTimeInput extends Component {
  render() {
    return (
      <Navbar.Form>
        <p style={{ marginLeft: "5px" }}>Bidding time</p>
        <input
          id="input-start-time-area"
          type="number"
          placeholder="hh"
          hour={this.props.hour}
          onChange={this.props.handleChangeHr}
          required
        />
        <input
          id="input-start-time-area"
          type="number"
          placeholder="mm"
          minutes={this.props.minutes}
          onChange={this.props.handleChangeMin}
          required
        />
        <input
          id="input-start-time-area"
          type="number"
          placeholder="ss"
          seconds={this.props.seconds}
          onChange={this.props.handleChangeSec}
          required
        />
      </Navbar.Form>
    );
  }
}

class StartTimeInput extends Component {
  render() {
    return (
      <Navbar.Form>
        <p style={{ marginLeft: "5px" }}>time</p>
        <input
          id="input-start-time-area"
          type="number"
          placeholder="hh"
          starthour={this.props.starthour}
          onChange={this.props.handleChangeStartHr}
          required
        />
        <input
          id="input-start-time-area"
          type="number"
          placeholder="mm"
          startminutes={this.props.startminutes}
          onChange={this.props.handleChangeStartMin}
          required
        />
      </Navbar.Form>
    );
  }
}

class AddBtn extends Component {
  fileSelectHolder = event => {
    this.setState({
      selectedFile: event.target.file[0]
    });
  };
  fileUploadHolder = () => {};

  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      seconds: "",
      minutes: "",
      hour: "",
      startminutes: "",
      starthour: "",
      bidding_price: "",
      product_name: ""
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeHr = this.handleChangeHr.bind(this);
    this.handleChangeMin = this.handleChangeMin.bind(this);
    this.handleChangeSec = this.handleChangeSec.bind(this);
    this.handleChangeStartHr = this.handleChangeStartHr.bind(this);
    this.handleChangeStartMin = this.handleChangeStartMin.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChangeHr(event) {
    this.setState({
      hour: event.target.value
    });
  }

  handleChangeMin(event) {
    this.setState({
      minutes: event.target.value
    });
  }

  handleChangeSec(event) {
    this.setState({
      seconds: event.target.value
    });
  }

  handleChangeStartHr(event) {
    this.setState({
      starthour: event.target.value
    });
  }

  handleChangeStartMin(event) {
    this.setState({
      startminutes: event.target.value
    });
  }

  handleChangePrice(event) {
    this.setState({
      bidding_price: event.target.value
    });
  }

  handleChangeName(event) {
    this.setState({
      product_name: event.target.value
    });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="Terms and conditions">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Popover>
    );

    return (
      <div>
        <Button
          id="main-btn"
          bsStyle="warning"
          bsSize="large"
          onClick={this.handleShow}
        >
          Create new...
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new product card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Navbar>
              <Row>
                <Navbar.Form pullLeft>
                  <FormControl
                    id="input-name-area"
                    type="name"
                    placeholder="Product Name"
                    onChange={this.handleChangeName}
                  />
                </Navbar.Form>
              </Row>
              <Row>
                <Navbar.Form pullLeft>
                  <FormControl
                    id="input-details-area"
                    type="details"
                    placeholder="details...(optional)"
                  />
                </Navbar.Form>
              </Row>
              <Row>
                <Col md={2}>
                  <Navbar.Form>
                    <p style={{ marginLeft: "5px" }}>Start bidding day</p>
                    <StartDatePicker />
                  </Navbar.Form>
                </Col>
                <Col md={4}>
                  <StartTimeInput
                    starthour={this.state.starthour}
                    startminutes={this.state.startminutes}
                    handleChangeStartHr={this.handleChangeStartHr}
                    handleChangeStartMin={this.handleChangeStartMin}
                  />
                </Col>
              </Row>
              <Row>
                <BiddingTimeInput
                  hour={this.state.hour}
                  minutes={this.state.minutes}
                  seconds={this.state.seconds}
                  handleChangeHr={this.handleChangeHr}
                  handleChangeMin={this.handleChangeMin}
                  handleChangeSec={this.handleChangeSec}
                />
              </Row>
              <Row>
                <Navbar.Form>
                  <FormControl
                    id="input-bidding-price-area"
                    type="number"
                    placeholder="bidding price"
                    onChange={this.handleChangePrice}
                  />
                </Navbar.Form>
              </Row>
              <Row>
                <Navbar.Form>
                  <Row>
                    <Col md={2}>
                      <input type="file" onChange={this.fileHolder} />{" "}
                    </Col>
                    <Col md={3} style={{ marginLeft: "250px" }}>
                      <Button
                        disabled={
                          this.state.hour === "" ||
                          this.state.minutes === "" ||
                          this.state.seconds === "" ||
                          this.state.starthour === "" ||
                          this.startminutes === "" ||
                          this.state.bidding_price === "" ||
                          this.state.product_name === "" ||
                          this.state.hour < 0 ||
                          this.state.minutes < 0 ||
                          this.state.seconds < 0 ||
                          this.state.starthour < 0 ||
                          this.state.startminutes < 0 ||
                          this.state.bidding_price <= 0
                        }
                        onClick={this.fileHolder}
                        id="upload-button"
                      >
                        Upload
                      </Button>
                    </Col>
                  </Row>
                </Navbar.Form>
              </Row>
            </Navbar>

            <h5>Please read terms and conditions before place an auction.</h5>

            <p>
              <OverlayTrigger overlay={popover}>
                <a href="#popover">Terms and conditions.</a>
              </OverlayTrigger>{" "}
            </p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddBtn;
