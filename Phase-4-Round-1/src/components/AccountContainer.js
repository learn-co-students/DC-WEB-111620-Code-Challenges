import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
    filtered: []
  }

  addTransaction = (transaction) => {
    let newTransactions = [...this.state.transactions, transaction]
    this.setState({
      tranactions: newTransactions
    })
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
  
  render() {
    return (
      <div>
        <Search searchTrans={this.searchTrans}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.filtered}/>
      </div>
    );
  }
}

export default AccountContainer;
