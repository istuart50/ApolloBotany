import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';


const PlantResultItem = ({ result, accordionId }) => {

    console.log(result)


    return (
        <AccordionItem>
            <AccordionHeader targetId={accordionId}>
                <img height={64} src={result.default_image?.thumbnail || ''} />
                <h6>
                    {result.common_name}
                </h6>
            </AccordionHeader>
            <AccordionBody accordionId={accordionId}>
                <p>{result.other_name}</p>
                <p>{result.scientific_name}</p>
                <p>{result.sunlight}</p>
            </AccordionBody>
        </AccordionItem>
    )
}


export default PlantResultItem;