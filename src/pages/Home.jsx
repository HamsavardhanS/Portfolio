import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Typography variant="h2" fontWeight={600}>
        Hello, I'm Hammu 👋
      </Typography>
      <Typography variant="h5" color="text.secondary" mt={2}>
        A Passionate Full Stack Developer & Creative Thinker
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 4, backgroundColor: "#3f51b5" }}
        href="/projects"
      >
        View My Work
      </Button>
    </Box>
  );
}
