import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions/"
class AccountContainer extends Component {

  state = {
    transactions: [],
    filter: ""
  }
  
  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(transactions => this.setState({transactions}))
  }

  addTransaction = (newTransaction) => {
    this.setState({transactions: [...this.state.transactions, newTransaction]})
  }

 updateFilter = (filter) => {
   this.setState({filter})
 }

 filteredTrans = () => {
 return this.state.transactions.filter(transObj => transObj.description.includes(this.state.filter))
 }

 removeTrans = (removeTrans) => {
   fetch(URL + removeTrans.id, {method: 'DELETE'})
   .then(resp => resp.json())
   .then(() => {
     this.setState({transactions: this.state.transactions.filter((trans) => trans !== removeTrans)})
   })
 }

  render() {
    return (
      <div>
        <Search updateFilter={this.updateFilter}/>
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={this.filteredTrans()}  removeTrans={this.removeTrans} />
      </div>
    );
  }
}

export default AccountContainer;
