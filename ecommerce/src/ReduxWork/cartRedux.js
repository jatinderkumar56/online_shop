import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    
    quantity: JSON.parse(localStorage.getItem("cart"))?.length || 0, // Default to 0 if no cart exists
    products: JSON.parse(localStorage.getItem("cart")) || [], // Default to an empty array if no cart exists
    total: 0
  },
  reducers: {
    resetCart: (state) => {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct,resetCart } = cartSlice.actions;
export default cartSlice.reducer;
