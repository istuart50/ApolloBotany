import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import "./AppNavbar.css";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light dark expand="md" container="fluid" fixed="top">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/istuart50/apollo-botany">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown style={{ marginRight: "64px" }}>
            <DropdownToggle nav caret style={{ color: "white" }}>
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <div style={{ display: "flex" }}>
                  <img
                    height={64}
                    src="https://picsum.photos/300/200"
                    alt="product"
                    style={{ marginRight: "8px" }}
                  />
                  <div>
                    <h5>Product Name</h5>
                    <div style={{ display: "flex" }}>
                      <input
                        style={{ width: "50px" }}
                        type="number"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      />
                      <h6>Price: $50</h6>
                    </div>
                  </div>
                </div>
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem>
                <Link to="/checkout">
                  <Button>Checkout</Button>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
