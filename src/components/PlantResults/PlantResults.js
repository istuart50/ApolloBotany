import './PlantResults.css';
import React, { useEffect, useState } from 'react';
import {
    Accordion,
    Spinner
} from 'reactstrap';
import PlantResultItem from '../PlantResultItem/PlantResultItem';
import axios from 'axios';





function PlantResults({ results }) {
    const [openedId, setOpenedId] = useState('');
    const [openedDetails, setOpenedDetails] = useState(null)

    useEffect(() => {
        if (openedId) {
            axios.get(`https://perenual.com/api/species/details/${openedId}?key=sk-X1RS64af5155bbf521543`).then((result) => {
                console.log('RESULT123', result)
                setOpenedDetails(result.data)
            })
        }
    }, [openedId])

    const toggle = (id) => {
        if (openedId === id) {
            setOpenedId();
        } else {
            setOpenedId(id);
        }
    };

    return (
        <div>
            <Accordion flush open={openedId} toggle={toggle}>
                {
                    results.length ? (
                        results.map((result, idx) =>
                            <PlantResultItem result={result} accordionId={result.id} key={idx} detailedResult={openedDetails} />
                        )
                    ) : <Spinner />
                }
            </Accordion>
        </div>
    );
}

export default PlantResults;