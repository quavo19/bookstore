import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/Books';

function Book({ book }) {
  const {
    title, author,
  } = book;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(RemoveBook(book.id));
  };
  return (
    <div className="abook flex">
      <div className="first-row flex">
        <p className="genre">Action</p>
        <h2>{title}</h2>
        <p className="blue">{author}</p>
        <div className=" control-buttons flex blue">
          <button type="button">Comments</button>
          <button type="button" onClick={handleDelete}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="second-row flex">
        <div className="state flex">
          <div className="circle"> </div>
          <div className="completed-percentage">
            <p className="percentage">64%</p>
            <p className="completed">completed</p>
          </div>
        </div>
        <div className="process">
          <p className="completed">Current Chapter</p>
          <p>Chapter  17</p>
          <button type="button" className="button">UPDATE PROCESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    genre: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
