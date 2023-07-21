import React, { useState } from "react";
import './PlantSearch.css';
import { Container } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const PlantSearch = (props) => {

    const [searchValue, setSearchValue] = useState('');
    const [skipAPICall, setSkipAPICall] = useState(false);
    const [plantResults, setPlantResults] = useState([])

    const searchPlants = () => {
        axios.get(`https://perenual.com/api/species-list?page=1&key=sk-X1RS64af5155bbf521543&q=${searchValue}`).then((result) => {
            setPlantResults(result.data.data)
            console.log(plantResults)
        })
    }

    const handleThrottledSearchInputChange = (e) => {
        const inputValue = e.target.value
        setSearchValue(inputValue)

        if (inputValue.length > 3) {
            if (skipAPICall) {
                return;
            }
            searchPlants()

            setSkipAPICall(true)
            setTimeout(() => {
                setSkipAPICall(false)
            }, 2000)
        }

    }

    return (
        <Container>
            <h1>Plant Search Page</h1>
            <input value={searchValue} onChange={handleThrottledSearchInputChange} />
            <button onClick={searchPlants}>
                Search
            </button>
            <Footer />
        </Container>
    )
}

export default PlantSearch;

