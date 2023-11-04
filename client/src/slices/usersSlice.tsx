import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { baseAPI } from '../constants';

export interface IUser {
  fullName: string;
  username: string;
  email: string;
  mobileNo: string;
  aboutMe: string;
  profile: any;
}

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

export interface IUsersState {
  userDetails: {};
  allUsers: IUser[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  userDetails: {},
  allUsers: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    allUsers: (state: any, payload: any) => {
      state.allUsers = payload;
    },
  },
  extraReducers: {
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
  },
});

export const users = (state: RootState) => state.users;
export const { allUsers } = usersSlice.actions;
export default usersSlice.reducer;
