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
  Row
} from "react-bootstrap";
import "../css/AddBtn.css";
import axios from "axios";

class AddBtn extends Component {
  fileSelectHolder = event => {
    this.setState({
      selectedFile: event.target.file[0]
    })
  }
  fileUploadHolder = () => {
    axios.post();
  }

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
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
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
                  <Row>
                  <div>
                    <input type="file" onChange={this.fileHolder} />{" "}
                    <Button onClick={this.fileHolder} id="upload-button">Upload</Button>
                  </div>{" "}
                  </Row>
                </Navbar.Form>
              </Row>
            </Navbar>

            <h3>Input your auction product details here.</h3>

            <p>
              there is a{" "}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{" "}
              here
            </p>
            <h4>Tooltips in a modal</h4>
            <p>
              there is a{" "}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{" "}
              here
            </p>
            <hr />
            <h4>O</h4>
            <p>a</p>
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
