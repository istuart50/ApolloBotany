import React from "react";
import "./CheckoutPage.css";
import { Container } from "reactstrap";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Footer from "../../components/Footer/Footer";

const CheckoutPage = (props) => {
  return (
    <Container>
      <h1>Checkout Page</h1>
      <CheckoutForm />
    </Container>
  );
};

export default CheckoutPage;
