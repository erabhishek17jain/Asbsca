import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { baseAPI } from '../constants';
import { branchData } from '../mockData/mocks';

export interface IBranch {}

export const fetchAllBranchsAsync = createAsyncThunk(
  '/branchs/allBranchs',
  async () => {
    try {
      const response = await axios.get(`${baseAPI}/clients/branch/list`);
      // return response?.data;
      return branchData; //remove
    } catch (err) {
      return branchData; //remove
      return console.log(err);
    }
  },
);

export interface IUsersState {
  allBranchs: IBranch[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  allBranchs: [],
  loading: false,
  error: null,
};

export const branchsSlice = createSlice({
  name: 'branchs',
  initialState,
  reducers: {
    allBranchs: (state: any, payload: any) => {
      state.allBranchs = payload;
    },
  },
  extraReducers: {
    [fetchAllBranchsAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAllBranchsAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.allBranchs = action.payload;
      }
    },
    [fetchAllBranchsAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const branchs = (state: RootState) => state.branchs;
export const { allBranchs } = branchsSlice.actions;
export default branchsSlice.reducer;
