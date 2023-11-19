import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { getProducts } from '../services';

export interface IProduct {}

export const fetchAllProductsAsync = createAsyncThunk(
  '/products/allProducts',
  getProducts,
);

export interface IUsersState {
  allProducts: IProduct[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  allProducts: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    allProducts: (state: any, payload: any) => {
      state.allProducts = payload;
    },
  },
  extraReducers: {
    [fetchAllProductsAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAllProductsAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.allProducts = action.payload;
      }
    },
    [fetchAllProductsAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const products = (state: RootState) => state.products;
export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;
