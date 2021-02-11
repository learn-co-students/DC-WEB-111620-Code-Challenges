import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchText: ""
  }

  componentDidMount= () => {
    fetch(URL)
      .then(r => r.json())
      .then(transactions => this.setState({transactions: transactions}))
  }

  addTransaction = (transaction) => {
    console.log(transaction)
  }

  addSearchText = (text) => {
    this.setState({searchText: text})
  }

  render() {
    return (
      <div>
        <Search addSearchText = {this.addSearchText}/>
        <AddTransactionForm addTransaction = {this.addTransaction}/>
        <TransactionsList transactions = {this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
