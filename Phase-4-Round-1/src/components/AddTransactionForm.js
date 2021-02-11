import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    newDate: "",
    newDesc: "",
    newCate: "",
    newAmou: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    const newTrans = {
      date: this.state.newDate,
      description: this.state.newDesc,
      category: this.state.newCate,
      amount: this.state.newAmou
    }

    const reqPack = {}
      reqPack.headers = {"Content-Type" : "application/json"}
      reqPack.method = "POST"
      reqPack.body = JSON.stringify(newTrans)

    fetch("http://localhost:6001/transactions", reqPack)
      .then(r => r.json())
      .then(newTransaction => this.props.addTransaction(newTransaction))

    e.target.reset()
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.handleSubmit(e)} className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.setState({newDate: e.target.value})} type="date" name="date" />
            <input onChange={(e) => this.setState({newDesc: e.target.value})} type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.setState({newCate: e.target.value})} type="text" name="category" placeholder="Category" />
            <input
              onChange={(e) => this.setState({newAmou: e.target.value})}
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
