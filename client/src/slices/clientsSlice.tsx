import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { getClients } from '../services';

export interface IClient {}

export const fetchAllClientsAsync = createAsyncThunk(
  '/clients/allClients',
  getClients,
);

export interface IUsersState {
  allClients: IClient[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  allClients: [],
  loading: false,
  error: null,
};

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    allClients: (state: any, payload: any) => {
      state.allClients = payload;
    },
  },
  extraReducers: {
    [fetchAllClientsAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAllClientsAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.allClients = action.payload;
      }
    },
    [fetchAllClientsAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const clients = (state: RootState) => state.clients;
export const { allClients } = clientsSlice.actions;
export default clientsSlice.reducer;
