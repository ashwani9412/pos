import React from "react";
import { ExpenseForm } from "./components/form/add-edit";

export const metadata = {
  title: "Expense",
};

export default function ExpensesPage() {
  return (
    <div>
      ExpensesPage
      <ExpenseForm />
    </div>
  );
}
