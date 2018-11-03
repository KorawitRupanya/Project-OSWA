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
    })
  }
  fileUploadHolder = () => {
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
      <Popover id="modal-popover" title="Terms and conditions">
        Harry Potter and the Philosopher's Stone
Chapter 1 of 18
CHAPTER ONE - THE BOY WHO LIVED
Next Chapter
Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense. 
Mr. Dursley was the director of a firm called Grunnings, which made 
drills. He was a big, beefy man with hardly any neck, although he did 
have a very large mustache. Mrs. Dursley was thin and blonde and had 
nearly twice the usual amount of neck, which came in very useful as she 
spent so much of her time craning over garden fences, spying on the 
neighbors. The Dursleys had a small son called Dudley and in their 
opinion there was no finer boy anywhere. 
The Dursleys had everything they wanted, but they also had a secret, and 
their greatest fear was that somebody would discover it. They didn't 
think they could bear it if anyone found out about the Potters. Mrs. 
Potter was Mrs. Dursley's sister, but they hadn't met for several years; 
in fact, Mrs. Dursley pretended she didn't have a sister, because her 
sister and her good-for-nothing husband were as unDursleyish as it was 
possible to be. The Dursleys shuddered to think what the neighbors would 
say if the Potters arrived in the street. The Dursleys knew that the 
Potters had a small son, too, but they had never even seen him. This boy 
was another good reason for keeping the Potters away; they didn't want 
Dudley mixing with a child like that. 
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
                  <Col md={3} style={{'margin-left': '250px'}}>
                    <Button onClick={this.fileHolder} id="upload-button">Upload</Button>
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
              {" "}
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
