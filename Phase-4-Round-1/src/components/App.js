import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const URL = ("http://localhost:6001/transactions")
class App extends Component {

  state={
    transactions: [],
    searchText: ""
    // items: []
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions
    })
    )}

  handleSubmit = (e) => {
    e.preventDefault()
    
    let newTransaction = {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value
    }

    let reqPackage = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTransaction)
    }

    fetch(URL, reqPackage)
    .then(res => res.json())
    .then(transaction => {
      this.setState({
        transactions: [...this.state.transactions, transaction]
      })
    })

    e.target.reset()
  }

  // addNewTrans = (newTransaction) =>
  //   this.setState({
  //     transactions: [...this.state.transactions, newTransaction]
  //   })

  changeSearch = (text) => {
    this.setState({searchText: text})
  }

  render() {
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchText.toLowerCase()))
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
        // transactions={this.state.transactions} 
        transactions={filteredTransactions}
        handleSubmit={this.handleSubmit}
        changeSearch={this.changeSearch}
        // addNewTrans={this.addNewTrans}
        />
      </div>
    );
  }
}

export default App;
