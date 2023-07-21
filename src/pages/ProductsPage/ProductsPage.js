import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import { Container, Row, Spinner } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

const ProductsPage = () => {
  const [plantResults, setPlantResults] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://perenual.com/api/species-list?page=1&key=sk-X1RS64af5155bbf521543`
      )
      .then((result) => {
        setPlantResults(result.data.data);
      });
  }, []);

  return (
    <Container>
      <h1>Products Page</h1>
      <Carousel />
      <Row className="product-list">
        {plantResults.length ? (
          plantResults.map((plant, idx) => (
            <ProductCard product={plant} key={idx} />
          ))
        ) : (
          <Spinner />
        )}
      </Row>
      <Footer />
    </Container>
  );
};
export default ProductsPage;
