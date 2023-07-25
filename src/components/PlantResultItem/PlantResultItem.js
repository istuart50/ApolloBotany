import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import ProductDetails from '../ProductDetails/ProductDetails';

const PlantResultItem = ({ result, accordionId, detailedResult }) => {


    return (
        <AccordionItem>
            <AccordionHeader targetId={accordionId}>
                <img height={64} src={result.default_image?.thumbnail || ''} />
                <h6>
                    {result.common_name}
                </h6>
            </AccordionHeader>
            <AccordionBody accordionId={accordionId}>

                <ProductDetails detailedResult={detailedResult} />
            </AccordionBody>
        </AccordionItem>
    )
}


export default PlantResultItem;