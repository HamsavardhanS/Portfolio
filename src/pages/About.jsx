import React from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box p={4}>
      <Typography variant="h4">About Me</Typography>
      <Typography mt={2}>This is the About page. Tell the world about yourself!</Typography>
    </Box>
  );
}