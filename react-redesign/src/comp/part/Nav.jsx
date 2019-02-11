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
      <React.Fragment>
        <Navbar fixed={"top"} color="light" light expand="md">
          <div className="container">
            <NavbarBrand tag={Link} to="/" />
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavMenu;
