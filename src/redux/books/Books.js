const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  {
    id: '0',
    genre: 'Action',
    title: 'Family guy',
    author: 'donald',
  },
  {
    id: '1',
    genre: 'Action',
    title: 'family guy',
    author: 'Akite',
  },
];

const ReducerBooks = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.payload,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};
export const AddBook = (payload) => (
  {
    type: ADD,
    payload,
  }
);

export const RemoveBook = (payload) => (
  {
    type: REMOVE,
    payload,
  }
);

export default ReducerBooks;
