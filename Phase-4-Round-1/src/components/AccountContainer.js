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

  handleDelete = (deletedTransaction) => {
    fetch(URL + deletedTransaction.id, {method: "DELETE"})
      .then(r => r.json())
      .then(() => this.setState({
        transactions: this.state.transactions.filter(transaction => transaction !== deletedTransaction)
      }))
  }

  render() {
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList handleDelete={this.handleDelete} transactions={this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search))}/>
      </div>
    );
  }
}

export default AccountContainer;
