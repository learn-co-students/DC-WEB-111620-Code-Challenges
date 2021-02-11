import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then(transactions => this.setState({transactions}))
  }

  addTransaction = (transaction) => {
    // console.log("added transaction",transaction)
    this.setState({transactions:[...this.state.transactions, transaction]})
  }
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
