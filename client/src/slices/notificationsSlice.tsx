import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';
import { getNotifications } from '../services';

export interface INotification {
  title: string;
  body: string;
  createdAt: string;
}

export const fetchAllNotificationsAsync = createAsyncThunk('/notifications/allNotifications', getNotifications);

export interface IUsersState {
  allNotifications: INotification[];
  loading: boolean;
  error: any;
}

const initialState: IUsersState = {
  allNotifications: [],
  loading: false,
  error: null,
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    allNotifications: (state: any, payload: any) => {
      state.allNotifications = payload;
    },
  },
  extraReducers: {
    [fetchAllNotificationsAsync.pending.type]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAllNotificationsAsync.fulfilled.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.allNotifications = action.payload;
      }
    },
    [fetchAllNotificationsAsync.rejected.type]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const notifications = (state: RootState) => state.notifications;
export const { allNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
