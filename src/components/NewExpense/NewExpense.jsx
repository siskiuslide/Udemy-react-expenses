import React from "react";
import ExpenseForm from "./ExpenseForm";
import OpenNewExpense from "./OpenNewExpense";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData); //pass data to app
  };
  const [formVisible, setFormVisibility] = useState(false);

  const newExpenseBtnHandler = () => {
    setFormVisibility(true);
  };

  const cancelExpenseHandler = () => {
    setFormVisibility(false);
  };
  let returnValue;
  formVisible === false
    ? (returnValue = <OpenNewExpense onBtnPress={newExpenseBtnHandler} />)
    : (returnValue = <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={cancelExpenseHandler} />);

  return <div className="new-expense">{returnValue}</div>;
};
export default NewExpense;
