import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleSubmit(e) {
    e.preventDefault()
    let newTransaction = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }
    
    let reqObj = {}
    reqObj.headers = {"Content-Type": "application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify(newTransaction)
    
    fetch('http://localhost:6001/transactions', reqObj)
    .then(r => r.json())
    .then(newTransaction => {
      this.props.addTransaction(newTransaction)
    })
    e.target.reset()
  }


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.handleSubmit(e)} className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.setState({date: e.target.value})} type="date" name="date" />
            <input onChange={(e) => this.setState({description: e.target.value})} type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.setState({category: e.target.value})} type="text" name="category" placeholder="Category" />
            <input onChange={(e) => this.setState({amount: e.target.value})}
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
