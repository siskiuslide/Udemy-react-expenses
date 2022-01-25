import React, { Component } from "react";
import "./expenseDate.css";

const ExpenseItemDate = (props) => {
  // const date = props.date.toISOString();
  // const month = date.toLocaleString("en-GB", { month: "long" });
  // const day = date.toLocaleString("en-GB", { day: "2-digit" });
  //   const year = parseInt(date).getFullYear();
  // console.log(date.toLocaleString("en-US", { day: "2-digit", month: "long", year: "numeric" }));
  return (
    <div className="expense-date">
      <div className="expense-date__month">March</div>
      <div className="expense-date_year">2022</div>
      <div className="expense-date__day">18</div>
    </div>
  );
};

export default ExpenseItemDate;
