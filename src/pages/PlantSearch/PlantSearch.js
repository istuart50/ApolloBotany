import React from "react";
import "./PlantSearch.css";
import { Container } from "reactstrap";
import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PlantSearch = (props) => {
  return (
    <Container>
      <h1>Plant Search Page</h1>
      <FontAwesomeIcon icon={faEnvelope} />
    </Container>
  );
};

export default PlantSearch;
