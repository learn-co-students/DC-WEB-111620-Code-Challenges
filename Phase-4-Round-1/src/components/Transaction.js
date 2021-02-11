import React from "react";

const Transaction = ({transaction, handleDelete}) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={() => handleDelete(transaction)}>Delete</button>
      </td>
    </tr>
  );
};

export default Transaction;
