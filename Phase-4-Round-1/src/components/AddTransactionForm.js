import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  changeHandler = (e) => {
    // console.log(e.target.name)

     
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()

    let {date, description, category, amount} = this.state

    let newTransaction ={
      date: date,
      description: description,
      category: category,
      amount: amount
    }

    let reqPack = {
      headers: {"Content-Type" : "application/json"},
      method: "POST",
      body: JSON.stringify(newTransaction)
    }
    fetch("http://localhost:6001/transactions", reqPack)
      .then(r => r.json())
      .then(postedTransaction => {
        this.props.addTransaction(postedTransaction)
      })

  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={(e)=>this.changeHandler(e)} type="date" name="date" />
            <input onChange={(e)=>this.changeHandler(e)} type="text" name="description" placeholder="Description" />
            <input onChange={(e)=>this.changeHandler(e)} type="text" name="category" placeholder="Category" />
            <input 
            onChange={(e)=>this.changeHandler(e)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button onClick={(e) => this.handleSubmit(e)} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
