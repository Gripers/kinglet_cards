import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from '../../api/Api';

export const cardsSliceApi = createAsyncThunk(
  'cards/cardsSliceApi',
  async () => await axios.get(`${API}/Colors/`).then((res) => res.data)
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    isLoading: false,
    cards: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(cardsSliceApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cardsSliceApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(cardsSliceApi.rejected, (state) => {
        state.isLoading = false;
        alert('error');
      });
  },
});

export default cardsSlice.reducer;
