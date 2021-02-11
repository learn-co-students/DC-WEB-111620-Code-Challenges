import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";



class AccountContainer extends Component {

  state = {
    transactions: [],
    searchText:""
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
      .then(res => res.json())
      .then(transData => this.setState ({
        transactions: transData
      }))
    
  }
  

  changeSearch=(text)=> {
    console.log('text')
    this.setState({
      searchText: text
    })
 
   }
  
    addTrans = (trans) => {
      console.log('toy is added')
      this.setState({
        trans: [...this.state.transactions]
      })
    }

    


  render() {
    const filteredTrans = this.state.transactions.filter(transactions => transactions.description.includes(this.state.searchText))

    return (
      <div>
        <Search changeSearch={this.changeSearch}/>
        <AddTransactionForm addTrans={this.addTrans}/>
        <TransactionsList trans={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
