import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './store/actions/apiDataSlice';
import creatorInfoDataSliceReducer from './store/actions/creatorInfoDataSlice';

export const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    // creatorInfoData: creatorInfoDataSliceReducer,
  },
});

export default store;