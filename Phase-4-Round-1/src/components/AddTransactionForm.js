import React, { Component } from "react";
let URL = 'http://localhost:6001/transactions'

class AddTransactionForm extends Component {

  state = {
    transactionDate: "",
    transactionDescription: "",
    transactionCategory: "",
    transactionAmount: ""
  }

  handleSubmit(e){
    e.preventDefault()
    
    let newTransaction = {
      date: this.state.transactionDate,
      description: this.state.transactionDescription,
      category: this.state.transactionCategory,
      amount: this.state.transactionAmount
    }
    let reqObj = {}
        reqObj.headers = {"Content-Type": "application/json"}
        reqObj.method = "POST"
        reqObj.body = JSON.stringify(newTransaction)

        fetch(URL, reqObj)
          .then(response => response.json())
          .then(newTransaction => {
            this.props.addNewTransaction(newTransaction)
          })
          e.target.reset()
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.handleSubmit(e)} className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.setState({transactionDate: e.target.value})} type="date" name="date" />
            <input onChange={(e) => this.setState({transactionDescription: e.target.value})} type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.setState({transactionCategory: e.target.value})} type="text" name="category" placeholder="Category" />
            <input onChange={(e) => this.setState({transactionAmount: e.target.value})}
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
