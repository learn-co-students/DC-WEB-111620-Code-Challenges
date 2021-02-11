import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions: [], 
    search: "", 
    filteredArray: []
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(bankData => this.setState({
        transactions: bankData, 
        filteredArray: bankData
      }))
  }


  // Add new transaction and persist it to the backend 

  newTransactionForm = (event) => {
    event.preventDefault()
    let newTransaction = {
      date: event.target.date.value, 
      description: event.target.description.value, 
      category: event.target.category.value, 
      amount: event.target.amount.value
    }
    event.target.reset()

    let reqPack = {
      headers: { "Content-Type": "application/json" }, 
      method: "POST", 
      body: JSON.stringify(newTransaction)
    }
    fetch(URL, reqPack)
      .then(resp => resp.json())
      .then((newData) => {
        this.setState({
        transactions: [...this.state.transactions, newData]
      })
    })
  }


  // Filter Transactions 

  searchTransactions = (inputValue) => {
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(inputValue.toLowerCase()))
    this.setState({
      filteredArray: filteredTransactions
    })
  }

  
  // showFiltered = (search) => {
  //   this.setState({search})
  // }

  // displayTransactions = () => {
  //   let displayTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search))
    
  //   return displayTransactions
  // }


  deleteTransaction = (transaction) => {
    let deletedTransaction = this.state.transaction.filter(deletedObj => deletedObj.id !== transaction.id)
    this.setState({
      transaction: deletedTransaction
    })
  }
 



  render() {
    return (
      <div>
        <Search
          searchTransactions = {this.searchTransactions}
        />

        <AddTransactionForm
          newTransactionForm={this.newTransactionForm} 
        />

        <TransactionsList
          // transactions={this.state.transactions} 
          transactions={this.state.filteredArray} 
          deleteTransaction={this.deleteTransaction}
        />

      </div>
    );
  }
}

export default AccountContainer;
