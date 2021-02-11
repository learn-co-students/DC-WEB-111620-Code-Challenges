import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor() {
    super()
    this.state = {
      date: "",
      description: "",
      category: "",
      amount: 0
    }
  }

  // handleInput = (event) => {
  //   this.setState({
  //     date: event.target.value,
  //     description: event.target.value,
  //     category: event.target.value,
  //     amount: event.target.value,
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount,
      })
    })
    .then(resp => resp.json())
    .then(transaction => this.setState({
      
    }))
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={e => this.handleSubmit(e)}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={(e) => this.setState({date: e.target.value})}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={(e) => this.setState({amount: e.target.value})}
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