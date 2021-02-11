import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        // value = {props.state.searchTerm}
        onChange={() => {
          // props.editSearchTerm
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
