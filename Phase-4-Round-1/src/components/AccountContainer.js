import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search filterTransactions={this.props.filterTransactions}/>
        <AddTransactionForm addTransaction={this.props.addTransaction}/>
        <TransactionsList sortTransactions={this.props.sortTransactions} deleteTransaction={this.props.deleteTransaction} transactions={this.props.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
