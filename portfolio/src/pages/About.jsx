import React, { useState } from 'react';
import {
  Box, Typography, Button, List, ListItem, ListItemText,
  Divider, Switch, FormControlLabel, CssBaseline
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ maxWidth: 800, mx: 'auto', mt: 6, p: 4, boxShadow: 3, borderRadius: 4 }}>
        <Box display="flex" justifyContent="flex-end">
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            }
            label={darkMode ? <Brightness7 /> : <Brightness4 />}
          />
        </Box>

        <Typography variant="h4" mb={2} sx={{ fontWeight: 'bold' }}>
          👨‍🎓 About Me
        </Typography>

        <Box mb={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            <SchoolIcon sx={{ mr: 1 }} /> Academics
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="B.E in Computer Science & Engineering" secondary="Sri Krishna College of Technology - Coimbatore, 2023 - 2027" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Higher Secondary Schooling" secondary="Maruthi Higher Secondary School - Salem, 2021 - 2023" />
            </ListItem>
          </List>
        </Box>

        <Divider />

        <Box my={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            <CodeIcon sx={{ mr: 1 }} /> Projects & Interests
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="🚀 Full-Stack Development" />
            </ListItem>
            <ListItem>
              <ListItemText primary="📱 Mobile App Development (React Native)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="🌐 REST APIs using Spring Boot & Node.js" />
            </ListItem>
            <ListItem>
              <ListItemText primary="🧠 AI/ML Concepts & Real-time Applications" />
            </ListItem>
          </List>
        </Box>

        <Divider />

        <Box mt={4} textAlign="center">
          <Button
            variant="outlined"
            startIcon={<DescriptionIcon />}
            href="https://drive.google.com/file/d/1STRu8XYZUzE6Uxh2OwDygT7LTLtqdzRV/view?usp=sharing" // 🔁 Replace this with your real resume link
            target="_blank"
          >
            View My Resume
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default About;
