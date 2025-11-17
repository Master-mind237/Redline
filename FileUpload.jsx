import React, { useState } from "react";

const FileUploader = ({ setFileText }) => {
  const [fileName, setFileName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const extractTextFromFile = (file) => {
    // Mock extraction for now
    return `This is a mock text from "${file.name}". It has multiple clauses. Here is another clause. And one more clause.`;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, Word, or TXT files are allowed!");
      return;
    }

    setFileName(file.name);

    const text = extractTextFromFile(file);
    setFileText(text);

    setSuccessMessage("File uploaded successfully!");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange({ target: { files: [file] } });
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      style={{
        border: "2px dashed #888",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h3>Upload your contract</h3>
      <input type="file" onChange={handleFileChange} style={{ marginBottom: "10px" }} />
      <p>Or drag & drop here</p>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {fileName && <p>File: {fileName}</p>}
    </div>
  );
};

export default FileUploader;

