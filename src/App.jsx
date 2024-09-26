import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EnterExam from './components/EnterExam';
import ExamDetails from './components/ExamDetails';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enter-exam" element={<EnterExam />} />
        <Route path="/exam-details" element={<ExamDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
