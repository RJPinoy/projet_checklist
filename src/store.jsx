import { configureStore } from '@reduxjs/toolkit';
import ListSlice from './composants/listsData/ListSlice';

const store = configureStore({
  reducer: {
    lists: ListSlice,
  },
});

export default store;