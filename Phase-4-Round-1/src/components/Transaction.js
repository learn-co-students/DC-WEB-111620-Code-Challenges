import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <button onClick={() => props.removeTrans(props.transaction)} className="del-btn"> Delete </button>
    </tr>
  );
};

export default Transaction;
