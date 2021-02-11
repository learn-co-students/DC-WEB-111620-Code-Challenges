import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      transactions: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch(`http://localhost:6001/transactions`)
      .then(resp => resp.json())
      .then(transaction => this.setState({ 
        transactions: transaction 
      }))
  }

  handleChange(searchTerm) {
    this.setState({
       searchTerm 
      })
  }

  render() {
    return (
      <div>
        <Search searchTerm={ this.state.searchTerm } handleChange={ this.handleChange } />
        <AddTransactionForm />
        <TransactionsList transactions={ this.state.transactions } searchTerm={ this.state.searchTerm } />
      </div>
    );
  }
}

export default AccountContainer;
