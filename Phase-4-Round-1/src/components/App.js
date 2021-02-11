import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    searchValue: "",
    searchArr: []
  }


  componentDidMount(){
    
    const urlTransactions = "http://localhost:6001/transactions"
    fetch(urlTransactions)
    .then(res => res.json())
    .then(newData => this.setState({
        transactions: newData
    }))
    
  }

  addNewTransaction = (event) => {
    event.preventDefault()
    // console.log("am i inside of this")
    // console.log(event.target.date.value)
    // console.log(event.target.description.value)
    // console.log(event.target.category.value)
    // console.log(event.target.amount.value)

    let newTransaction = {
        date: event.target.date.value,
        description: event.target.description.value,
        category: event.target.category.value,
        amount: event.target.amount.value
    }

    console.log(newTransaction)

    let reqPackage ={
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newTransaction)
    }

    fetch("http://localhost:6001/transactions",reqPackage)
    .then(res => res.json())
    .then(res => this.setState({
      transactions: [...this.state.transactions,res]
    }))


  }


  deleteSingleTransaction = (transaction) => {
    console.log("i will delete you")
    console.log(transaction)

    let reqPackage = {
      headers: {"Content-Type": "application/json"},
      method: "DELETE"
    }
    // console.log("http://localhost:6001/transactions/" + transaction.id)

    fetch("http://localhost:6001/transactions/" + transaction.id,reqPackage)
    .then(res => res.json())
    .then(res => 
      // console.log(this.state.transactions.filter(singleTrans => singleTrans !== transaction))) 
      this.setState({
        transactions: this.state.transactions.filter(singleTrans => singleTrans !== transaction)
    }))
  }


  handleSearchBar = (event) => {
    // console.log("did i hit this search tho?")
    console.log(event.target.value == "")
    // console.log(this.state.transactions.map(s => s.description.toLowerCase()))
    // console.log(this.state.transactions.filter(single => single.description.toLowerCase().includes(event.target.value)))
    // console.log(this.state.transactions.filter(single => single.description == event.target.value))
    let newArr = this.state.transactions.filter(single => single.description.toLowerCase().includes(this.state.searchValue))
    console.log(newArr)
    this.setState({
      
      searchValue: event.target.value,
      searchArr: newArr
    })
    

  }



  render() {
    
    return (
      
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer handleSearch={this.handleSearchBar} deleteSingleTransaction={this.deleteSingleTransaction} addNewTransaction={this.addNewTransaction} transactionData={this.state.searchArr}/>
      </div>
    );
  }
}

export default App;
