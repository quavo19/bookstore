import { configureStore } from '@reduxjs/toolkit';
import ReducerBooks from './books/Books';
import ReducerCategories from './categories/Categories';

export default configureStore({
  reducer: {
    ReducerBooks,
    ReducerCategories,
  },
});
