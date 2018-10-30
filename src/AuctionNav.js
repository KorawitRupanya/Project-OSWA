import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import "./AuctionNav.css";

class AuctionNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <strong>OSWA</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem id="item" eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem id="item" eventKey={2} href="#">
              My auction
            </NavItem>
            <NavItem id="item" eventKey={2} href="#">
              Auction history
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Feature1</MenuItem>
              <MenuItem eventKey={3.2}>Feature2</MenuItem>
              <MenuItem eventKey={3.3}>Feature3</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated Feature</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl
                    id="search-area"
                    type="text"
                    placeholder="Search"
                  />
                </FormGroup>{" "}
                <Button id="submit-button" type="submit" bsStyle="warning">
                  Submit
                </Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AuctionNav;
