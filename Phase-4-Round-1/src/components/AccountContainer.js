import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    display: false,
    transactions: [],
    search:""
  }

  componentDidMount(){
    fetch ('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => this.setState({transactions :data}))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  newSearch = (search) => {
    this.setState({search})
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  displayTransaction = () => {
    return this.state.transactions.filter(trans => trans.description.includes(this.state.search) )
  }

  render() {
    return (
      <div>
        <Search newSearch={this.newSearch}/>
        <AddTransactionForm addTransaction={this.addTransaction} onClick={this.handleClick}/>
        <TransactionsList transactions={this.displayTransaction()} />
      </div>
    );
  }
}

export default AccountContainer;
