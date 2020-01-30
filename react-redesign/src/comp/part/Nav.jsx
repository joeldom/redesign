import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavMenu extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <>
        <Navbar color="faded" dark>
          <NavbarBrand tag={Link} to="/">
            Joel<strong>Dombek</strong>
          </NavbarBrand>
          <Nav navbar>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
            <NavLink tag={Link} to="/">
              Features
            </NavLink>
            <NavLink tag={Link} to="/">
              Pricing
            </NavLink>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavMenu;
