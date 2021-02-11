import React from 'react';

const Sort = ({handleSort}) => {
  return (
  <div className="sort">
    <label >Sort transactions </label>
    <select name="cars" id="cars" onChange={handleSort}>
        <option value="null"></option>
        <option value="category">Category</option>
        <option value="description">Description</option>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
    </select>
  </div>
  )
}

export default Sort;