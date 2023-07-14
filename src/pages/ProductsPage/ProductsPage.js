import React from "react";
import './ProductsPage.css';
import { Container } from "reactstrap"
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";



const ProductsPage = () => {
    return (
        <Container>
            <h1>Products Page</h1>
            <Carousel />
            <Footer />
        </Container>
    )
}
export default ProductsPage;