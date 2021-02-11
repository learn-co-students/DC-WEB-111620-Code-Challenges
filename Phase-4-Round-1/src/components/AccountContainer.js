import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const BASE_URL = "http://localhost:6001/transactions"



class AccountContainer extends Component {

state = {
  allTransactions: [],
  searchTerm: ""
}

componentDidMount = () => {
  fetch(BASE_URL)
  .then(resp => resp.json())
  .then(transData => this.setState({allTransactions: transData}))
}


handleSubmit = (e) => {
  e.preventDefault();
  let newTransaction = {
    date: e.target.date.value,
    description: e.target.description.value,
    category: e.target.category.value,
    amount: e.target.amount.value
  };
  this.setState({
    allTransactions: [...this.state.allTransactions, newTransaction]
  });

  fetch(BASE_URL, {
    headers: {"Content-Type": "application/json"},
    method: 'POST',
    body: JSON.stringify(newTransaction),
  });
  
}

editSearchTerm = (e) => {
  this.setState ({searchTerm: e.target.value})
}

dynamicSearch=()=>{
  return this.state.name.filter(name=> name.toLowerCase().includes(this.state.searchTerm.searchTerm()))
}

  render() {
    return (
      <div>
        <Search searchTerm={this.editSearchTerm} dynamicSearch={this.dynamicSearch}/>
        <AddTransactionForm handleSubmit={this.handleSubmit} />
        <TransactionsList 
        allTransactions = {this.state.allTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
