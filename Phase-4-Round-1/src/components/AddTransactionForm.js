import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date:"", 
    description: "",
    category:"",
    amount:"",
  }

  changeHandler = (e) => {
    console.log(e.target.value)
    let {name, value} = e.target
    this.setState({[name]: value})
  }
  handleSubmit = (e) => {
  
    e.preventDefault()
    let newTransaction = {
      date:this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }
    let reqPackage = {
      method:'POST',
      body: JSON.stringify(newTransaction),
      headers:{'Content-Type':'application/json'},
    }
    fetch('http://localhost:6001/transactions', reqPackage)
    .then(res => res.json())
    .then(addedTransaction => {
      this.props.addTransaction(addedTransaction)
  })
  }



  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={this.changeHandler} type="date" name="date" />
            <input onChange={this.changeHandler} type="text" name="description" placeholder="Description" />
            <input onChange={this.changeHandler} type="text" name="category" placeholder="Category" />
            <input onChange={this.changeHandler}
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
