// store.js
import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './slice';

const store = configureStore({
  reducer: { balance: balanceReducer, },
});

export default store;
