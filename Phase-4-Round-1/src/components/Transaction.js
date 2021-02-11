import React from "react";

const Transaction = ({singleTransaction, deleteTrans}) => {
  return (
    <tr>
      <td>{singleTransaction.date}</td>
      <td>{singleTransaction.description}</td>
      <td>{singleTransaction.category}</td>
      <td>{singleTransaction.amount}</td>
      <td><button onClick={() => deleteTrans(singleTransaction)} type="submit" value="Delete">Delete</button></td>
    </tr>
  );
};

export default Transaction;
