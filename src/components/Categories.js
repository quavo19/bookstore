import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Status } from '../redux/categories/Categories';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handlestatus = () => {
    dispatch(Status());
  };
  return (
    <div className="categories">
      <p>{status}</p>
      <button className="button" type="button" onClick={handlestatus}>Check status</button>
    </div>
  );
}

export default Categories;
