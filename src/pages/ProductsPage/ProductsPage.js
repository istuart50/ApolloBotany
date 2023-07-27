import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import { Container, Row, Spinner } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductModal from "../../components/ProductModal/ProductModal";

const ProductsPage = () => {
  const [plantResults, setPlantResults] = useState([]);
  const [openedId, setOpenedId] = useState(null)
  const [detailData, setDetailData] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://perenual.com/api/species-list?page=1&key=sk-X1RS64af5155bbf521543`
      )
      .then((result) => {
        const rawData = result.data.data;
        const dataWithPrices = rawData.map(plant => {
          plant.price = Math.floor(Math.random() * 50 + 1)
          return plant
        })
        setPlantResults(dataWithPrices);
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
          const foundStatePlant = plantResults.find(statePlant => statePlant.id === openedId)
          result.data.price = foundStatePlant.price;
          setDetailData(result.data);
        })
        .catch((error) => {
          console.error(error);
          setDetailData(null);
          setOpenedId(null)
        });
    }
  }, [openedId]);

  const toggleModal = () => {
    setModalOpen((modalOpenState) => !modalOpenState)
  }

  return (
    <Container>
      <ProductModal toggleIsOpen={toggleModal} isOpen={modalOpen} detailData={detailData} />
      <Carousel />
      <Row className="product-list">
        {plantResults.length ? (
          plantResults.map((plant, idx) => (
            <ProductCard key={idx} product={plant} clickHandler={() => {
              setOpenedId(plant.id)
              toggleModal(detailData)
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
