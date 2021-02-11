import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: []
  }
  
  componentDidMount() {
    fetch(`http://localhost:6001/transactions`)
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({
        transactions: data
      })
    })
  }

  addTransaction = (submittedTransaction) => {
    const reqPkg = {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(submittedTransaction)
    }

    fetch(`http://localhost:6001/transactions`,reqPkg)
    .then(resp=>resp.json())
    .then(newTrans=>{
      this.setState({
        transactions: [...this.state.transactions, newTrans]
      })
    })
  }

  filterTransactions = (searchTerm) => {
    console.log(searchTerm)
    if (searchTerm !== "") {
      let filteredTrans = this.state.transactions.filter(trans=>trans.description.toLowerCase().includes(searchTerm.toLowerCase()))
      this.setState({
        transactions: filteredTrans
      })
    }
  }

  deleteTransaction = (transID) => {
    const reqPkg = {
      method: "DELETE",
      headers: {'Content-Type':'application/json'},
    }
    fetch(`http://localhost:6001/transactions/${transID}`,reqPkg)
    .then(resp=>resp.json())
    .then(()=>{
      this.setState({
        transactions: this.state.transactions.filter(trans=>trans.id!==transID)
      })
    })
  }
  
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer deleteTransaction={this.deleteTransaction} filterTransactions={this.filterTransactions} addTransaction={this.addTransaction} transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default App;
