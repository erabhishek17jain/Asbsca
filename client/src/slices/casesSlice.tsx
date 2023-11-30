import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { getCases, getAanalytics, getReportData } from '../services';

export interface ICase {}

export const fetchCasesAnalyticsAsync = createAsyncThunk(
  '/cases/analytics',
  getAanalytics,
);

export const fetchCasesAsync = createAsyncThunk(
  '/cases/allCases',
  getCases,
);

export const fetchCaseReportDataAsync = createAsyncThunk(
  '/cases/report',
  getReportData,
);

export interface ICasesState {
  allCases: any;
  analytics: any;
  reportData: any;
  loading: boolean;
  error: any;
}

const initialState: ICasesState = {
  allCases: [],
  analytics: [],
  reportData: {},
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
    analytics: (state: any, payload: any) => {
      state.analytics = payload;
    },
    reportData: (state: any, payload: any) => {
      state.reportData = payload;
    },
  },
  extraReducers: {
    [fetchCasesAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchCasesAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.allCases = action.payload;
      }
    },
    [fetchCasesAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
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
    [fetchCaseReportDataAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchCaseReportDataAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.reportData = action.payload;
      }
    },
    [fetchCaseReportDataAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const cases = (state: RootState) => state.cases;
export const { analytics, allCases, reportData } = casesSlice.actions;
export default casesSlice.reducer;
