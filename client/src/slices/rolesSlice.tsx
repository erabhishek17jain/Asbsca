import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { baseAPI } from '../constants';

export interface IRole {
  fullName: string;
  username: string;
  email: string;
  mobileNo: string;
  aboutMe: string;
  profile: any;
}

export const fetchAllRolesAsync = createAsyncThunk(
  '/roles/allRoles',
  async () => {
    try {
      const response = await axios.get(`${baseAPI}/users/roles/list`);
      return response?.data;
    } catch (err) {
      return console.log(err);
    }
  },
);

export interface IUsersState {
  allRoles: IRole[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  allRoles: [],
  loading: false,
  error: null,
};

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    allRoles: (state: any, payload: any) => {
      state.allRoles = payload;
    },
  },
  extraReducers: {
    [fetchAllRolesAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAllRolesAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.allRoles = action.payload;
      }
    },
    [fetchAllRolesAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const roles = (state: RootState) => state.roles;
export const { allRoles } = rolesSlice.actions;
export default rolesSlice.reducer;
