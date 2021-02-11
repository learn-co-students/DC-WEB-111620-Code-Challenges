import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  state = {
    date: null,
    description: "",
    category: "",
    amount: ""
  }

  handleChanges = (event) => {
    // console.log(event.target.value)
    console.log("this is the name", event.target.name, event.target.value)
    // console.log("this is the value")
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.props.addNewTransaction(event)} className="ui form">
          <div className="inline fields">
            <input onChange={(event) => this.handleChanges(event)} type="date" name="date" />
            <input onChange={(event) => this.handleChanges(event)} type="text" name="description" placeholder="Description" />
            <input onChange={(event) => this.handleChanges(event)} type="text" name="category" placeholder="Category" />
            <input onChange={(event) => this.handleChanges(event)}
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
