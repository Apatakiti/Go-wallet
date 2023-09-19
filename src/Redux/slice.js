import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    value: localStorage.getItem('savedBalance') || 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    saveBalance: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('savedBalance', action.payload);
    },
  },
});

export const { saveBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
