import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';

export interface IUser {
  fullName: string;
  username: string;
  email: string;
  mobileNo: string;
  aboutMe: string;
  profile: any;
}

export const fetchCurrentUserAsync = createAsyncThunk(
  '/users/userDetails',
  async (username) => {
    try {
      const response = await axios.get(`/api/user/${username}`);
      return response?.data;
    } catch (err) {
      return console.log(err);
    }
  },
);

export interface IUsersState {
  userDetails: {};
  allUsers: IUser[];
  loading: 'idle' | 'pending';
  error: any;
}

const initialState: IUsersState = {
  userDetails: {},
  allUsers: [],
  loading: 'idle',
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userDetails: (state, payload) => {
      state.userDetails = payload;
    },
  },
  extraReducers: {
    [fetchCurrentUserAsync.pending.type]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchCurrentUserAsync.fulfilled.type]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.userDetails = action.payload;
      }
    },
    [fetchCurrentUserAsync.rejected.type]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});

export const users = (state: RootState) => state.users;
export const { userDetails } = usersSlice.actions;
export default usersSlice.reducer;
