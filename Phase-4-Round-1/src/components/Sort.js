import React from "react";

const Sort = (props) => {

  return (
    <div className="ui segment">
        <form onChange={(e) => props.sortTransaction(e.target.value)} className="ui form">
            <div className="inline fields"> 
                <h3 className="ui header">Sort by:</h3>
                <input checked={props.sort === "none"} type="radio" name="choice" value="none"/> None
                <input checked={props.sort === "category"} type="radio" name="choice" value="category"/> Category
                <input checked={props.sort === "description"} type="radio" name="choice" value="description"/> Description
            </div>
        </form>
    </div>
  );
};

export default Sort;
