import { Col, DropdownItem, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import "./CartItem.css";
import { changeItemQty } from "../../state/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) {
    return null;
  }

  return (
    <DropdownItem >
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          height={64}
          src={item?.default_image?.thumbnail || "https://picsum.photos/300/300"}
          alt="product"
          style={{ marginRight: "8px" }}
        />
        <Row
          style={{
            justifyContent: "space-between",
            width: '15vw',
            minWidth: '200px'
          }}
        >
          <Col xs={12}>
            <h6 style={{ alignSelf: "flex-start" }}>{item.common_name}</h6>
          </Col>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputGroup style={{ width: "35%" }}
            >
              <InputGroupText for="qty" style={{ padding: "0 2px 0 2px" }}>
                Qty:
              </InputGroupText>
              <Input
                className="cart-item-qty-input"
                style={{ padding: "0 0 0 4px" }}
                id="qty"
                value={item.qty}
                type="number"
                onChange={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  dispatch(changeItemQty({ id: item.id, qty: e.target.value }));
                }}
              />
            </InputGroup>
            <span>
              Price:
              <span style={{ textAlign: "right", fontWeight: "600" }}>
                {" "}
                ${item.price}
              </span>
            </span>
          </div>
        </Row>
      </div>
    </DropdownItem>
  );
};

export default CartItem;
