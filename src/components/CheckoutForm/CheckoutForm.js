import { Form, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";

const CheckoutForm = ({ formValues, formTitle, setFormState, handleCheckboxChange }) => {

  const handleFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormState((state) => {
      return {
        ...state,
        [name]: value
      }
    })

  }

  return (
    <Form>
      <h3>{formTitle}</h3>
      <Row>
        {
          formTitle === 'Billing Form' ? (
            <Col md={12}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter email"
                  type="email"
                  value={formValues?.email}
                  onChange={handleFieldChange}
                />
              </FormGroup>
            </Col>
          ) : (
            <Col md={12}>
              <FormGroup check style={{ margin: '40px 0 22px 0' }}>
                <Input
                  id="sameAsBilling"
                  name="sameAsBilling"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <Label
                  check
                  for="sameAsBilling"
                >
                  Same as Billing
                </Label>
              </FormGroup>
            </Col>
          )
        }
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              type="text"
              value={formValues?.firstName}
              onChange={handleFieldChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              type="text"
              value={formValues?.lastName}
              onChange={handleFieldChange}
            />
          </FormGroup>
        </Col>

      </Row>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          id="address"
          name="address"
          placeholder="1234 Main St"
          value={formValues?.address}
          onChange={handleFieldChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="addressDetails">Address 2</Label>
        <Input
          id="addressDetails"
          name="addressDetails"
          placeholder="Apartment, studio, or floor"
          value={formValues?.addressDetails}
          onChange={handleFieldChange}
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formValues?.city}
              onChange={handleFieldChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              id="state"
              name="state"
              value={formValues?.state}
              onChange={handleFieldChange}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="zip">Zip</Label>
            <Input
              id="zip"
              name="zip"
              value={formValues?.zip}
              onChange={handleFieldChange}
            />
          </FormGroup>
        </Col>
      </Row>

    </Form>

  );
};

export default CheckoutForm;
