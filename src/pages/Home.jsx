import React, { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
  Divider,
  Stack,
  Card,
  CardContent,
  Link,
  Chip,
  Switch,
  FormControlLabel
} from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import { Link as RouterLink } from 'react-router-dom'; // For navigation links
import profilePic from '../assets/IMG_7668.JPG';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        flexGrow: 1,
        p: 4,
        minHeight: '100vh',
        background: darkMode
          ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(to right, #e0eafc, #cfdef3)",
        fontFamily: 'Segoe UI',
      }}
    >
      {/* Dark Mode Switch */}
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
        label="Dark Mode"
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 20,
          color: darkMode ? 'white' : 'black',
        }}
      />

      {/* Profile Card */}
      <Card elevation={8} sx={{ maxWidth: 1100, margin: 'auto', borderRadius: 5, backgroundColor: darkMode ? '#424242' : '#fefefe' }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4} textAlign="center">
              <Avatar
                alt="Hamsavardhan"
                src={profilePic}
                sx={{
                  width: 300,
                  height: 300,
                  border: '7px solid #fff',
                  boxShadow: '0 6px 30px rgba(35, 118, 219, 0.4)',
                  mb: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: darkMode ? 'white' : '#0d47a1' }} mb={2}>
                Hey, I'm <span style={{ color: '#d81b60' }}>Hamsavardhan</span> 👋
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 18, color: darkMode ? 'white' : '#424242', mb: 3 }}>
                🎓 <strong>Student | Developer | Problem Solver</strong><br />
                💻 Passionate <strong>Full Stack Developer</strong> who crafts fast, scalable, and clean web apps.<br />
                🛠️ Tech Stack: <span style={{ color: '#1565c0' }}>React</span>, <span style={{ color: '#6a1b9a' }}>Spring Boot</span>, <span style={{ color: '#ef6c00' }}>MySQL</span>, REST APIs.<br />
                🔍 Love exploring UI/UX, backend logic, and simplifying user journeys.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                📍 Tamil Nadu, India
              </Typography>
              <Typography variant="body1" sx={{ wordBreak: 'break-word', color: darkMode ? 'white' : '#424242' }}>
                📧 <Link href="mailto:hamsasanker06@email.com" underline="hover">hamsasanker06@email.com</Link><br />
                <GitHubIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                <Link href="https://github.com/HamsavardhanS" target="_blank" underline="hover">github.com/Hamsavardhan</Link><br />
                <LinkedInIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                <Link href="https://www.linkedin.com/in/hamsavardhan-s-offl/" target="_blank" underline="hover">linkedin.com/in/Hamsavardhan</Link>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Projects and Skills Cards */}
      <Box
        sx={{
          mt: 5,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          maxWidth: 1100,
          mx: 'auto',
        }}
      >
        {/* Skills Card */}
<Card elevation={4} sx={{ p: 2, borderRadius: 3 }}>
  <CardContent>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
      🛠️ Skills
    </Typography>


    <Stack direction="row" flexWrap="wrap" gap={1}>
      {['React', 'Spring Boot', 'MySQL', 'MongoDB', 'JavaScript', 'Java', 'REST APIs', 'Git', 'Postman'].map(skill => (
        <Chip key={skill} label={skill} color="secondary" />
      ))}
    </Stack>
    
    
  </CardContent>
  <Button
      component={RouterLink}
      to="/skills"
      variant="contained"
      color="secondary"
      fullWidth
      sx={{ mb: 2, textTransform: 'none', fontWeight: 'bold', fontSize: 16 }}
    >
      View Full Skills
    </Button>
</Card>


<Card elevation={4} sx={{ p: 2, borderRadius: 3 }}>
  <CardContent>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#388e3c', mb: 1 }}>
      💡 Projects
    </Typography>
    <Stack spacing={1}>
      <Typography>• Restaurant Management App</Typography>
      <Typography>• Home Improvement Event App</Typography>
      <Typography>• Traffic Jam Detector</Typography>
      <Typography>• Farmer to Consumer Platform</Typography>
    </Stack>
  </CardContent>
  <Button
    component={RouterLink}
    to="/projects"
    variant="contained"
    color="success"
    fullWidth
    sx={{ mb: 2, textTransform: 'none', fontWeight: 'bold', fontSize: 16 }}
  >
    View All Projects
  </Button>
</Card>

        {/* About Me Card */}
        <Card elevation={4} sx={{ p: 2, borderRadius: 3 }}>
  <CardContent>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6a1b9a', mb: 1 }}>
      🌟 About Me
    </Typography>
    <Typography sx={{ mb: 2 }}>
      • Creative Thinker & Quick Learner<br />
      • Leadership & Adaptability<br />
      • Passionate Writer & Poet<br />
      • Goofy introvert with big dreams 💫
    </Typography>
    <Button
      component={RouterLink}
      to="/about"
      variant="contained"
      color="secondary"
      fullWidth
      sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: 16 }}
    >
      View More About Me
    </Button>
  </CardContent>
</Card>
     </Box>
     <Chatbot/>
    </Box>
  );
};

export default Home;
