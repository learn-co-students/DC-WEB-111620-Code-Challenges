import React from "react";

const Transaction = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        <tr>
          <td>{props.transaction.date}</td>
          <td>{props.transaction.description}</td>
          <td>{props.transaction.category}</td>
          <td>{props.transaction.amount}</td>
        </tr>
      </div>
      <div>
      {/* <button onClick = {() => deleteTransaction(props.transaction)}>Delete</button> */}
      </div>
    </div>
  );
};

export default Transaction;
