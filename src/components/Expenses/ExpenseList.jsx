import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/card";
import YearFilter from "./YearFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./expenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;
  let filteredList;
  const [currentYear, setCurrentYear] = useState("2020");
  const onYearChangeHandler = (e) => {
    console.log(e.target.value);
    return setCurrentYear(e.target.value);
  };

  currentYear === "All"
    ? (filteredList = expenses)
    : (filteredList = expenses.filter((exp) => exp.date.getFullYear().toString() === currentYear));

  return (
    <Card className="expenses">
      <YearFilter year={currentYear} onChangeYear={onYearChangeHandler} />
      <ExpensesChart expenses={filteredList} />
      {filteredList.length === 0 && <p className="expenses-list__fallback">No Expenses Found</p>}
      {filteredList.length > 0 &&
        filteredList.map((ex) => {
          return <ExpenseItem key={ex.id} amount={ex.amount} title={ex.title} date={ex.date} />;
        })}
    </Card>
  );
};

export default ExpenseList;
