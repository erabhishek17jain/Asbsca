import { combineReducers } from '@reduxjs/toolkit';
import notificationsReducer from '../slices/notificationsSlice';
import usersReducer from '../slices/usersSlice';
import rolesReducer from '../slices/rolesSlice';
import branchsReducer from '../slices/branchsSlice';
import clientsReducer from '../slices/clientsSlice';
import productsReducer from '../slices/productsSlice';
import casesReducer from '../slices/casesSlice';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  users: usersReducer,
  roles: rolesReducer,
  branchs: branchsReducer,
  clients: clientsReducer,
  products: productsReducer,
  cases: casesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
