import React from "react";

const Search = ({search, handleSearch}) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={search}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
