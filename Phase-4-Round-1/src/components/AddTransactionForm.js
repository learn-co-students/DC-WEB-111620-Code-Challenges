import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    
    date: "",
    catagory: "",
    description: "",
    amount: ""
  }
  changeHandler = (e) => {
    console.log("value", e.target.value)
    console.log("name", e.target.name)

    this.setState({
      [e.target.name]:e.target.value 
    })

  }

  handleSubmit = (e) => {
    console.log("Submitted")
    e.preventDefault()
    let newTransaction = {
      date: this.state.date,
      catagory: this.state.catagory,
      description: this.state.catagory,
      amount: this.state.amount

    }
    let reqPackage = {
      headers:{
        "ContentType":"application/json"
      },
      method: "POST",
      body: JSON.stringify(newTransaction)
    }
    fetch('http://localhost:6001/transactions', reqPackage)
    .then(res=>res.json())
    .then(postedTransaction => {
      this.props.AddTransactionForm(postedTransaction)
    })

  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit}className="ui form">
          <div className="inline fields">
            <input onChange={this.changeHandler} type="date" name="date" />
            <input onChange={this.changeHandler} type="text" name="description" placeholder="Description" />
            <input onChange={this.changeHandler} type="text" name="category" placeholder="Category" />
            <input
            onChange={this.changeHandler}
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
