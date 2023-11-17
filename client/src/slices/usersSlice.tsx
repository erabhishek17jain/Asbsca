import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { baseAPI } from '../constants';

export interface IUser {
  username: string;
  password: string;
  email: string;
  fullName: string;
  role: string;
  mobile: number;
  address: string;
  status: string;
  profile: string;
}

export const fetchUserAsync = createAsyncThunk(
  '/users/userDetails',
  async () => {
    try {
      const response = await axios.get(`${baseAPI}/users/self-detail`, {
        withCredentials: true,
      });
      return response?.data;
    } catch (err:any) {
      return console.log(err?.response?.data?.message);
    }
  },
);

export const fetchAllUsersAsync = createAsyncThunk(
  '/users/allUsers',
  async () => {
    try {
      const response = await axios.get(`${baseAPI}/users/list`);
      return response?.data;
    } catch (err) {
      return console.log(err);
    }
  },
);

export const fetchTopPerformersAsync = createAsyncThunk(
  '/users/topPerformers',
  async () => {
    try {
      const response = await axios.get(`${baseAPI}/users/topPerformers`);
      return response?.data;
    } catch (err) {
      return console.log(err);
    }
  },
);

export interface IUsersState {
  userDetails: any;
  allUsers: IUser[];
  topPerformers: IUser[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  userDetails: null,
  allUsers: [],
  topPerformers: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userDetails: (state: any, payload: any) => {
      state.userDetails = payload;
    },
    allUsers: (state: any, payload: any) => {
      state.allUsers = payload;
    },
    topPerformers: (state: any, payload: any) => {
      state.topPerformers = payload;
    },
  },
  extraReducers: {
    [fetchUserAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchUserAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.userDetails = action.payload;
      }
    },
    [fetchUserAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
    [fetchAllUsersAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAllUsersAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.allUsers = action.payload;
      }
    },
    [fetchAllUsersAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
    [fetchTopPerformersAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchTopPerformersAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.topPerformers = action.payload;
      }
    },
    [fetchTopPerformersAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const users = (state: RootState) => state.users;
export const { userDetails, allUsers, topPerformers } = usersSlice.actions;
export default usersSlice.reducer;
