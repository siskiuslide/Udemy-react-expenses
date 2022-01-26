import "./App.css";
import "./components/Expenses/ExpenseItem";
import ExpenseList from "./components//Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const initialExpenses = [
  {
  id: "e1",
  title: "Paint",
  amount: 34.12,
  date: new Date(2021, 4, 20),
},
{
  id: "e2",
  title: "Car Insurance",
  amount: 694.67,
  date: new Date(2021, 6, 28),
},
{ id: "e3", title: "Chair", amount: 240, date: new Date(2022, 0, 6) },
{
  id: "e4",
  title: "New Desk",
  amount: 100,
  date: new Date(2022, 0, 9),
},
{ id: "e5", title: "Mugs", amount: 24, date: new Date(2022, 1, 8) },
{ id: "e6", title: "Plants", amount: 30, date: new Date(2022, 1, 15) },
{ id: "e7", title: "Clothes", amount: 150, date: new Date(2022, 1, 24) },
{ id: "e8", title: "Wheels", amount: 24, date: new Date(2022, 2, 22) },
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
