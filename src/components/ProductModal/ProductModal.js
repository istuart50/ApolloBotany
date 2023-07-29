import {
  Button,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./ProductModal.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import { addItemsToCart } from "../../state/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductModal = ({ toggleIsOpen, isOpen, detailData }) => {
  const [inputQty, setInputQty] = useState(1);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} toggle={toggleIsOpen} style={{ width: "100%" }}>
      <ModalHeader toggle={toggleIsOpen}>Product Details</ModalHeader>
      <ModalBody>
        <ProductDetails detailedResult={detailData} />
      </ModalBody>
      <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
        <Button color="secondary" onClick={toggleIsOpen}>
          Cancel
        </Button>
        <Col xs={1}>
          <Input
            type="number"
            onChange={(e) => {
              setInputQty(e.target.value);
            }}
            value={inputQty}
          />
        </Col>
        <Button
          className="product-modal-button"
          onClick={() => {
            const cartItem = {
              ...detailData,
              qty: inputQty,
            };
            dispatch(addItemsToCart(cartItem));
            setInputQty(1);
            toggleIsOpen();
          }}
        >
          Add items to cart
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default ProductModal;
