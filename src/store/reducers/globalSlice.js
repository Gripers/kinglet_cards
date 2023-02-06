import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isCheckoutModalOpen: false,
    isConfirmModalOpen: false,
    totalPrice: 49.9,
  },
  reducers: {
    checkoutModalState: (state, action) => {
      state.isCheckoutModalOpen = action.payload;
    },
    confirmModalState: (state, action) => {
      state.isConfirmModalOpen = action.payload;
    },
    totalIncrement: (state, action) => {
    },
  },
});

export const { checkoutModalState, confirmModalState, totalIncrement } =
  globalSlice.actions;

export default globalSlice.reducer;
