import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchdata } from '../redux/books/Books';
import Book from './Book';
import Form from './BooksForm';

function BookList() {
  let Booklist = [];
  Booklist = useSelector((state) => state.books).book;
  if (Booklist === null || Booklist === undefined) {
    Booklist = [];
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);
  return (
    <div className="Main-content">
      <ul className="list">
        {Booklist.map((books) => (
          <li key={books.id}>
            {' '}
            <Book book={books} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
export default BookList;
