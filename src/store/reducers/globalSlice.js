import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isCheckoutModalOpen: false,
    isConfirmModalOpen: false,
    border: 0,
    color: 0,
    inc: 0,
  },
  reducers: {
    checkoutModalState: (state, action) => {
      state.isCheckoutModalOpen = action.payload;
    },
    confirmModalState: (state, action) => {
      state.isConfirmModalOpen = action.payload;
    },
    totalIncrement: (state, action) => {
      if (action.payload.border) {
        state.border = action.payload.border;
        state.color !== 0
          ? (state.inc = state.color + state.border)
          : (state.inc = state.border);
      } else if (action.payload.color) {
        state.color = action.payload.color;
        state.border !== 0
          ? (state.inc = state.border + state.color)
          : (state.inc = state.color);
      } else if (action.payload.color === 0) {
        state.color = 0;
        state.inc = 0;
      }
    },
  },
});

export const { checkoutModalState, confirmModalState, totalIncrement } =
  globalSlice.actions;

export default globalSlice.reducer;
