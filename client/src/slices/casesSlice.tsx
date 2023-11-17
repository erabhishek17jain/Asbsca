import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { baseAPI } from '../constants';

export interface ICase {}

export const fetchCasesAnalyticsAsync = createAsyncThunk(
  '/cases/analytics',
  async (filterBy: string) => {
    try {
      const response = await axios.post(`${baseAPI}/cases/analytics`, {
        range: filterBy,
      });
      return response?.data;
    } catch (err) {
      return console.log(err);
    }
  },
);

export const fetchAllCasesAsync = createAsyncThunk(
  '/cases/allCases',
  async (cases: any) => {
    return cases;
  },
);

export const fetchAssignedAsync = createAsyncThunk(
  '/cases/assignedCases',
  async (cases: any) => {
    return cases;
  },
);
export const fetchReviewedAsync = createAsyncThunk(
  '/cases/reviewedCases',
  async (cases: any) => {
    return cases;
  },
);
export const fetchCompletedAsync = createAsyncThunk(
  '/cases/completedCases',
  async (cases: any) => {
    return cases;
  },
);

export interface ICasesState {
  allCases: any;
  assignedCases: any;
  reviewedCases: any;
  completedCases: any;
  analytics: any;
  loading: boolean;
  error: any;
}

const initialState: ICasesState = {
  allCases: [],
  assignedCases: [],
  reviewedCases: [],
  completedCases: [],
  analytics: [],
  loading: false,
  error: null,
};

export const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    allCases: (state: any, payload: any) => {
      state.allCases = payload;
    },
    assignedCases: (state: any, payload: any) => {
      state.assignedCases = payload;
    },
    reviewedCases: (state: any, payload: any) => {
      state.reviewedCases = payload;
    },
    completedCases: (state: any, payload: any) => {
      state.completedCases = payload;
    },
    analytics: (state: any, payload: any) => {
      state.analytics = payload;
    },
  },
  extraReducers: {
    [fetchAllCasesAsync.fulfilled.type]: (state, action) => {
      state.allCases = action.payload;
    },
    [fetchAssignedAsync.fulfilled.type]: (state, action) => {
      state.assignedCases = action.payload;
    },
    [fetchReviewedAsync.fulfilled.type]: (state, action) => {
      state.reviewedCases = action.payload;
    },
    [fetchCompletedAsync.fulfilled.type]: (state, action) => {
      state.completedCases = action.payload;
    },
    [fetchCasesAnalyticsAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchCasesAnalyticsAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.analytics = action.payload;
      }
    },
    [fetchCasesAnalyticsAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const cases = (state: RootState) => state.cases;
export const {
  analytics,
  allCases,
  assignedCases,
  reviewedCases,
  completedCases,
} = casesSlice.actions;
export default casesSlice.reducer;
