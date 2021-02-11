import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state={
    trans: [],
    searchText: ""
  }

  componentDidMount () {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transData => this.setState({
      trans: transData
    }))
  }

  changeSearch = (text) => {
    this.setState({searchText: text})
  }


    createTrans =(newTrans) => {
      this.setState({
        trans: [...this.state.trans, newTrans]
      })


    }


    removeTrans =(transRem) => {
      console.log("delete clicked", transRem)

      let reqPack={method:"DELETE"}

      fetch('http://localhost:6001/transactions/'+transRem.id, reqPack)
      .then(res => res.json())
      .then(transData => this.setState({
        trans: this.state.trans.filter(trans => trans.id !== transRem.id)
      })) 

    }

  render() {
   const filteredTrans = this.state.trans.filter(trans => trans.description.toLowerCase().includes(this.state.searchText.toLowerCase()))
   const filteredCategory =this.state.trans.filter(trans => trans.category.includes(this.state.searchText))
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
        trans={this.state.trans} 
        createTrans={this.createTrans} 
        changeSearch={this.changeSearch}
        removeTrans={this.removeTrans}
        trans={filteredTrans}
        trans={filteredCategory}
         />
      </div>
    );
  }
}

export default App;
