import React from 'react';
import { Button, Typography, Box, Grid, Avatar } from '@mui/material';
import profilePic from '../assets/IMG_7668.JPG'; // place your image inside src/assets

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hey, I'm <span style={{ color: '#1976d2' }}>Hamsavardhan</span> 👋
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Aspiring Full Stack Developer | Passionate about React, Spring Boot & Clean Code.
            A learner, a builder, and someone who turns caffeine into quality code ☕💻.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, mr: 2 }}
            href="#contact"
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            href="/resume.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} textAlign="center">
          <Avatar
            alt="Hamsavardhan"
            src={profilePic}
            sx={{ width: 250, height: 250, mx: 'auto', border: '4px solid #1976d2' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
