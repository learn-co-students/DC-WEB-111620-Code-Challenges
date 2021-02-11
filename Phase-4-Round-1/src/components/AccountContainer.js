import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions: [],
    search: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then(transactionData => this.setState({transactions: transactionData}))
  }

  addNewTransaction = (newTransaction) => {
    this.setState({transactions: [...this.state.transactions, newTransaction]})
  }

  updateSearch = (search) => {
    this.setState({
      search: search
    })
  }

  displayTransactions = () => {
    
    let displayTransactions = this.state.transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.search))
    return displayTransactions
  } 

  render() {

    return (
      <div>
        <Search updateSearch={this.updateSearch} />
        <AddTransactionForm addNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={this.displayTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
