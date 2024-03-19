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
    // ----------------------------------------------------

    // remove perticular iteams
    removeToCart: (state, action) => {
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      state.carts = data;
    },

    // remove single iteams
    removeSingleIteams: (state, action) => {
      const IteamIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.carts[IteamIndex_dec].qnty >= 1) {
        state.carts[IteamIndex_dec].qnty -= 1;
      }
    },

    // clear cart
    emptycartIteam: (state, action) => {
      state.carts = [];
    },
  },
});

export const {
  addToCart,
  decrementFromCart,
  removeToCart,
  removeSingleIteams,
  emptycartIteam,
} = cartSlice.actions;

export default cartSlice.reducer;
