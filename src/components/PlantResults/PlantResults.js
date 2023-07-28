import "./PlantResults.css";
import React, { useEffect, useState } from "react";
import { Accordion, Spinner } from "reactstrap";
import PlantResultItem from "../PlantResultItem/PlantResultItem";
import axios from "axios";

function PlantResults({ results }) {
  const [openedId, setOpenedId] = useState("");
  const [openedDetails, setOpenedDetails] = useState(null);

  useEffect(() => {
    if (openedId) {
      axios
        .get(
          `https://perenual.com/api/species/details/${openedId}?key=sk-X1RS64af5155bbf521543`
        )
        .then((result) => {
          console.log("RESULT123", result);
          setOpenedDetails(result.data);
        })
        .catch((error) => {
          console.error(error);
          setOpenedDetails(null);
        });
    }
  }, [openedId]);

  const toggle = (id) => {
    if (openedId === id) {
      setOpenedId();
    } else {
      setOpenedId(id);
    }
  };

  return (
    <>
      {results.length ? (
        <Accordion flush open={openedId} toggle={toggle}>
          {
            results.map((result, idx) => (
              <PlantResultItem
                result={result}
                accordionId={result.id}
                key={idx}
                detailedResult={openedDetails}
              />
            ))
          }
        </Accordion>
      ) : (
        <div className='plant-results-spinner'>
          <Spinner color='info' style={{ height: '5rem', width: '5rem' }} />
        </div>
      )}
    </>
  );
}

export default PlantResults;
