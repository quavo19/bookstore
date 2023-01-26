import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './BooksForm';

function BookList() {
  const Booklist = useSelector((state) => state.books);
  return (
    <>
      <ul>
        {Booklist.map((books) => (
          <li key={books.id}>
            {' '}
            <Book book={books} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}
export default BookList;
