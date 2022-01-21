import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/card";
import "./expenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;

  return (
    <Card className="expenses">
      {expenses.map((ex) => {
        return <ExpenseItem key={ex.id} amount={ex.amount} title={ex.title} date={ex.date} />;
      })}
    </Card>
  );
};

export default ExpenseList;
