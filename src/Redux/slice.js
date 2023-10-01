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

const CoinBalance = [
  { coinName: 'Bitcoin', balance: 10 },
  { coinName: 'Ethereum', balance: 20 },
  { coinName: 'Tether', balance: 0 },
  { coinName: 'BNB', balance: 0 },
  { coinName: 'XRP', balance: 0 },
  { coinName: 'USDC', balance: 0 },
  { coinName: 'Lido Staked Ether', balance: 0 },
  { coinName: 'Solana', balance: 0 },
  { coinName: 'Cardano', balance: 0 },
  { coinName: 'Dogecoin', balance: 0 },
  { coinName: 'TRON', balance: 0 },
  { coinName: 'Toncoin', balance: 0 },
  { coinName: 'Polkadot', balance: 0 },
  { coinName: 'Litecoin', balance: 0 },
  { coinName: 'Bitcoin Cash', balance: 0 },
  { coinName: 'Chainlink', balance: 0 },
  { coinName: ' Wrapped Bitcoin', balance: 0 },
  { coinName: 'Shiba Inu', balance: 0 },
  { coinName: 'Dai', balance: 0 },
  { coinName: 'Uniswap', balance: 0 },
  { coinName: 'TrueUSD', balance: 0 },
  { coinName: 'Avalanche', balance: 0 },
  { coinName: 'LEO Token', balance: 0 },
  { coinName: 'Stellar', balance: 0 },
  { coinName: 'Monero', balance: 0 },
  { coinName: 'OKB', balance: 0 },
  { coinName: 'Ethereum Classic', balance: 0 },
  { coinName: 'BUSD', balance: 0 },
  { coinName: 'Cosmos Hub', balance: 0 },
  { coinName: 'Hedera', balance: 0 },
  { coinName: 'Filecoin', balance: 0 },
  { coinName: 'Lido DAO', balance: 0 },
  { coinName: 'Internet Computer', balance: 0 },
  { coinName: 'Maker', balance: 0 },
  { coinName: 'Cronos', balance: 0 },
  { coinName: 'Quant', balance: 0 },
  { coinName: 'Aptos', balance: 0 },
  { coinName: 'Mantle', balance: 0 },
  { coinName: 'VeChain', balance: 0 },
  { coinName: 'Arbitrum', balance: 0 },
  { coinName: 'NEAR Protocol', balance: 0 },
  { coinName: 'Optimism', balance: 0 },
  { coinName: 'Kaspa', balance: 0 },
  { coinName: 'Aave', balance: 0 },
  { coinName: 'Rocket Pool ETH', balance: 0 },
  { coinName: 'The Graph', balance: 0 },
  { coinName: 'Algorand', balance: 0 },
  { coinName: 'WhiteBIT Coin', balance: 0 },
  { coinName: 'USDD', balance: 0 },
  { coinName: 'Stacks', balance: 0 },
  { coinName: 'XDC Network', balance: 0 },
  { coinName: 'ImmutableX', balance: 0 },
  { coinName: 'Synthetix Network', balance: 0 },
  { coinName: 'MultiversX', balance: 0 },
  { coinName: 'Frax', balance: 0 },
  { coinName: 'EOS', balance: 0 },
  { coinName: 'Theta Network', balance: 0 },
  { coinName: 'Injective', balance: 0 },
  { coinName: 'Tezos', balance: 0 },
  { coinName: 'The Sandbox', balance: 0 },
  { coinName: 'Bitget Token', balance: 0 },
  { coinName: 'Axie Infinity', balance: 0 },
  { coinName: 'Bitcoin SV', balance: 0 },
  { coinName: 'Render', balance: 0 },
  { coinName: 'Radix', balance: 0 },
  { coinName: 'THORChain', balance: 0 },
  { coinName: 'Decentraland', balance: 0 },
  { coinName: 'Fantom', balance: 0 },
  { coinName: 'NEO', balance: 0 },
  { coinName: 'Kava', balance: 0 },
  { coinName: 'Gate', balance: 0 },
  { coinName: 'eCash', balance: 0 },
  { coinName: 'Pax Dollar', balance: 0 },
  { coinName: 'cETH', balance: 0 },
  { coinName: 'Flow', balance: 0 },
  { coinName: 'PAX Gold', balance: 0 },
  { coinName: 'ApeCoin', balance: 0 },
  { coinName: 'Curve DAO', balance: 0 },
  { coinName: 'Tether Gold', balance: 0 },
  { coinName: 'KuCoin', balance: 0 },
  { coinName: 'Frax Ether', balance: 0 },
  { coinName: 'Chiliz', balance: 0 },
  { coinName: 'Rocket Pool', balance: 0 },
  { coinName: 'IOTA', balance: 0 },
  { coinName: 'Frax Share', balance: 0 },
  { coinName: 'Sui', balance: 0 },
  { coinName: 'First Digital USD', balance: 0 },
  { coinName: 'Tokenize Xchange', balance: 0 },
  { coinName: 'Rollbit Coin', balance: 0 },
  { coinName: 'GALA', balance: 0 },
  { coinName: 'GMX', balance: 0 },
  { coinName: 'Mina Protocol', balance: 0 },
  { coinName: 'Huobi', balance: 0 },
  { coinName: 'Klaytn', balance: 0 },
  { coinName: 'BitTorrent', balance: 0 },
  { coinName: 'Terra Luna Classic', balance: 0 },
  { coinName: 'Casper Network', balance: 0 },
  { coinName: 'dYdX', balance: 0 },
  { coinName: 'Coinbase Wrapped Staked ETH', balance: 0 },
]

const allDataSlice = createSlice({
  name: "allData",
  initialState: {
    coinData: [],
    loading: false,
    error: null,
    allCoinBalance: CoinBalance,
    transanctionHistory: [],
  },
  reducers: {
    updateBalance: (state, action) => {
      const { coinName, amount } = action.payload;
      const coin = state.allCoinBalance.find((coin) => coin.coinName === coinName);
      if (coin) {
        coin.balance += amount;
      }
    },
    addCurrentTransaction: (state, action) => {
      state.transanctionHistory.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.coinData = action.payload;})
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
