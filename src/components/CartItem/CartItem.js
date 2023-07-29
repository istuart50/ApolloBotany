import { Col, DropdownItem, Input, Row } from "reactstrap";
import "./CartItem.css";
import { changeItemQty } from "../../state/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <DropdownItem>
      <div
        style={{
          display: "flex",
          //   minWidth: "400px",
          justifyContent: "space-between",
        }}
      >
        <img
          height={64}
          src={item.default_image.thumbnail || "https://picsum.photos/300/300"}
          alt="product"
          style={{ marginRight: "8px" }}
        />
        <Row
          style={{
            // display: "flex",
            //   minWidth: "400px",
            justifyContent: "space-between",
          }}
        >
          <Col xs={12}>
            <h5 style={{ alignSelf: "flex-start" }}>{item.common_name}</h5>
          </Col>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Input
              value={item.qty}
              style={{ width: "30%" }}
              type="number"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onChange={(e) => {
                dispatch(changeItemQty({ id: item.id, qty: e.target.value }));
              }}
            />
            <span style={{ textAlign: "right", fontWeight: "600" }}>
              {" "}
              ${item.price}
            </span>
          </div>
        </Row>
      </div>
    </DropdownItem>
  );
};

export default CartItem;
