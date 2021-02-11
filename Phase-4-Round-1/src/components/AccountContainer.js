import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const AccountContainer = () =>{

  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function fetchData() {
    const res = await fetch("http://localhost:6001/transactions")
    const transactions = await res.json()
    setTransactions(transactions)
    }
    fetchData()
  }, [])
    
  const handleSubmit = (event) => {
    event.preventDefault();

    let newTransaction = {
      date: event.target.date.value,
      description: event.target.description.value,
      category: event.target.category.value,
      amount: event.target.amount.value
    }

    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTransaction)
    })
    .then(res=> res.json())
    .then((transaction) => setTransactions([...transactions, transaction]))
    event.target.reset()
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  const display = () => transactions.filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))

  return (
      <div>
        <Search handleSearch={handleSearch}/>
        <AddTransactionForm handleSubmit={handleSubmit}/>
        <TransactionsList transactions={display()} />
      </div>
    );
}

export default AccountContainer;
