import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from '../../api/Api';

export const variantsApi = createAsyncThunk(
  'variants/variantsApi',
  async ({ id }) =>
    await axios.get(`${API}Retrieve/Products/${id}/`).then((res) => res.data)
);

const variantsSlice = createSlice({
  name: 'variants',
  initialState: {
    variants: [],
    variant: '',
  },
  reducers: {
    changeVariant: (state, action) => {
      state.variant = action.payload.array.filter(
        (variant) => variant.title === action.payload.type
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(variantsApi.fulfilled, (state, action) => {
      state.variants = action.payload.variants;
    });
  },
});

export const { changeVariant } = variantsSlice.actions;

export default variantsSlice.reducer;
