import React from "react";
import "./ProductsPage.css";
import { Container } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsPage = () => {
  return (
    <Container>
      <h1>Products Page</h1>
      <Carousel />
      <ProductCard />
    </Container>
  );
};
export default ProductsPage;
