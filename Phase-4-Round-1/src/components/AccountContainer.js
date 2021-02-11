import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const transactionUrl = "http://localhost:6001/transactions"

class AccountContainer extends Component {
  state = {
    allTransactions: []
  }
componentDidMount = () => {
  fetch(transactionUrl)
  .then(response => response.json())
  .then(allTransactions=>this.setState({allTransactions}))
}

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList
          allTransactions ={this.state.allTransactions} 
          />
      </div>
    );
  }
}

export default AccountContainer;
