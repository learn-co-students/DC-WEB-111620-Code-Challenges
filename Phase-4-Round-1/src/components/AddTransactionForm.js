import React, { Component } from "react";

class AddTransactionForm extends Component {
    state = {
        date: "",
        description: "",
        category: "",
        amount: 0,
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        // console.log("this was submitted");
        e.preventDefault();
        let newTransaction = {
            date: this.state.date,
            description: this.state.description,
            category: this.state.category,
            amount: this.state.amount,
        };
        let reqPackage = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(newTransaction),
        };
        fetch("http://localhost:3000/transactions", reqPackage)
            .then((res) => res.json())
            .then((postedTransaction) =>
                this.props.addTransaction(postedTransaction)
            );
        e.target.reset();
    };
    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={(e) => this.handleSubmit(e)}
                    className="ui form"
                >
                    <div className="inline fields">
                        <input
                            onChange={this.changeHandler}
                            type="date"
                            name="date"
                        />
                        <input
                            onChange={this.changeHandler}
                            type="text"
                            name="description"
                            placeholder="Description"
                        />
                        <input
                            onChange={this.changeHandler}
                            type="text"
                            name="category"
                            placeholder="Category"
                        />
                        <input
                            onChange={this.changeHandler}
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            step="0.01"
                        />
                    </div>
                    <button className="ui button" type="submit">
                        Add Transaction
                    </button>
                </form>
            </div>
        );
    }
}

export default AddTransactionForm;
