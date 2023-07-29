import { Spinner } from "reactstrap";
import "./ProductDetails.css";

const ProductDetails = ({ detailedResult }) => {
  function boolToWord(value) {
    if (value) {
      return "Yes";
    }
    return "No";
  }

  if (!detailedResult) {
    return <Spinner />;
  }

  return (
    <div className="product-details-card-body row">
      <div className="product-details-left-pane col-sm-3">
        <div>
          <h5>Details</h5>
          <div>
            <span className="product-details-label">Type: </span>
            {detailedResult?.type || "Unknown"}
          </div>
          <div>
            <span className="product-details-label">
              {`${detailedResult.dimensions?.type || "Height"}: `}{" "}
            </span>
            {` ${detailedResult.dimensions?.max_value || "Unknown"} 
                ${detailedResult.dimensions?.unit || "Unknown"}`}
          </div>

          {detailedResult?.hardiness?.min && detailedResult?.hardiness?.max && (
            <div>
              <span className="product-details-label">Hardiness: </span>
              {`${detailedResult.hardiness.min} - ${detailedResult.hardiness.max}`}
            </div>
          )}
          {detailedResult?.drought_tolerant !== undefined && (
            <div>
              <span className="product-details-label">Drought Tolerant: </span>
              {boolToWord(detailedResult.drought_tolerant)}
            </div>
          )}
          {detailedResult?.growth_rate && (
            <div>
              <span className="product-details-label">Growth Rate: </span>
              {detailedResult.growth_rate}
            </div>
          )}
          {detailedResult?.medicinal !== undefined && (
            <div>
              <span className="product-details-label">Medicinal: </span>
              {boolToWord(detailedResult.medicinal)}
            </div>
          )}
          {detailedResult?.edible_leaf !== undefined && (
            <div>
              <span className="product-details-label">Has Edible Leaf: </span>
              {boolToWord(detailedResult.edible_leaf)}
            </div>
          )}
          {detailedResult?.edible_fruit !== undefined && (
            <div>
              <span className="product-details-label">Has Edible Fruit: </span>
              {boolToWord(detailedResult.edible_fruit)}
            </div>
          )}
          {detailedResult?.invasive !== undefined && (
            <div>
              <span className="product-details-label">Invasive: </span>
              {boolToWord(detailedResult.invasive)}
            </div>
          )}
          {detailedResult?.indoor !== undefined && (
            <div>
              <span className="product-details-label">Grows Indoors: </span>
              {boolToWord(detailedResult.indoor)}
            </div>
          )}
          {detailedResult?.origin?.length && (
            <div>
              <span className="product-details-label">Origin: </span>

              {detailedResult.origin.join(", ")}
            </div>
          )}
          {detailedResult?.poisonous_to_humans !== undefined && (
            <div>
              <span className="product-details-label">
                Poisonous to Humans:{" "}
              </span>

              {boolToWord(detailedResult.poisonous_to_humans)}
            </div>
          )}
          {detailedResult?.poisonous_to_pets !== undefined && (
            <div>
              <span className="product-details-label">Poisonous to Pets: </span>

              {boolToWord(detailedResult.poisonous_to_pets)}
            </div>
          )}
        </div>
      </div>
      <div className="product-details-center-pane col-sm-5">
        <h4>About: {detailedResult.common_name} </h4>
        <img
          alt="Sample"
          src={
            detailedResult.default_image?.small_url ||
            detailedResult.default_image?.medium_url ||
            detailedResult.default_image?.original_url ||
            "https://picsum.photos/300/300"
          }
          height={250}
        />
        <h6>{detailedResult.other_name}</h6>
        <p>
          <em>{detailedResult.scientific_name}</em>
        </p>
        {detailedResult?.price && <h5>${detailedResult.price}</h5>}
      </div>
      <div className="product-details-right-pane col-sm-3">
        <h5>Maintenance</h5>
        {detailedResult?.watering && (
          <div>
            <span className="product-details-label">Water: </span>

            {detailedResult.watering}
          </div>
        )}
        {detailedResult?.sunlight?.length && (
          <div>
            <span className="product-details-label">Sun: </span>

            {detailedResult.sunlight.join(", ")}
          </div>
        )}
        {detailedResult?.volume_water_requirement && (
          <div>
            <span className="product-details-label">Watering Amount: </span>
            {`${detailedResult.volume_water_requirement?.value || "Unlisted"}
             ${detailedResult.volume_water_requirement?.unit || "Unlisted"}`}
          </div>
        )}
        {detailedResult?.watering_period && (
          <div>
            <span className="product-details-label">Watering Period: </span>

            {detailedResult.watering_period}
          </div>
        )}
        {detailedResult?.watering_general_benchmark && (
          <div>
            <span className="product-details-label">Watering Frequency: </span>

            {`${detailedResult.watering_general_benchmark?.value || "Unlisted"}
             ${detailedResult.watering_general_benchmark?.unit || "Unlisted"}`}
          </div>
        )}
        {detailedResult?.salt_tolerant !== undefined && (
          <div>
            <span className="product-details-label">Salt Tolerant: </span>
            {boolToWord(detailedResult.salt_tolerant)}
          </div>
        )}
        {detailedResult?.propagation?.length && (
          <div>
            <span className="product-details-label">Propagation: </span>

            {detailedResult.propagation.join(", ")}
          </div>
        )}
        {detailedResult?.pruning_month?.length && (
          <div>
            <span className="product-details-label">Pruning Months: </span>

            {detailedResult.pruning_month.join(", ")}
          </div>
        )}
        {detailedResult?.harvest_season?.length && (
          <div>
            <span className="product-details-label">Harvest Seasons: </span>

            {detailedResult.harvest_season}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
