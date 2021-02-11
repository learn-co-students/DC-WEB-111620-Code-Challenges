import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={
    date: "",
    description: "",
    category: "",
    amount: ""
    
  }

  

  submitHandler = (e) => {
    e.preventDefault()

    let newTrans= {

    date: this.state.date,
    description: this.state.description,
    category: this.state.category,
    amount: this.state.amount
  }

  let reqPackage = {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(newTrans)
  }
  
  fetch("http://localhost:6001/transactions", reqPackage)
    .then(res => res.json())
    .then(postedTrans => {
      this.props.addTrans(postedTrans)
    })

  }



  render() {
    return (
      <div className="ui segment">
        <form onSubmit= {this.submitHandler} className="ui form">
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
}

export default AddTransactionForm;
