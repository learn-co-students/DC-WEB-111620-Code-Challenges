import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search changeSearch={this.props.changeSearch}/>
        <AddTransactionForm 
        handleSubmit={this.props.handleSubmit}
        // addNewTrans={this.props.addNewTrans}
        />
        <TransactionsList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
