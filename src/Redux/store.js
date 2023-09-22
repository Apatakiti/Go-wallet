import { configureStore } from "@reduxjs/toolkit";
import slicedData, { fetchCryptoDataAsync } from "./slice";

const store = configureStore({
  reducer: {
    data: slicedData,
  },
});

store.dispatch(fetchCryptoDataAsync());

export default store;
