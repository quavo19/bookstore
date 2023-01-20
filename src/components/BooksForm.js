import React from 'react';

function Form() {
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <div>
        <form className=" form flex">
          <input
            className="book-input"
            placeholder="Boot title"
          />
          <input
            className="Author-input"
            placeholder="Author"
          />
          <button type="button" className="button">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
