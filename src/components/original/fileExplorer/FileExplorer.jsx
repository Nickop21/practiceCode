import React, { useState } from "react";
import "./fileexplorer.css";
import ExplorerList from "./ExplorerList";
import json from "./data.json";

const FileExplorer = () => {
  const [fileData, setFileData] = useState(json);
  
  return (
    <div className="explorer-container">
      <h1 className="text-center mb-5 text-4xl">File Explorer</h1>
      <div className="container">
        <ExplorerList list={fileData} setFileData={setFileData}  />
      </div>
    </div>
  );
};

export default FileExplorer;
