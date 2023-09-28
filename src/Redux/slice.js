import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCryptoData } from "./getApiData";

export const fetchCryptoDataAsync = createAsyncThunk(
  "allData/fetchCryptoDataAsync",
  async (_, thunkAPI) => {
    try {
      // thunkAPI.dispatch(action loading )
      const data = await fetchCryptoData();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const allDataSlice = createSlice({
  name: "allData",
  initialState: {
    coinData: [],
    loading: false,
    error: null,
    allCoinBalance: [
      { name: 'Bitcoin', balance: 0 },
      { name: 'Ethereum', balance: 3 },
    ],
  },
  reducers: {
    updateBalance: (state, action) => {
      const { coinName, amount } = action.payload;
      const coin = state.allCoinBalance.find((crypto) => crypto.name === coinName);
      if (coin) {
        coin.balance += amount;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.coinData = action.payload;
      })
      .addCase(fetchCryptoDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptoDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// needed for external value dispatch
export const { updateBalance } = allDataSlice.actions;
export default allDataSlice.reducer;
