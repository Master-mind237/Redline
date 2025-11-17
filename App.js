import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import EditableClauseTable from "./components/EditableClauseTable";

function App() {
  const [fileText, setFileText] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Redline MVP Frontend</h1>

      {/* File uploader: uploads file & updates fileText state */}
      <FileUploader setFileText={setFileText} />

      {/* Editable clause table: shows clauses & allows inline editing */}
      {fileText && <EditableClauseTable text={fileText} />}
    </div>
  );
}

export default App;


