import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./../UI/card";

const ExpenseItem = (props) => {
  const { amount, title, date } = props;

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
