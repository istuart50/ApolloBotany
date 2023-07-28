import { DropdownItem, Input } from 'reactstrap';
import './CartItem.css'
import { changeItemQty } from '../../state/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    return (
        <DropdownItem>
            <div style={{ display: "flex", width: '400px' }}>
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
                            style={{ width: "100%" }}
                            type="number"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onChange={(e) => {
                                dispatch(changeItemQty({ id: item.id, qty: e.target.value }))
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