import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { fetchCryptoDataAsync }  from './slice'
import slicedData from "./slice";


// , { fetchCryptoDataAsync }
// const persistConfig = { key: 'root', storage, };
// const persistedReducer = persistReducer(persistConfig, slicedData);

const store = configureStore({
  reducer: {
    data: slicedData,
    // persistedReducer,
  },
});

// const cryptoData = JSON.parse(localStorage.getItem('cryptoData'));

// const cryptoData = JSON.parse(localStorage.getItem('cryptoData'));

// if (cryptoData) {
//   store.dispatch({ type: 'crypto/updateBalance', payload: cryptoData });
// } else {
//   localStorage.setItem('cryptoData', JSON.stringify(store.getState().data));
// }

store.dispatch(fetchCryptoDataAsync());

// export const persistor = persistStore(store);

export default store;
