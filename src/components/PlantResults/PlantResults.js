import './PlantResults.css';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Spinner
} from 'reactstrap';
import PlantResultItem from '../PlantResultItem/PlantResultItem';





function PlantResults({ results }) {
    const [open, setOpen] = useState('');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion flush open={open} toggle={toggle}>
                {
                    results.length ? (
                        results.map((result, idx) =>
                            <PlantResultItem result={result} accordionId={idx} />
                        )
                    ) : <Spinner />
                }
            </Accordion>
        </div>
    );
}

export default PlantResults;