import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isCheckoutModalOpen: false,
    isConfirmModalOpen: false,
  },
  reducers: {
    checkoutModalState: (state, action) => {
      state.isCheckoutModalOpen = action.payload;
    },
    confirmModalState: (state, action) => {
      state.isConfirmModalOpen = action.payload;
    },
  },
});

export const { checkoutModalState, confirmModalState } = globalSlice.actions;

export default globalSlice.reducer;
