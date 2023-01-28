import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isCheckoutModalOpen: false,
  },
  reducers: {
    checkoutModalState: (state, action) => {
      state.isCheckoutModalOpen = action.payload;
    },
  },
});

export const { checkoutModalState } = globalSlice.actions;

export default globalSlice.reducer;
