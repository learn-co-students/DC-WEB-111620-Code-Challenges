import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
         
        <Search />
        <AddTransactionForm />
        <TransactionsList
          {props.transactions.map((transaction)=><Transaction transaction={transaction} deleteTransaction={props.deleteTransaction}/>)}
        />
      </div>
    );
  }
}

export default AccountContainer;
