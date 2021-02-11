import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addNewTransaction={this.props.addNewTransaction}/>
        <TransactionsList transactionData={this.props.transactionData}

        />
      </div>
    );
  }
}

export default AccountContainer;
