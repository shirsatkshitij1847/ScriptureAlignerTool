// src/component/ExportButton.jsx
import React from "react";
import { Button } from "@mui/material";

export default function ExportButton() {
  const handleExport = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/export"); // your FastAPI export endpoint
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();

      // Create a blob and download
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "dataset.json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed:", err);
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleExport}
      style={{ marginLeft: "auto" }} // push to right if inside flex container
    >
      Export JSON
    </Button>
  );
}