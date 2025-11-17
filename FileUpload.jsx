import React, { useState } from "react";

const FileUploader = () => {
  const [fileName, setFileName] = useState("");
  const [fileText, setFileText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Mock file-to-text function
  const extractTextFromFile = (file) => {
    // For now, just return a placeholder text
    return `Extracted text from "${file.name}" (mock)`;
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

    // Extract text (mock)
    const text = extractTextFromFile(file);
    setFileText(text);

    setSuccessMessage("File uploaded successfully!");
  };

  // Optional: handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange({ target: { files: [file] } });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
      <input
        type="file"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />
      <p>Or drag & drop here</p>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {fileName && (
        <div>
          <h4>Preview of "{fileName}"</h4>
          <p>{fileText}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
