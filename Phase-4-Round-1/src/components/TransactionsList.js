import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
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
        </tr>
        {props.transactions.map(transItem => <Transaction trans={transItem} key={transItem.id}/>)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
