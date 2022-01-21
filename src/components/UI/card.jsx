import React from "react";
import "./card.css";
import "./../Expenses/expenseList.css";
import "./../Expenses/ExpenseItem.css";

const Card = (props) => {
  const classes = "roundedCard " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
