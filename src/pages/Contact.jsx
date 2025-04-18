import React, { useState } from 'react';
import {
  Box, TextField, Button, Snackbar, Alert, Typography, Link, Divider, Switch, FormControlLabel, CssBaseline
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { Brightness4, Brightness7 } from '@mui/icons-material'; // Import MUI icons for dark/light mode
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: 'success'
  });

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3f51b5'
      },
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({ open: true, message: 'Please fill all fields!', type: 'error' });
      return;
    }

    emailjs.send(
      'service_357qeuq',
      'template_327k17f',
      formData,
      'mx-iK-tKptvagDkvb'
    )
    .then(() => {
      setSnackbar({ open: true, message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Email error:', err);
      setSnackbar({ open: true, message: 'Something went wrong!', type: 'error' });
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ maxWidth: 650, mx: 'auto', mt: 6, p: 4, boxShadow: 4, borderRadius: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            📬 Get in Touch
          </Typography>
          <FormControlLabel
            control={
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            }
            label={darkMode ? <Brightness7 /> : <Brightness4 />} // Toggle between icons based on mode
          />
        </Box>

        <Typography mb={3} sx={{ fontStyle: 'italic', color: darkMode ? '#ddd' : '#555' }}>
          I'd love to hear from you — whether it's a project, opportunity, or just to say hello!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth label="Your Name" name="name" value={formData.name}
            onChange={handleChange} sx={{ mb: 2 }} variant="outlined" />
          <TextField
            fullWidth label="Your Email" name="email" value={formData.email}
            onChange={handleChange} sx={{ mb: 2 }} variant="outlined" />
          <TextField
            fullWidth label="Your Message" name="message" multiline rows={4}
            value={formData.message} onChange={handleChange} sx={{ mb: 3 }} variant="outlined" />
          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#3f51b5' }}>
            Send Message
          </Button>
        </form>

        <Divider sx={{ my: 4 }} />

        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Typography variant="body1" sx={{ color: darkMode ? '#ddd' : '#555' }}>
            <PhoneIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
            +91 8637423090
          </Typography>
          <Link href="https://github.com/HamsavardhanS" target="_blank" underline="hover" sx={{ color: darkMode ? '#ddd' : '#3f51b5' }}>
            <GitHubIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
            github.com/Hamsavardhan
          </Link>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert severity={snackbar.type}>{snackbar.message}</Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
