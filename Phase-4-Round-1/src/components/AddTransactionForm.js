import React, { Component } from "react";
const URL = "http://localhost:6001/transactions/";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleChange = (e) => {
    if (e.target.name === "amount") {
      this.setState({
        [e.target.name]: +e.target.value
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTransaction = this.state

    const reqPack = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(newTransaction)
    }

    fetch(URL, reqPack)
      .then(r => r.json())
      .then(newTransaction => {
        this.props.addNewTransaction(newTransaction)
      })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
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
