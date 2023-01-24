import { configureStore } from '@reduxjs/toolkit';
import Reducer from './books/Books';
import ReducerCategories from './categories/Categories';

export default configureStore({
  reducer: {
    Reducer,
    ReducerCategories,
  },
});
