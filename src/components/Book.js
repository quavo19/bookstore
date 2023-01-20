import React from 'react';

function Book(prop) {
  const { title, author } = prop;
  return (
    <div className="abook flex">
      <div className="first-row flex">
        <p>Action</p>
        <p>{title}</p>
        <p>{author}</p>
        <div className=" control-buttons flex">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="second-row flex">
        <div className="state flex">
          <div className="circle"> </div>
          <div>
            <p>64%</p>
            <p>completed</p>
          </div>
        </div>
        <div>
          <p>Current Chapter</p>
          <p>Chapter  17</p>
          <button type="button" className="button">UPDATE PROCESS</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
