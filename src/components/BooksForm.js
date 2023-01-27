import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/Books';

function Form() {
  const [userInput, setUserInput] = useState({
    id: '',
    genre: 'Action',
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const Name = e.target.name;
    setUserInput({
      ...userInput,
      id: uuidv4(),
      [Name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddBook(userInput));
    setUserInput({
      title: '',
      author: '',
    });
  };
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <div>
        <form className=" form flex" onSubmit={handleSubmit}>
          <input
            className="book-input"
            placeholder="Boot title"
            value={userInput.title}
            name="title"
            onChange={handleInput}
          />
          <input
            className="Author-input"
            placeholder="Author"
            name="author"
            value={userInput.author}
            onChange={handleInput}
          />
          <button type="submit" className="button">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
