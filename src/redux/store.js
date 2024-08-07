import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../redux/features/auth/authSlice';
import mainReducer from '../redux/features/Main/mainSlice';
import parentReducer from './features/parent/parentSlice';

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    main: mainReducer,
    parent: parentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
