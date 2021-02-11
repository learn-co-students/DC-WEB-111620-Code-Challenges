import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search handleSearch={this.props.handleSearch}/>
        <AddTransactionForm addNewTransaction={this.props.addNewTransaction}/>
        {/* {this.props.transactionData.map(singleTransaction => <TransactionsList transaction={singleTransaction}/>)} */}
        <TransactionsList deleteTrans={this.props.deleteSingleTransaction} transaction={this.props.transactionData}/>
      </div>
    );
  }
}

export default AccountContainer;
