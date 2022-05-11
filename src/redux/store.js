import { configureStore } from '@reduxjs/toolkit';
import dbStatusReducer from './dbStatus';
import applicationStatusReducer from './applicationStatus';

export const store = configureStore({
  reducer: {
      dbStatus: dbStatusReducer,
      applicationStatus: applicationStatusReducer
  },
})