import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  
  const renderTransactions = (transactions) => {
    return transactions.map((trans,i)=><Transaction deleteTransaction={props.deleteTransaction} key={i} {...trans}/>)
  }
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {renderTransactions(props.transactions)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
