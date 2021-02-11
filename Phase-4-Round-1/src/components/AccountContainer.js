import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchText: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(r => r.json())
    .then(transData => this.setState({
      transactions: transData
    }))
    // .then(console.log)
  }

  addTransaction = (newTrans) =>{
    // console.log(newTrans)
    this.setState({
      transactions: [...this.state.transactions, newTrans]
    })
  }

  searchBar = (textT)=>{
    // console.log(textT)
    this.setState({
      searchText: textT
    })
  }

  render() {
  const filteredTrans = this.state.transactions.filter(filterTrans => filterTrans.description.toLowerCase().includes(this.state.searchText))
    return (
      <div>
        <Search searchBar={this.searchBar} searchText={this.state.searchText}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={filteredTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
