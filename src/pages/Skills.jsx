import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  Switch,
  FormControlLabel,
  CircularProgress,
  Avatar,
} from "@mui/material";

import reactLogo from "../assets/skills/react.png";
import springLogo from "../assets/skills/spring.png";
import mysqlLogo from "../assets/skills/mysql.png";
import mongoLogo from "../assets/skills/mongo.png";
import jsLogo from "../assets/skills/js.png";
import javaLogo from "../assets/skills/java.png";
import restLogo from "../assets/skills/rest.png";
import gitLogo from "../assets/skills/github.png";
import postmanLogo from "../assets/skills/postman.png";
const skillData = [
  { label: "React", value: 90, img: reactLogo },
  { label: "Spring Boot", value: 85, img: springLogo },
  { label: "MySQL", value: 80, img: mysqlLogo },
  { label: "MongoDB", value: 75, img: mongoLogo },
  { label: "JavaScript", value: 85, img: jsLogo },
  { label: "Java", value: 80, img: javaLogo },
  { label: "REST APIs", value: 85, img: restLogo },
  { label: "Git", value: 70, img: gitLogo },
  { label: "Postman", value: 75, img: postmanLogo },
];

export default function Skills() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 6,
        background: darkMode
          ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(to right, #e0eafc, #cfdef3)",
        color: darkMode ? "#fff" : "#000",
        fontFamily: "Segoe UI",
        transition: "all 0.4s ease",
      }}
    >
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
        label="Dark Mode"
        sx={{ position: "absolute", top: 80, right: 20 }}
      />

      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        mb={4}
        color={darkMode ? "#90caf9" : "#1565c0"}
      >
        💻 My Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skillData.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.label}>
            <Paper
              elevation={6}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
              }}
            >
              <Box sx={{ position: "relative", display: "inline-flex", mb: 2 }}>
                <CircularProgress
                  variant="determinate"
                  value={skill.value}
                  size={100}
                  thickness={5}
                  sx={{
                    color: darkMode ? "#90caf9" : "#1565c0",
                  }}
                />
                <Avatar
                  src={skill.img}
                  alt={skill.label}
                  sx={{
                    width: 60,
                    height: 60,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#fff",
                    boxShadow: "0 0 8px rgba(0,0,0,0.3)",
                  }}
                />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {skill.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Proficiency: {skill.value}%
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}