import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isCheckoutModalOpen: false,
    isConfirmModalOpen: false,
    totalPrice: 160,
  },
  reducers: {
    checkoutModalState: (state, action) => {
      state.isCheckoutModalOpen = action.payload;
    },
    confirmModalState: (state, action) => {
      state.isConfirmModalOpen = action.payload;
    },
    totalIncrement: (state, action) => {
      state.totalPrice += action.payload;
    },
  },
});

export const { checkoutModalState, confirmModalState, totalIncrement } =
  globalSlice.actions;

export default globalSlice.reducer;
