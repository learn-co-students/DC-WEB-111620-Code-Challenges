import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
      <td><button onClick={()=>props.deleteTransaction(props.id)}>BYE</button></td>
    </tr>
  );
};

export default Transaction;
