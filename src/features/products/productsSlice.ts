import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from "axios";

interface Product {
  id: number,
  reason: string,
  name: string,
}

interface ProductsState {
  loading: boolean;
  products: Product[]
}

const initialState: ProductsState = {
  loading: false,
  products: []
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async (query: string) => {
    const response = await axios({
      method: 'post',
      url: 'https://pfp-public-productdb-api.azurewebsites.net/api/product/search',
      headers: {'Content-Type': 'application/json'},
      data: {
        "page": 1,
        "pageSize": 9,
        "searchText": query,
        "productCategoryTypeIds": [],
        "complianceTypeIds": [],
        "sourceTypeIds": []
      }
    });

    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.results;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.loading = false
        state.products = []
      });
  },
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.loading;

export default productsSlice.reducer;
