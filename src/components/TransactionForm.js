import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      category,
      note,
      date: new Date().toLocaleDateString(),
    };

    addTransaction(newTransaction);

    setAmount("");
    setCategory("");
    setNote("");
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
