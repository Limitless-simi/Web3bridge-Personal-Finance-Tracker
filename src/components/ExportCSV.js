import React from "react";

function ExportCSV({ transactions }) {
  const handleExport = () => {
    const headers = ["Date", "Type", "Category", "Amount", "Note"];
    const rows = transactions.map((t) => [
      t.date,
      t.type,
      t.category,
      t.amount,
      t.note,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <button className="export-btn" onClick={handleExport}>
      Export as CSV
    </button>
  );
}

export default ExportCSV;
