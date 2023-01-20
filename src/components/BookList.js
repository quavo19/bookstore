import React from 'react';
import Book from './Book';
import Form from './BooksForm';

class BookList extends React.PureComponent {
  render() {
    const state = [
      {
        key: 0,
        title: 'Love and thunder',
        author: 'Donald',
      },
      {
        key: 1,
        title: 'Evil Guys',
        author: 'Donald',
      },
      {
        key: 2,
        title: 'Stirke',
        author: 'Donald',
      },
      {
        key: 3,
        title: 'Behold to all',
        author: 'Donald',
      },
    ];
    return (
      <>
        <ul>
          {state.map((books) => (
            <li key={books.key}>
              {' '}
              <Book title={books.title} author={books.author} />
            </li>
          ))}
        </ul>
        <Form />
      </>
    );
  }
}
export default BookList;
