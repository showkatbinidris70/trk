import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
});
export default store;
