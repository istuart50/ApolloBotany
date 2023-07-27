import { DropdownItem, Input } from 'reactstrap';
import './CartItem.css'

const CartItem = ({ item }) => {
    return (
        <DropdownItem>
            <div style={{ display: "flex" }}>
                <img
                    height={64}
                    src={item.default_image.thumbnail || "https://picsum.photos/300/300"}
                    alt="product"
                    style={{ marginRight: "8px" }}
                />
                <div>
                    <h5>{item.common_name}</h5>
                    <div style={{ display: "flex" }}>
                        <Input
                            value={item.qty}
                            style={{ width: "50px" }}
                            type="number"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        />
                        <h6>Price: ${item.price}</h6>
                    </div>
                </div>
            </div>
        </DropdownItem>
    )


}


export default CartItem;