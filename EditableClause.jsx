import React, { useState, useEffect } from "react";

const EditableClauseTable = ({ text }) => {
  const [clauses, setClauses] = useState([]);

  useEffect(() => {
    if (text) {
      const rawClauses = text.split(".").filter((c) => c.trim() !== "");
      const mappedClauses = rawClauses.map((clause, index) => ({
        id: index + 1,
        original: clause.trim() + ".",
        translated: "Translated text (dummy)",
        risk: ["Low", "Medium", "High"][index % 3],
      }));
      setClauses(mappedClauses);
    }
  }, [text]);

  // Handle inline edits
  const handleTranslationChange = (id, newValue) => {
    setClauses((prevClauses) =>
      prevClauses.map((clause) =>
        clause.id === id ? { ...clause, translated: newValue } : clause
      )
    );
  };

  const handleSave = () => {
    console.log("Saved clauses:", clauses);
    alert("Changes saved to console!");
  };

  return (
    <div
      style={{
        maxHeight: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Original Clause
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Translated
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Risk</th>
          </tr>
        </thead>
        <tbody>
          {clauses.map((clause) => (
            <tr key={clause.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {clause.original}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <input
                  type="text"
                  value={clause.translated}
                  onChange={(e) =>
                    handleTranslationChange(clause.id, e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "12px",
                    backgroundColor:
                      clause.risk === "Low"
                        ? "green"
                        : clause.risk === "Medium"
                        ? "orange"
                        : "red",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {clause.risk}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSave}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditableClauseTable;
