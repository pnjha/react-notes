import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cart";

const appStore = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default appStore;
