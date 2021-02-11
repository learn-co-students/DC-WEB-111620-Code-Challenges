import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from './Sort'
const URL = "http://localhost:6001/transactions/";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
    sort: ""
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

  handleSort =(e) => {
    this.setState({
      sort: e.target.id
    })
    const transactions = this.state.transactions
    transactions.sort((a, b) => (a[e.target.id] > b[e.target.id]) ? 1 : -1)
    this.setState({
      transactions: transactions
    })
  }

  render() {
    return (
      <div>
        <Sort handleSort={this.handleSort} sort={this.state.sort}/>
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList handleDelete={this.handleDelete} transactions={this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search))}/>
      </div>
    );
  }
}


export default AccountContainer;
