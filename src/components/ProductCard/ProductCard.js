import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <Card className="product-card">
      <img
        alt="Sample"
        src={
          product.default_image?.medium_url || "https://picsum.photos/300/200"
        }
      />
      <CardBody>
        <CardTitle tag="h5">{product.common_name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          <em>{product.scientific_name}</em>
        </CardSubtitle>
        <CardText>
          Sunlight: {product.sunlight}
          <br />
          Water: {product.watering}
        </CardText>
        <CardText>Cost: ${Math.floor(Math.random() * 50 + 1)}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
