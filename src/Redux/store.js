import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchCryptoDataAsync }  from './slice'
import slicedData from "./slice";

const persistConfig = { key: 'root', storage, };
const persistedReducer = persistReducer(persistConfig, slicedData);

const store = configureStore({
  reducer: {
    data: persistedReducer,
    // slicedData,
  },
});

const coinData = JSON.parse(localStorage.getItem('coinData'));

if (coinData) {
  store.dispatch({ type: 'coin/coinData', payload: coinData });
} else {
  localStorage.setItem('coinData', JSON.stringify(store.getState().data));
}

store.dispatch(fetchCryptoDataAsync());

export const persistor = persistStore(store);

export default store;
