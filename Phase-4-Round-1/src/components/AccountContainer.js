import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(r=>r.json())
    .then(r => {
      this.setState({transactions: r})
    })
  }

  transactionInput = (addTransaction) => {
    let newArr = [...this.state.transactions, addTransaction]
    this.setState({transactions: newArr})
  }

  searchInput = (searchResult) => {
    this.setState({ search: searchResult})
  }

  fliterTransactions = () => {
    let {transactions, search} = this.state
    let filterSearch = transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(search.toLowerCase())
    })
    return filterSearch
  }

  render() {
    return (
      <div>
        <Search searchProp={this.state.search} searchInput={this.searchInput}/>
        <AddTransactionForm transactionInput={this.transactionInput}/>
        <TransactionsList transactions={this.fliterTransactions()}/>
      </div>
    );
  }
}

export default AccountContainer;
