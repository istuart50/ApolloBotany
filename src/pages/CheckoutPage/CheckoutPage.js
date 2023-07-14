import React from "react";
import "./CheckoutPage.css";
import { Container } from "reactstrap";
import CheckoutForm from "../../components/CheckoutForm";


const CheckoutPage = (props) => {
  return <Container>
    <CheckoutForm/>
    </Container>;
};

export default CheckoutPage;
