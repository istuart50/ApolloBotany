import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import { Container, Row, Spinner } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductsPage = () => {
  const [plantResults, setPlantResults] = useState([]);
  const [openedId, setOpenedId] = useState(null)
  const [detailData, setDetailData] = useState(null)


  useEffect(() => {
    axios
      .get(
        `https://perenual.com/api/species-list?page=1&key=sk-X1RS64af5155bbf521543`
      )
      .then((result) => {
        setPlantResults(result.data.data);
      });
  }, []);

  useEffect(() => {
    if (openedId) {
      axios
        .get(
          `https://perenual.com/api/species/details/${openedId}?key=sk-X1RS64af5155bbf521543`
        )
        .then((result) => {
          console.log("RESULT123", result);
          setDetailData(result.data);
        })
        .catch((error) => {
          console.error(error);
          setDetailData(null);
          setOpenedId(null)
        });
    }
  }, [openedId]);

  return (
    <Container>
      {
        openedId ? (
          <ProductDetails detailedResult={detailData} />
        ) : (
          <Carousel />
        )
      }
      <Row className="product-list">
        {plantResults.length ? (
          plantResults.map((plant, idx) => (
            <ProductCard key={idx} product={plant} clickHandler={() => {
              setOpenedId(plant.id)
            }} />
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
