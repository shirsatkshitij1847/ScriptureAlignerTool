// src/component/AppLayout.jsx
import { Box } from "@mui/material";

export default function AppLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        backgroundImage: "url('/ScriptureImages/bgImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(30,20,10,0.85), rgba(20,15,8,0.9))",
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}