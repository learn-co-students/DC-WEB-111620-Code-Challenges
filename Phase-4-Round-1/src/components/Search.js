import React from "react";

const Search = (props) => {
  
  const handleChange = (e) => {
    props.filterTransactions(e.target.value)
  }

  return (
    <div className="ui large fluid icon input" >
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {
          console.log("Searching...");
          handleChange(e)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
