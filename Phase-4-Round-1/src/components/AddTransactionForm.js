import React, { Component } from "react";

class AddTransactionForm extends Component {

  // state= {
  //   transDate: "",
  //   transDesc: "",
  //   transCat: "",
  //   transAmount: ""
  // }

  //   handleSubmit(e){
  //   e.preventDefault()
    
  //   let newTransaction = {
  //     date: this.state.transDate,
  //     description: this.state.transDesc,
  //     category: this.state.transCat,
  //     amount: this.state.transAmount
  //   }

  //   let reqPackage = {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(newTransaction)
  //   }

  //   fetch(URL, reqPackage)
  //   .then(res => res.json())
  //   .then(newTransaction => {
  //     this.props.addNewTrans(newTransaction)
  //     e.target.reset()
  //     })
  //   }

    
  

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit} className="ui form">
          <div className="inline fields">
            <input  type="date" name="date" />
            <input  type="text" name="description" placeholder="Description" />
            <input  type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button  className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;


{/* <div className="inline fields">
<input onChange={(e) => this.setState({transDate: e.target.value})} type="date" name="transDate" />
<input onChange={(e) => this.setState({transDesc: e.target.value})} type="text" name="transDesc" placeholder="Description" />
<input onChange={(e) => this.setState({transCat: e.target.value})} type="text" name="transCat" placeholder="Category" />
<input
  onChange={(e) => this.setState({transAmount: e.target.value})}
  type="number"
  name="transAmount"
  placeholder="Amount"
  step="0.01"
/> */}
