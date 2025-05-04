// src/api/geminiApi.js
import axios from 'axios';

const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const sendMessageToGemini = async (message) => {
  try {
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      { contents: [{ parts: [{ text: message }] }] }
    );

    console.log('API Response:', response.data); // Debugging line

    const reply = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return reply || 'No response from AI.';
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    return 'Error occurred. Please try again.';
  }
};
