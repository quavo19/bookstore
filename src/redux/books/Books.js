// Actions
const REMOVE = 'BOOKS/BOOK_REMOVED';
const ADD = 'BOOKS/BOOK_ADDED';

// book array
const book = [];

export const AddBook = (bookitem) => (
  {
    type: ADD,
    payload: bookitem,
  }
);

export const RemoveBook = (bookid) => (
  {
    type: REMOVE,
    payload: bookid,
  }
);

// reducer
const Reducer = (action, state = [...book]) => {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.payload,
      ];
    case REMOVE:
      return state.filter((removed) => removed.id !== action.payload);
    default: return state;
  }
};

export default Reducer;
