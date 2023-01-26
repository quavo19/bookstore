// Actions
const STATUS = 'CATEGORIES/BOOK_STATUS';

const ReducerCategories = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default: return state;
  }
};

export const Status = () => (
  {
    type: STATUS,
  }
);

export default ReducerCategories;
