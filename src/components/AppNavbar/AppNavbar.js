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
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import "./AppNavbar.css";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import navLogo from "../../images/navbarimg.png"

const AppNavbar = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isOpen, setIsOpen] = useState(false);
  console.log('cart', cartItems)
  const toggle = () => setIsOpen(!isOpen);
  const getTotal = () => {
    const total = cartItems.reduce((curTotal, item) => {
      const itemTotal = item.qty * item.price;
      curTotal = curTotal + itemTotal
      return curTotal;
    }, 0)
    return total;
  }

  return (
    <div>
      <Navbar className="app-navbar" expand="md" container="fluid" fixed="top">
        <NavbarBrand className="app-navbar-text" href="/">
          <img src={navLogo} alt="Morgan Freeman" height={48} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="app-navbar-text" href="/">
                Plant Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="app-navbar-text" href="/products">
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="app-navbar-text" href="/checkout">
                Checkout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="app-navbar-text"
                href="https://github.com/istuart50/apollo-botany"
                target="_blank"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown style={{ marginRight: "64px" }}>
            <DropdownToggle nav caret className="app-navbar-text">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </DropdownToggle>
            <DropdownMenu right>
              {cartItems.length ? (
                cartItems.map((item) => <CartItem item={item} />)
              ) : (
                <DropdownItem>No items in cart.</DropdownItem>
              )}
              <DropdownItem divider />
              <DropdownItem>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>
                    Total:
                  </span>
                  <span style={{ fontWeight: '600' }}>
                    ${getTotal()}
                  </span>
                </div>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/checkout">
                  <Button className="app-navbar-checkout-button">
                    Checkout
                  </Button>
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
