const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy chatbot endpoint
app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  console.log('User said:', userMessage);

  // Respond with dummy reply for now
  res.json({ reply: `You said: "${userMessage}". I am a medical chatbot.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

