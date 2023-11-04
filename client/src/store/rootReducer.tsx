import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from '../slices/usersSlice';
import rolesReducer from '../slices/rolesSlice';
import branchsReducer from '../slices/branchsSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  roles: rolesReducer,
  branchs: branchsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
