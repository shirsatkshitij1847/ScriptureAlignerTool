// SimpleImage.jsx
import React from "react";

export default function SimpleImage() {
  const imageUrl = "/ScriptureImages/image2.jpg"; // path relative to public folder

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={imageUrl}
        alt="Scripture"
        style={{ maxWidth: "90vw", height: "auto" }}
      />
    </div>
  );
}