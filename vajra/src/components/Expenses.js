import React from "react";
import "../styles/expenses.css";
import ExpensesDonutchart from "./ExpensesDonutChart";
const Expenses = () => {
  return (
    <div className="expenses">
      <div className="expenses-text">
        <p>Expenses</p>
      </div>
      <div className="expenses-donut-chart">
        <ExpensesDonutchart />
      </div>
    </div>
  );
};

export default Expenses;
