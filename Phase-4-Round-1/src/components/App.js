import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
let URL = 'http://localhost:6001/transactions'

class App extends Component {

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(transactionData => {
      this.setState({
        transactions: transactionData
      })
    })
  }

  addNewTransaction = (newTransaction) => {
    this.setState({transactions: [...this.state.transactions, newTransaction]})
  }


  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactionData={this.state.transactions} addNewTransaction={this.addNewTransaction}/>
      </div>
    );
  }
}

export default App;
