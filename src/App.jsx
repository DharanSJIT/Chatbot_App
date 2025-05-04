// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Chatbot from './components/Chatbot';

const Home = () => <h1 className="text-center text-2xl">Welcome to Gemini Chatbot</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/chat" replace />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
