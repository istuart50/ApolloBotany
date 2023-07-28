import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import ProductDetails from "../ProductDetails/ProductDetails";

const PlantResultItem = ({ result, accordionId, detailedResult }) => {
  return (
    <AccordionItem>
      <AccordionHeader
        targetId={accordionId}
        className="plant-result-item-header"
      >
        <img height={64} src={result.default_image?.thumbnail ||
          result.default_image?.small_url ||
          result.default_image?.medium_url ||
          result.default_image?.original_url ||
          "https://picsum.photos/300/300"
        } alt='plant-thumbnail' />
        <span style={{ marginLeft: "16px" }}>{result.common_name}</span>
      </AccordionHeader>
      <AccordionBody accordionId={accordionId}>
        <ProductDetails detailedResult={detailedResult} />
      </AccordionBody>
    </AccordionItem>
  );
};

export default PlantResultItem;
