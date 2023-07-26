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
        padding: '8px 16px 8px 16px',
        borderRadius: "0 0 5px 5px",
        borderTop: "1px solid transparent",
      }}
    >
      <CardBody className="product-details-card-body row" >
        <div className="product-details-left-pane col-sm-3">
          <div>
            <h5>Details</h5>
            <div> {`Type: ${detailedResult.type || "Unknown"}`}</div>
            {`${detailedResult.dimensions.type || "Height"}: 
                ${detailedResult.dimensions.max_value || "Unknown"} 
                ${detailedResult.dimensions.unit || "Unknown"}`}

            {detailedResult?.hardiness?.min &&
              detailedResult?.hardiness?.max && (
                <div>
                  {`Hardiness: ${detailedResult.hardiness.min} -  ${detailedResult.hardiness.max}`}
                </div>
              )}
            {detailedResult?.drought_tolerant !== undefined && (
              <div>
                {`Drought Tolerant: ${detailedResult.drought_tolerant}`}
              </div>
            )}
            {detailedResult?.growth_rate && (
              <div>{`Growth Rate:  ${detailedResult.growth_rate}`}</div>
            )}
            {detailedResult?.medicinal !== undefined && (
              <div>{`Medicinal:  ${detailedResult.medicinal}`}</div>
            )}
            {detailedResult?.edible_leaf !== undefined && (
              <div>{`Has Edible Leaf:  ${detailedResult.edible_leaf}`}</div>
            )}
            {detailedResult?.edible_fruit !== undefined && (
              <div>{`Has Edible Fruit:  ${detailedResult.edible_fruit}`}</div>
            )}
            {detailedResult?.invasive !== undefined && (
              <div>{`Invasive:  ${detailedResult.invasive}`}</div>
            )}
            {detailedResult?.indoor !== undefined && (
              <div>{`Grows Indoors:  ${detailedResult.indoor}`}</div>
            )}
            {detailedResult?.origin?.length && (
              <div>{`Origin:  ${detailedResult.origin.join(', ')}`}</div>
            )}
            {detailedResult?.poisonous_to_humans !== undefined && (
              <div>{`Poisonous to Humans:  ${detailedResult.poisonous_to_humans}`}</div>
            )}
            {detailedResult?.poisonous_to_pets !== undefined && (
              <div>{`Poisonous to Pets:  ${detailedResult.poisonous_to_pets}`}</div>
            )}
          </div>
        </div>
        <div className="product-details-center-pane col-sm-5">
          <CardTitle tag="h4">About: {detailedResult.common_name} </CardTitle>
          <img
            alt="Sample"
            src={detailedResult.default_image?.small_url ||
              detailedResult.default_image?.medium_url ||
              detailedResult.default_image?.original_url ||
              "https://picsum.photos/300/300"}
            height={250}
          />
          <h6>{detailedResult.other_name}</h6>
          <p>
            <em>{detailedResult.scientific_name}</em>
          </p>
        </div>
        <div className='product-details-right-pane col-sm-3'>
          <h5>Maintenance</h5>
          {detailedResult?.watering && (
            <div>{`Water: ${detailedResult.watering}`}</div>
          )}
          {detailedResult?.sunlight?.length && (
            <div>{`Sun: ${detailedResult.sunlight.join(", ")}`}</div>
          )}
          {detailedResult?.volume_water_requirement && (
            <div>{`Watering Amount: ${detailedResult.volume_water_requirement?.value || 'Unlisted'} ${detailedResult.volume_water_requirement?.unit || 'Unlisted'}`}</div>
          )}
          {detailedResult?.watering_period && (
            <div>{`Watering Period: ${detailedResult.watering_period}`}</div>
          )}
          {detailedResult?.watering_general_benchmark && (
            <div>{`Watering Frequency: ${detailedResult.watering_general_benchmark?.value || 'Unlisted'} ${detailedResult.watering_general_benchmark?.unit || 'Unlisted'}`}</div>
          )}
          {detailedResult?.salt_tolerant !== undefined && (
            <div>{`Salt Tolerance: ${detailedResult.salt_tolerant}`}</div>
          )}
          {detailedResult?.propagation?.length && (
            <div>{`Propagation: ${detailedResult.propagation.join(', ')}`}</div>
          )}
          {detailedResult?.pruning_month?.length && (
            <div>{`Pruning Months: ${detailedResult.pruning_month.join(', ')}`}</div>
          )}
          {detailedResult?.harvest_season?.length && (
            <div>{`Harvest Seasons: ${detailedResult.harvest_season}`}</div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductDetails;
