import React, { Component } from "react";
import {
  Popover,
  Button,
  Tooltip,
  Modal,
  OverlayTrigger,
  Navbar,
  FormControl,
  FormGroup,
  Row,
  Col
} from "react-bootstrap";
import "../css/AddBtn.css";

class AddBtn extends Component {
  fileSelectHolder = event => {
    this.setState({
      selectedFile: event.target.file[0]
    });
  };
  fileUploadHolder = () => {};

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

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
            {/* <h4>Text in a modal</h4> */}
            <Navbar>
              <Row>
                <Navbar.Form pullLeft>
                  <FormControl
                    id="input-name-area"
                    type="name"
                    placeholder="Product Name"
                  />
                </Navbar.Form>
              </Row>
              <Row>
                <Navbar.Form pullLeft>
                  <FormControl
                    id="input-details-area"
                    type="details"
                    placeholder="details..."
                  />
                </Navbar.Form>
              </Row>
              <Row>
                <Navbar.Form>
                  <FormControl
                    id="input-time-area"
                    type="time"
                    placeholder="bidding time"
                  />
                </Navbar.Form>
              </Row>
              <Row>
                <Navbar.Form>
                  <FormControl
                    id="input-bidding-price-area"
                    type="text"
                    placeholder="bidding price"
                  />
                </Navbar.Form>
              </Row>
              <Row>
                <Navbar.Form>
                  <Row>
                    <Col md={2}>
                      <input type="file" onChange={this.fileHolder} />{" "}
                    </Col>
                    <Col md={3} style={{ "margin-left": "250px" }}>
                      <Button onClick={this.fileHolder} id="upload-button">
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
