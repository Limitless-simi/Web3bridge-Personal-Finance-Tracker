import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SummaryChart from "./components/SummaryChart";
import ExportCSV from "./components/ExportCSV";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="app-container">
      <h1>💸 Personal Finance Dashboard</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SummaryChart transactions={transactions} />
      <TransactionList transactions={transactions} />
      <ExportCSV transactions={transactions} />
    </div>
  );
}

export default App;
