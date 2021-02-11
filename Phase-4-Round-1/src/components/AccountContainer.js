import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const URL = "http://localhost:6001/transactions/"

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
  }

  componentDidMount() {
    fetch(URL)
      .then(r => r.json())
      .then(transactions => this.setState({transactions}))
  }

  addNewTransaction = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction]
    })
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search))}/>
      </div>
    );
  }
}

export default AccountContainer;
