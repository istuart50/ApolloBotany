import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      const foundIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (foundIndex === -1) {
        state.cartItems.push(action.payload);
      }
      else {
        state.cartItems.splice(foundIndex, 1, {
          ...state.cartItems[foundIndex],
          qty: parseInt(state.cartItems[foundIndex].qty) + parseInt(action.payload.qty)
        })
      }
    },
    changeItemQty: (state, action) => {
      const foundIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (foundIndex !== -1) {
        state.cartItems.splice(foundIndex, 1, {
          ...state.cartItems[foundIndex],
          qty: parseInt(action.payload.qty)
        })
      }
    }

  }
});

export const { addItemsToCart, changeItemQty } = cartSlice.actions;


export default cartSlice.reducer;
