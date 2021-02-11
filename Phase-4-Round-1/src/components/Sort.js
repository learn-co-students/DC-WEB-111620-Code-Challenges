import React from 'react';

const Sort = ({sort, handleSort}) => {
    return (
        <div style={{width: "400px", margin: "auto"}}>
            <label>Sort by:</label>
            <input type="radio" id="category" checked={sort === "category"} onChange={handleSort}/>
            <label for="category">Category</label>
            <input type="radio" id="description" checked={sort === "description"} onChange={handleSort}/>
            <label for="description">Description</label>
        </div>
    )
}

export default Sort;