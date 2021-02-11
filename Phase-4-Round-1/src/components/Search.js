import React from "react";

const Search = ({ updateSearch }) => {
    return (
        <div className="ui large fluid icon input">
            <input
                type="text"
                placeholder={"Search your Recent Transactions"}
                onChange={(e) => updateSearch(e.target.value)}
            />
            <i className="circular search link icon"></i>
        </div>
    );
};

export default Search;
