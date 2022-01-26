import React from "react";
import Chart from "./../Chart/Chart";
const ExpensesChart = (props) => {
  let chartDataPoints = []
  if(props.year === 'All'){
    chartDataPoints = [
      {label: 2019, value: 0},
      {label: 2020, value: 0},
      {label: 2021, value: 0},
      {label: 2022, value: 0},
    ] 
    for(const expense of props.expenses){
      const expenseYear = expense.date.getFullYear()
      const year = chartDataPoints.find(el=>el.label === expenseYear)
      console.log(year.value+=expense.amount)
    }
  return <Chart dataPoints={chartDataPoints} />;

  }
  else {chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //0-based
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};
}
export default ExpensesChart;
