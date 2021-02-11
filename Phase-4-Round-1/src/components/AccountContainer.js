import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
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

  theSearch = (search) => {
    this.setState({search})
  }
  displayStocks = () => {
  let displayStocks = this.state.allStocks.filter(stock=> stock.name.toLowerCase().includes(this.state.search))
}

  render() {
    return (
      <div>
        <Search theSearch={}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
