import React, { Component } from "react";

class AddTransactionForm extends Component {

state = {
  date: "",
  description: "",
  category: "",
  amount: ""
}

handleSubmit =(e) => {
  e.preventDefault()
  let newTransaction = {
    date: this.state.date,
    description: this.state.description,
    category: this.state.category,
    amount: this.state.amount
  }

  let reqPack = {
    headers: {"Content-Type" : "application/json"},
    method: "POST",
    body: JSON.stringify(newTransaction)
  }

  fetch("http://localhost:6001/transactions", reqPack)
  .then(resp => resp.json())
  .then(newTransaction => {this.props.addTransaction(newTransaction)
  //e.target.reset()
})
}

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.handleSubmit(e)} className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.setState({date: e.target.value})} type="date" name="date" />
            <input onChange={(e) => this.setState({description: e.target.value})} type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.setState({category: e.target.value})} type="text" name="category" placeholder="Category" />
          
            <input
            onChange={(e) => this.setState({amount: e.target.value})}
             type="number" 
             name="amount"
              placeholder="Amount" 
              step="1"
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
