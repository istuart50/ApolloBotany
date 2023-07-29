import React, { useEffect, useState } from "react";
import "./PlantSearch.css";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import PlantResults from "../../components/PlantResults/PlantResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PlantSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [skipAPICall, setSkipAPICall] = useState(false);
  const [plantResults, setPlantResults] = useState([]);

  useEffect(() => {
    searchPlants("tree");
  }, []);

  const searchPlants = (searchTerm) => {
    axios
      .get(
        `https://perenual.com/api/species-list?page=1&key=sk-X1RS64af5155bbf521543&q=${searchTerm}`
      )
      .then((result) => {
        setPlantResults(result.data.data);
        console.log(plantResults);
      });
  };

  const handleThrottledSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    if (inputValue.length >= 3) {
      if (skipAPICall) {
        return;
      }
      searchPlants(searchValue);

      setSkipAPICall(true);
      setTimeout(() => {
        setSkipAPICall(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Row className="plant-search-input-row">
        <Col md={12}>
          <InputGroup>
            <Input
              value={searchValue}
              onChange={handleThrottledSearchInputChange}
              placeholder="Search Plant Database"
            />
            <Button className="plant-search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <PlantResults results={plantResults} />
    </Container>
  );
};

export default PlantSearch;
