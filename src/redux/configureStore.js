import { configureStore } from '@reduxjs/toolkit';
import { ReducerBooks } from './books/Books';
import ReducerCategories from './categories/Categories';

const store = configureStore({
  reducer: {
    books: ReducerBooks.reducer,
    categories: ReducerCategories,
  },
});

export default store;
