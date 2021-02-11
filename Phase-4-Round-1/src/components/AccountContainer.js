import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/transactions")
    .then(res =>  res.json())
    .then(data => { 
      this.setState({
        transactions: data
      })}
    )
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
