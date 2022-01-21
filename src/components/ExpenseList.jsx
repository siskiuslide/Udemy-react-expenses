import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const { expenses } = props;

  return (
    <div class="expenses">
      {expenses.map((ex) => {
        return <ExpenseItem amount={ex.amount} title={ex.title} date={ex.date} />;
      })}
    </div>
  );
};

export default ExpenseList;
