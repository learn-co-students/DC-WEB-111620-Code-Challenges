import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  } 

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newTrans = {...this.state}
    this.props.addTransaction(newTrans)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form"
          onSubmit={event => this.handleSubmit(event)}>
          <div className="inline fields">
            <input type="date" name="date" 
              onChange={event => this.handleChange(event)}
            />
            <input type="text" name="description" placeholder="Description" 
              onChange={event => this.handleChange(event)}
            />
            <input type="text" name="category" placeholder="Category" 
              onChange={event => this.handleChange(event)}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={event => this.handleChange(event)}
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
