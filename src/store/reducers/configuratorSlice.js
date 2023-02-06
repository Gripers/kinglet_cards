import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from '../../api/api';

export const configuratorApi = createAsyncThunk(
  'configurator/configuratorApi',
  async ({ id }) =>
    await axios
      .get(id ? `${API}Borders/${id}/` : `${API}Borders/`)
      .then((res) => res.data)
);

const configuratorSlice = createSlice({
  name: 'configurator',
  initialState: {
    isBigChip: false,
    borders: [],
    border: '',
  },
  reducers: {
    setBigChip: (state, action) => {
      action.payload
        ? (state.isBigChip = false)
        : (state.isBigChip = !state.isBigChip);
    },
    removeBorder: (state) => {
      state.border = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(configuratorApi.fulfilled, (state, action) => {
      action.meta.arg.id
        ? (state.border = action.payload.img)
        : (state.borders = action.payload);
    });
  },
});

export const { setBigChip, removeBorder } = configuratorSlice.actions;

export default configuratorSlice.reducer;
