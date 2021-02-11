import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
    filtered: [],
    sort: "none"
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then(transData => this.setState({transactions: transData}))
    }
    
    searchTrans = (newSearch) => {
      this.setState({search: newSearch})
      let filteredTrans = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
      this.setState({filtered: filteredTrans})
    }
    
    addTransaction = (transaction) => {
      let newTransactions = [...this.state.transactions, transaction]
      this.setState({
        transactions: newTransactions
      })
    }

    deleteTransaction = (delTransaction) => {
      fetch("http://localhost:6001/transactions/" + delTransaction.id, {
        method: "DELETE"
      })
      let newTransactions = this.state.transactions.filter(transaction => transaction !== delTransaction)
      this.setState({transactions: newTransactions})
    }

    sortTransaction = (sortChoice) => {
      this.setState({sort: sortChoice})
      let sort = this.state.sort
      switch(sort) {
        case "none":
          return (
            console.log("nothing selected")
          )
        case "category":
          return(
            console.log("category selected")
          )
        case "description":
          return(
            console.log("description selected")
          )
      }
    }

  render() {
    return (
      <div>
        <Search searchTrans={this.searchTrans}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <Sort sortTransaction={this.sortTransaction} sort={this.state.sort}/>
        <TransactionsList deleteTransaction={this.deleteTransaction} 
            transactions={this.state.search === "" ? this.state.transactions : this.state.filtered}
        />
      </div>
    );
  }
}

export default AccountContainer;
