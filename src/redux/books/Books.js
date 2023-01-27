import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const AvatarUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MKMXZSRLMT7EJbn2x6wX/books';

export const fetchdata = createAsyncThunk('books/book/GET_BOOKS', async () => {
  const BookResults = await fetch(AvatarUrl);
  const BookData = await BookResults.json();
  const Book = [];
  Object.keys(BookData).forEach((item) => {
    const book = {
      id: item,
      title: BookData[item][0].title,
      author: BookData[item][0].author,
      category: BookData[item][0].category,
    };
    Book.push(book);
  });
  return Book;
});

export const AddBook = createAsyncThunk('books/book/ADD', async (book) => {
  await fetch(AvatarUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  });
  return book;
});

export const RemoveBook = createAsyncThunk('books/book/REMOVE', async (id) => {
  await fetch(`${AvatarUrl}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      itemId: id,
    }),
  });
  return id;
});

export const ReducerBooks = createSlice({
  name: 'bookstore/book/',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.fulfilled, (state, action) => (
        { ...state, book: [...action.payload] }))
      .addCase(AddBook.fulfilled, (state, action) => {
        state.book.push(action.payload);
      })
      .addCase(RemoveBook.fulfilled, (state, action) => (
        {
          ...state,
          book:
          state.book.filter((book) => book.id !== action.payload),
        }
      ));
  },
});

export default ReducerBooks;
