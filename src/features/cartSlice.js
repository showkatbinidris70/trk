import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

// card slice
const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
    // decrement from cart
    decrementFromCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (state.carts[itemIndex].qnty > 1) {
          state.carts[itemIndex].qnty -= 1;
        } else {
          state.carts.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, decrementFromCart } = cartSlice.actions;

export default cartSlice.reducer;
