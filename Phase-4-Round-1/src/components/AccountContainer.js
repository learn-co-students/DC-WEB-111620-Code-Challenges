import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    query: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactionData => this.setState({transactions: transactionData}))
  }

  addTransaction = (newTrans) => {
    let reqPack = {}
        reqPack.body = JSON.stringify(newTrans)
        reqPack.method = "POST"
        reqPack.headers = {"Content-Type": "application/json"}
    
    fetch('http://localhost:6001/transactions', reqPack)
    .then(resp => resp.json())
    .then(transaction => this.setState({transactions: [...this.state.transactions, transaction]}))
  }

  transactionSearch = (query) => {
    this.setState({query: query})
  }

  deleteTransaction = (transaction) => {
    fetch(`http://localhost:6001/transactions/${transaction.id}`, {method: 'DELETE'})
    
    this.setState({transactions: this.state.transactions.filter(trans => trans !== transaction)})
  }

  handleSort = (sort) => {
    this.setState({transactions: this.state.transactions.sort((a, b) => a[sort] > b[sort] ? 1 : -1)})
  }

  render() {
    return (
      <div>
        <Search transactionSearch={this.transactionSearch}
          handleSort={this.handleSort}
        />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.query.toLowerCase()))}
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
