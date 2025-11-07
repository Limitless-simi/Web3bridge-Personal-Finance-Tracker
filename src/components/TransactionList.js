import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.type}</td>
                <td>{t.category}</td>
                <td
                  className={t.type === "expense" ? "expense" : "income"}
                >
                  ₦{t.amount.toLocaleString()}
                </td>
                <td>{t.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionList;
