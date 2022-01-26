import React, { Component } from "react";
import "./expenseDate.css";

const ExpenseItemDate = (props) => {
  const date = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.toLocaleString("en-GB", { year: "numeric" });
  // console.log(date.toLocaleString("en-US", { day: "2-digit", month: "long", year: "numeric" }));
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  );
};

export default ExpenseItemDate;
