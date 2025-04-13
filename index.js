// index.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-4",
      messages: [{ role: "user", content: userMessage }]
    }, {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Error calling OpenAI API' });
  }
});

app.listen(3000, () => {
  console.log('ChatGPT Alexa server running on port 3000');
});
