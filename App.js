import React, { useState } from "react";
import FileUploader from "./components/FileUpload";
import ClauseTable from "./components/ClauseTable";

function App() {
  const [fileText, setFileText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redline MVP Frontend</h1>
      <FileUploader setFileText={setFileText} />
      {fileText && <ClauseTable text={fileText} />}
    </div>
  );
}

export default App;

