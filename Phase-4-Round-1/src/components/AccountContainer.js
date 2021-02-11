import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
    state = {
        transactions: [],
        search: "",
    };

    componentDidMount() {
        fetch("http://localhost:3000/transactions")
            .then((res) => res.json())
            .then((transactions) => this.setState({ transactions }));
    }

    addTransaction = (newTransaction) => {
        this.setState({
            transactions: [...this.state.transactions, newTransaction],
        });
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    displayTransactions = () => {
        let displayTransactions = this.state.transactions.filter(
            (transaction) =>
                transaction.description
                    .toLowerCase()
                    .includes(this.state.search)
        );
        return displayTransactions;
    };

    render() {
        return (
            <div>
                <Search updateSearch={this.updateSearch} />
                <AddTransactionForm addTransaction={this.addTransaction} />
                <TransactionsList transactions={this.displayTransactions()} />
            </div>
        );
    }
}

export default AccountContainer;
