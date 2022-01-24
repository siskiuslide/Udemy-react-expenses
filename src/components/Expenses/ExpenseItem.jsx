import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./../UI/card";

const ExpenseItem = (props) => {
  const { amount, ptitle, date } = props;
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
