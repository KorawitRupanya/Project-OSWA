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
import "../css/AuctionNav.css";

class AuctionNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect id="my-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <strong>OSWA</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse style={{ width: "1440px" }}>
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
              <MenuItem id="item" eventKey={3.1}>
                Feature1
              </MenuItem>
              <MenuItem eventKey={3.2}>Feature2</MenuItem>
              <MenuItem eventKey={3.3}>Feature3</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated Feature</MenuItem>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
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
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AuctionNav;
