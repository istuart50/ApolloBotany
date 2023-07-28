import React, { useState } from "react";
import "./CheckoutPage.css";
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const CheckoutPage = (props) => {

  const [billingFormState, setBillingFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    addressDetails: '',
    city: '',
    state: '',
    zip: ''
  })

  const [shippingFormState, setshippingFormState] = useState({
    firstName: '',
    lastName: '',
    address: '',
    addressDetails: '',
    city: '',
    state: '',
    zip: ''
  })

  const [modalOpen, setModalOpen] = useState(false)

  const handleCheckboxChange = (e) => {
    console.log(e.target.checked)
    if (e.target.checked) {
      setshippingFormState(billingFormState)
    } else {
      setshippingFormState({
        firstName: '',
        lastName: '',
        address: '',
        addressDetails: '',
        city: '',
        state: '',
        zip: ''
      })
    }
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const submit = () => {
    toggleModal()
    alert('Credit card info sent to Dark Web. The shadow goverment thanks you for your contribution')
  }

  return (
    <Container>
      <Row className="checkout-page-form-container">
        <Col md={6}>
          <CheckoutForm formValues={billingFormState} formTitle='Billing Form' setFormState={setBillingFormState} />
        </Col>
        <Col md={6}>
          <CheckoutForm formValues={shippingFormState} formTitle='Shipping Form' setFormState={setshippingFormState} handleCheckboxChange={handleCheckboxChange} />
        </Col>

      </Row>
      <div className="checkout-page-payment-button-row">
        <Button onClick={toggleModal} className="checkout-page-payment-button">Payment Info</Button>
      </div>

      <Modal isOpen={modalOpen} toggle={toggleModal} style={{ width: '30%' }}>
        <ModalHeader toggle={toggleModal}>Payment Info</ModalHeader>
        <ModalBody>
          <Container>
            <Form>
              <FormGroup>
                <Label for="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Enter credit card number"
                />
              </FormGroup>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="expiration">Exp Date</Label>
                    <Input
                      id="expiration"
                      name="expiration"
                      placeholder="mm/yy"
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="securityCode">CVV</Label>
                    <Input
                      id="securityCode"
                      name="securityCode"
                    />
                  </FormGroup>
                </Col>
                <Col md={5}>
                  <FormGroup>
                    <Label for="zip">Zip</Label>
                    <Input
                      id="zip"
                      name="zip"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submit}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>


    </Container>
  );
};

export default CheckoutPage;
