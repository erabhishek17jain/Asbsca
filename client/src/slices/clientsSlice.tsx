import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { baseAPI } from '../constants';

export interface IClient {}

export const fetchAllClientsAsync = createAsyncThunk(
  '/clients/allClients',
  async () => {
    try {
      const response = await axios.get(`${baseAPI}/clients/list`);
      return response?.data;
    } catch (err) {
      return console.log(err);
    }
  },
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
