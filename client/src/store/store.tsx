import { Action, ThunkAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';

const middleware = getDefaultMiddleware({
  serializableCheck: false,
  thunk: {
    extraArgument: {},
  },
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export default store;
