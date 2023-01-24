// Actions
const STATUS = 'CATEGORIES/BOOK_STATUS';

export const Status = () => (
  {
    type: STATUS,
  }
);

// reducer
const ReducerCategories = (action, state = []) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default: return state;
  }
};

export default ReducerCategories;
