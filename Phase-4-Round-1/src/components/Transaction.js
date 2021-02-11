import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <td><button onClick={() => props.deleteTransaction(props.transaction)} className="ui button">Remove</button></td>
    </tr>
  );
};

export default Transaction;
