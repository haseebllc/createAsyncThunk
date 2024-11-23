// app/reducers-or-slices/speceficDataFetcher-slice.jsx

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data-fetcher-thunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://your-api.com/content`);
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

const myslice = createSlice({
  name: "myslice-name",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BestSalesfetchAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(BestSalesfetchAction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(BestSalesfetchAction.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default BestSalesSlice.reducer;
