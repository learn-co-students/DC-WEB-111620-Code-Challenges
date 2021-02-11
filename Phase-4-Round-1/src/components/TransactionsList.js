import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({trans,removeTrans}) => {



  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr onClick={() => removeTrans(trans)}>
          <th>
            <h3 className="ui center aligned header">{trans.date}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{trans.description}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{trans.category}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{trans.mount}</h3>
          </th>
        </tr>
        {/* render Transactions here */}
      </tbody>
    </table>
  );
};

export default TransactionsList;
