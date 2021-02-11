import React from "react";

const Transaction = (props) => {
  return (
    <tr onClick={() => props.deleteTransaction(props.transaction.id)}>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
