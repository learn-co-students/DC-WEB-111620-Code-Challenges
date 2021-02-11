import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <select defaultValue="menu"
        onChange={event => props.handleSort(event.target.value)}>
        <option disabled value="menu">Sort Transactions</option>
        <option value="category">Sort By Category</option>
        <option value="description">Sort By Description</option>
      </select>
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(event) => {
          props.transactionSearch(event.target.value);
        }}
      />
      <i className="circular search link icon"></i>
      
    </div>
  );
};

export default Search;
