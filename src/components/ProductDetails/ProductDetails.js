import { Card, CardBody, CardTitle, Spinner } from "reactstrap";
import "./ProductDetails.css";

const ProductDetails = ({ detailedResult }) => {
  if (!detailedResult) {
    return <Spinner />;
  }
  //   function boolToWord(drought_tolerant) {
  //     let a = drought_tolerant.toString();
  //     if (a === "true") return "Yes";
  //     else return "No";
  //   }
  return (
    <Card
      style={{
        margin: 0,
        borderRadius: "0 0 5px 5px",
        borderTop: "1px solid transparent",
      }}
    >
      <CardBody className="product-details-card-body">
        <div className="product-details-left-pane">
          <img
            alt="Sample"
            src={detailedResult.default_image.small_url}
            height={150}
          />
          <h6>{detailedResult.other_name}</h6>
          <p>
            <em>{detailedResult.scientific_name}</em>
          </p>
          {/* <p>{detailedResult.sunlight.join(", ")}</p> */}
        </div>
        <div className="product-details-right-pane">
          <CardTitle tag="h5">About: {detailedResult.common_name} </CardTitle>
          <div>
            <h6>Details</h6>
            <div> {`Type: ${detailedResult.type || "Unknown"}`}</div>
            {`${detailedResult.dimensions.type || "Height"}: 
                ${detailedResult.dimensions.max_value || "Unknown"} 
                ${detailedResult.dimensions.unit || "Unknown"}`}

            {/* <div>{detailedResult.watering && <div>BANANA!</div>}</div> */}
            {detailedResult?.watering && (
              <div>{`Water: ${detailedResult.watering}`}</div>
            )}
            {detailedResult?.sunlight?.length && (
              <div>{`Sun: ${detailedResult.sunlight.join(", ")}`}</div>
            )}
            {detailedResult?.hardiness?.min &&
              detailedResult?.hardiness?.max && (
                <div>
                  {`Hardiness: ${detailedResult.hardiness.min} -  ${detailedResult.hardiness.max}`}
                </div>
              )}
            {detailedResult?.drought_tolerant && (
              <div>
                {`Drought Tolerant: ${detailedResult.drought_tolerant}`}
              </div>
            )}
            {detailedResult?.growth_rate && (
              <div>{`Growth Rate:  ${detailedResult.growth_rate}`}</div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductDetails;
