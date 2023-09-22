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
    balance: localStorage.getItem("savedBalance") || 0,
  },
  reducers: {
    saveBalance: (state, action) => {
      state.balance = action.payload;
      localStorage.setItem("savedBalance", action.payload);
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
export const { saveBalance } = allDataSlice.actions;

export default allDataSlice.reducer;
