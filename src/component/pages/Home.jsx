import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/ScriptureImages/bgImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Soft Buddhist overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(30,20,10,0.85), rgba(20,15,8,0.9))",
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "85%",
          maxWidth: 1100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* LEFT SIDE - About */}
        <Box sx={{ maxWidth: 550 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#e0b15c",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Scripture Aligner Tool
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              mb: 2,
              fontSize: "17px",
            }}
          >
            The Scripture Aligner Tool is a specialized application designed
            to assist in the digitization of ancient Buddhist manuscripts.
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              mb: 2,
              fontSize: "15px",
            }}
          >
            While page-level transcriptions exist, they often lose the
            original line-break structure found in historical scripture
            images. This tool allows scholars to manually reconstruct the
            correct formatting while referencing the original page.
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
            }}
          >
            Built using React, FastAPI, and PostgreSQL, the system preserves
            the structural integrity of Buddhist scripture while supporting
            UTF-8 characters and historical ligatures.
          </Typography>
        </Box>

        {/* RIGHT SIDE - Editor Tile */}
        <Card
          onClick={() => navigate("/editor")}
          sx={{
            width: 230,
            height: 230,
            cursor: "pointer",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(224,177,92,0.15)",
            border: "1px solid rgba(224,177,92,0.35)",
            color: "white",
            transition: "0.3s",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "rgba(224,177,92,0.25)",
            },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "#e0b15c",
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Open Editor
            </Typography>

            <Typography sx={{ fontSize: "14px", opacity: 0.9 }}>
              Begin aligning scripture text
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}