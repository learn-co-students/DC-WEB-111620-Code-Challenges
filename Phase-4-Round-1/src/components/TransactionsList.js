import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({transaction, deleteTrans}) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
          {/* {transaction.date} */}
            <h3 className="ui center aligned header">Date: </h3>
          </th>
          <th>
          {/* {transaction.description} */}
            <h3 className="ui center aligned header">Description: </h3>
          </th>
          <th>
          {/* {transaction.category} */}
            <h3 className="ui center aligned header">Category: </h3>
          </th>
          {/* {transaction.amount} */}
          <th>
            <h3 className="ui center aligned header">Amount: </h3>
          </th>
        </tr>
        {transaction.map(trans => <Transaction deleteTrans={deleteTrans} singleTransaction={trans}/>)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
