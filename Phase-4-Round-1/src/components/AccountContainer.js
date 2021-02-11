import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort"

const AccountContainer = () =>{

  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

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
    event.preventDefault();
    setSearch(event.target.value)
  }

  const handleSort = (event) => {
    event.preventDefault();
    setSort(event.target.value)
  }
  
  const display = () => {
    let filterTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))
    if (sort === "category") {
      filterTransactions = filterTransactions.sort((a,b) => a.category > b.category ? 1 : -1)
    } else if (sort === "description") {
      filterTransactions = filterTransactions.sort((a,b) => a.description > b.description ? 1 : -1)
    } else if (sort === "date") {
      filterTransactions = filterTransactions.sort((a,b) => a.date > b.date ? 1 : -1)
    } else if (sort === "amount") {
      filterTransactions = filterTransactions.sort((a,b) => a.amount > b.amount ? 1 : -1)
    } 
    return filterTransactions
  }

  const handleDelete = (deleteTransaction) => {
    let question = window.confirm("Are you sure you want to delete?")
    if (question === true) {
      fetch(`http://localhost:6001/transactions/${deleteTransaction.id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(setTransactions(transactions => transactions.filter(transaction => transaction !== deleteTransaction)))
    }

  }

  return (
      <div>
        <Search handleSearch={handleSearch}/>
        <Sort handleSort={handleSort}/>
        <AddTransactionForm handleSubmit={handleSubmit}/>
        <TransactionsList transactions={display()} handleDelete={handleDelete} />
      </div>
    );
}

export default AccountContainer;
