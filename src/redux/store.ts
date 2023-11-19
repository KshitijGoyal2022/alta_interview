import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './store/actions/apiDataSlice';

export const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export default store;