import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { baseAPI } from '../constants';
import { productData } from '../mockData/mocks';

export interface IProduct {}

export const fetchAllProductsAsync = createAsyncThunk(
  '/products/allProducts',
  async () => {
    try {
      const response = await axios.get(`${baseAPI}/clients/product/list`);
      return response?.data;
    } catch (err) {
      return productData; //remove
      return console.log(err);
    }
  },
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
