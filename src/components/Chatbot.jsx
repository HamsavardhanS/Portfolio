import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  TextField,
  Paper,
  Typography,
  Button,
  useTheme
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi there! Ask me about my portfolio 😊" }
  ]);
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input.trim() };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');

    setTimeout(() => {
      let reply = '';
      const q = input.toLowerCase();
      if (q.includes('name')) reply = "I'm Hamsavardhan, a full-stack dev and tech enthusiast.";
      else if (q.includes('college')) reply = "Studying at Sri Krishna College of Technology (2023-2027).";
      else if (q.includes('hi')) reply = "Hi there! Ask me about my portfolio 😊";
      else if (q.includes('projects')) reply = "I build React/MUI web apps, React Native mobile apps, Spring Boot APIs.";
      else if (q.includes('contact')) reply = "☎️ +91 8637423090 | GitHub: github.com/HamsavardhanS";
      else reply = "Sorry, can you rephrase? You can ask 'projects', 'resume', or 'contact'.";

      setMessages(msgs => [...msgs, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: theme.palette.primary.main,
          color: '#fff',
          '&:hover': { bgcolor: theme.palette.primary.dark }
        }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </IconButton>

      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: 80,
            right: 24,
            width: 320,
            height: 480,          // fixed height
            zIndex: 1300
          }}
        >
          <Paper elevation={6} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%',       // fill fixed height
            borderRadius: 2 
          }}>
            <Box sx={{ 
              p: 1, 
              bgcolor: theme.palette.primary.main, 
              color: '#fff', 
              borderTopLeftRadius: 8, 
              borderTopRightRadius: 8 
            }}>
              <Typography variant="subtitle1">Chat with me!</Typography>
            </Box>

            <Box
              ref={scrollRef}
              sx={{ 
                flex: 1, 
                p: 1, 
                overflowY: 'auto',    // enable scroll
                bgcolor: theme.palette.background.default 
              }}
            >
              <AnimatePresence>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: m.sender === 'user' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start',
                      marginBottom: 8
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: '70%',
                        p: 1.25,
                        borderRadius: 2,
                        bgcolor: m.sender === 'user' ? theme.palette.primary.main : theme.palette.grey[200],
                        color: m.sender === 'user' ? '#fff' : '#000'
                      }}
                    >
                      {m.text}
                    </Box>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Box>

            <Box sx={{ p: 1, borderTop: `1px solid ${theme.palette.divider}` }}>
              <TextField
                fullWidth
                placeholder="Type a question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                size="small"
                sx={{ mb: 1 }}
              />
              <Button variant="contained" size="small" fullWidth onClick={handleSend}>
                Send
              </Button>
            </Box>
          </Paper>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
