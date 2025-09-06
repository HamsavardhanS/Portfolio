import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, TextField, Button, Typography, Paper } from '@mui/material';
import { Send, Message, Close } from '@mui/icons-material';
import { motion } from 'framer-motion'; // for smooth animations

const PortfolioChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👋 How can I help you about my portfolio?' }
  ]);

  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    respondToQuery(input);
    setInput('');
  };

  const respondToQuery = (question) => {
    let response = '';

    const lowerQ = question.toLowerCase();

    if (lowerQ.includes('academic') || lowerQ.includes('college') || lowerQ.includes('study')) {
      response = "🎓 I'm currently pursuing B.Tech CSE at Sri Krishna College of Technology (2023-2027).";
    } else if (lowerQ.includes('project') || lowerQ.includes('interests')) {
      response = "🚀 I'm interested in Full-Stack Development, Mobile Apps, REST APIs with Spring Boot/Node.js, and AI/ML!";
    } else if (lowerQ.includes('resume') || lowerQ.includes('cv')) {
      response = "📄 You can view my resume here: [Resume Link](https://drive.google.com/file/d/1STRu8XYZUzE6Uxh2OwDygT7LTLtqdzRV/view?usp=sharing)";
    } else if (lowerQ.includes('skills') || lowerQ.includes('technologies')) {
      response = "🛠️ I'm skilled in React, Spring Boot, Node.js, MongoDB, MySQL, and React Native!";
    } else {
      response = "🤔 Sorry, I didn't get that. Try asking about my academics, projects, skills, or resume!";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    }, 500); // bot reply delay
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box>
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: '#1976d2',
            color: '#fff',
            '&:hover': { backgroundColor: '#115293' },
            zIndex: 9999
          }}
        >
          <Message />
        </IconButton>
      )}

      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: '350px',
            height: '500px',
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            zIndex: 9999,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Paper sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1976d2', color: '#fff' }}>
            <Typography variant="subtitle1">Hamsa's Bot here !  🤖</Typography>
            <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
              <Close />
            </IconButton>
          </Paper>

          <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <Box key={idx} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', mb: 1 }}>
                <Box
                  sx={{
                    display: 'inline-block',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: msg.sender === 'user' ? '#1976d2' : '#eeeeee',
                    color: msg.sender === 'user' ? '#fff' : '#000',
                    maxWidth: '80%'
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            ))}
            <div ref={chatEndRef} />
          </Box>

          <Box sx={{ p: 1, borderTop: '1px solid #ddd', display: 'flex' }}>
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              size="small"
              placeholder="Ask me something..."
              fullWidth
            />
            <IconButton onClick={handleSend} color="primary">
              <Send />
            </IconButton>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default PortfolioChatbot;
