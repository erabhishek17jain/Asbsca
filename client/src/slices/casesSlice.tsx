import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import {
  getCases,
  getAanalytics,
  getReportData,
  getExportCases,
} from '../services';

export interface ICase {}

export const fetchCasesAnalyticsAsync = createAsyncThunk(
  '/cases/analytics',
  getAanalytics,
);

export const fetchCasesAsync = createAsyncThunk('/cases/allCases', getCases);

export const fetchExporCasesAsync = createAsyncThunk(
  '/cases/exportCases',
  getExportCases,
);

export const fetchCaseReportDataAsync = createAsyncThunk(
  '/cases/report',
  getReportData,
);

export interface ICasesState {
  allCases: any;
  analytics: any;
  reportData: any;
  exportCases: any;
  loading: boolean;
  error: any;
}

const initialState: ICasesState = {
  allCases: [],
  analytics: [],
  exportCases: [],
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
    exportCases: (state: any, payload: any) => {
      state.exportCases = payload;
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
        state.allCases = [];
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
    [fetchExporCasesAsync.fulfilled.type]: (state, action) => {
      state.exportCases = action.payload;
    },
    [fetchExporCasesAsync.rejected.type]: (state, action) => {
      state.error = action.error;
    },
  },
});

export const cases = (state: RootState) => state.cases;
export const { analytics, allCases, exportCases, reportData } =
  casesSlice.actions;
export default casesSlice.reducer;
