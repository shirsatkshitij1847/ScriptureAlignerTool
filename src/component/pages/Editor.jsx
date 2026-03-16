// src/component/pages/Editor.jsx
import { useEffect, useState } from "react";
import { Box, Card, Typography, TextField, Button, Stack } from "@mui/material";
import { getTextByImageId, saveTextByImageId } from "../../utility/api.js";
import ImageViewer from "../ImageViewer";
import ExportButton from "../ExportButton"; // Export JSON button
import AppLayout from "../AppLayout"; // Layout with background & overlay

export default function Editor() {
  const totalPages = 15;
  const pages = Array.from(
    { length: totalPages },
    (_, i) => `/ScriptureImages/image${i + 1}.jpg`
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [text, setText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadText = async () => {
      const imageId = currentPage + 1;
      const fetchedText = await getTextByImageId(imageId);
      setText(fetchedText || "");
    };
    loadText();
  }, [currentPage]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const imageId = currentPage + 1;
      await saveTextByImageId(imageId, text);
      alert("Text saved successfully!");
    } catch {
      alert("Failed to save text.");
    } finally {
      setIsSaving(false);
    }
  };

  const goNext = () => setCurrentPage((p) => (p + 1) % totalPages);
  const goPrevious = () =>
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <AppLayout>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          p: 2,
          boxSizing: "border-box",
        }}
      >
        {/* Image Section */}
        <Box sx={{ height: "48vh", width: "100%", mb: 2 }}>
          <ImageViewer
            src={pages[currentPage]}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        {/* Editor Section */}
        <Box
          sx={{
            height: "52vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "90%",
              height: "75%",
              borderRadius: 3,
              background: "rgba(185, 127, 21, 0.08)",
              border: "1px solid rgba(55, 53, 48, 0.25)",
              color: "white",
              boxShadow: "0 10px 35px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              p: 2,
            }}
          >
            {/* Top header */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#e2b765", fontWeight: 500 }}
              >
                Page {currentPage + 1} of {totalPages}
              </Typography>
              <ExportButton data={{ page: currentPage + 1, text }} />
            </Box>

            {/* Text editor */}
            <TextField
              multiline
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Insert line breaks here..."
              variant="filled"
              fullWidth
              sx={{
                flex: 1,
                background: "rgba(24, 17, 17, 0.04)",
                borderRadius: 1,
                "& .MuiInputBase-input": {
                  fontSize: 20,
                  lineHeight: 1.6,
                  color: "#f5f5f5",
                  fontFamily: "serif",
                },
              }}
            />

            {/* Navigation buttons */}
            <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
              <Button
                variant="contained"
                onClick={goPrevious}
                sx={{
                  background: "#a46c2a",
                  "&:hover": { background: "#8a5a22" },
                }}
              >
                Previous
              </Button>

              <Button
                variant="contained"
                onClick={goNext}
                sx={{
                  background: "#a46c2a",
                  "&:hover": { background: "#8a5a22" },
                }}
              >
                Next
              </Button>

              <Button
                variant="contained"
                onClick={handleSave}
                disabled={isSaving}
                sx={{
                  background: "#e2b765",
                  color: "#2b1c0f",
                  fontWeight: 600,
                  "&:hover": { background: "#d3a956" },
                }}
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </Stack>
          </Card>
        </Box>
      </Box>
    </AppLayout>
  );
}