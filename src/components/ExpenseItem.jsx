import React, { Component } from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import "bootstrap/dist/css/bootstrap.css";

const ExpenseItem = (props) => {
  const { amount, title, date } = props;

  return (
    <div className="expense-item">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div class="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
