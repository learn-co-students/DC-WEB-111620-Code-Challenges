import React from "react";

const AddTransactionForm = ({handleSubmit}) => {

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
}

export default AddTransactionForm;
