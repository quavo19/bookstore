import { configureStore } from '@reduxjs/toolkit';
import Reducer from './books/books';
import ReducerCategories from './categories/Categories';

export default configureStore({
  reducer: {
    Reducer,
    ReducerCategories,
  },
});
