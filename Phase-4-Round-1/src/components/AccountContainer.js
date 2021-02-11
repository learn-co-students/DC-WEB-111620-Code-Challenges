import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

    

  render() {
    return (
      <div>
        <Search changeSearch={this.props.changeSearch}/>
        <AddTransactionForm createTrans={this.props.createTrans}/>
        {this.props.trans.map(trans => <TransactionsList trans={trans} removeTrans={this.props.removeTrans} />)}
      </div>
    );
  }
}

export default AccountContainer;
