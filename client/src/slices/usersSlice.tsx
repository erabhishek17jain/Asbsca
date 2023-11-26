import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { getUsers, selfDetails } from '../services';

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
  selfDetails,
);
export const fetchAllUsersAsync = createAsyncThunk(
  '/users/allUsers',
  getUsers,
);

export interface IUsersState {
  userDetails: any;
  allUsers: IUser[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  userDetails: null,
  allUsers: [],
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
        state.error = null;
        state.userDetails = action.payload;
      }
    },
    [fetchUserAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.userDetails = null;
        state.error = action.error?.message;
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
  },
});

export const users = (state: RootState) => state.users;
export const { userDetails, allUsers } = usersSlice.actions;
export default usersSlice.reducer;
