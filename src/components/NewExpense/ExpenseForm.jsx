import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  //when using an object in state hook we should always spread the prevState so that we do not lose it
  //use this if the state update depends on the prev state
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const expense = userInput;
    setUserInput({ title: "", amount: "", date: "" });
    props.onSaveExpenseData(expense); // pass data to newExpense.jsx
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2022-12-31" value={userInput.date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
