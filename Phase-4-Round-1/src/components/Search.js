import React from "react";

const Search = ({handleSearch}) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(event) => {
          handleSearch(event);
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
