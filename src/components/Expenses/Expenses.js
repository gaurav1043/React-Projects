import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (changedYear) => {
    setSelectedYear(changedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeYear={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {<ExpensesList items={filteredExpenses} />}
      </Card>
    </div>
  );
}
export default Expenses;
