import "./App.css";
import "./components/Expenses/ExpenseItem";
import ExpenseList from "./components//Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2022, 1, 5),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  console.log(expenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div className="App">
      <h1>Expenses</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
