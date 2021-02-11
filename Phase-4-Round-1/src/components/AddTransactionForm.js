import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor() {
    super()
    this.state = {
      date: "", 
      description: "", 
      category: "", 
      amount: ""
    }
  }

  handleNewInput = (inputType, event) => {
    this.setState({
      [inputType]: event.target.value
    })
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={event => this.props.newTransactionForm(event)}>
          
          <div className="inline fields">
            <input type="date" name="date" onChange={(event) => this.handleNewInput("date", event)}/>

            <input type="text" name="description" placeholder="Description" onChange={(event) => this.handleNewInput("description", event)}/>

            <input type="text" name="category" placeholder="Category" onChange={(event) => this.handleNewInput("category", event)}/>

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(event) => this.handleNewInput("amount", event)}
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
