import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import Education from './components/Education';
import AwardPage from './components/AwardPage';
import JobExperience from './components/Jobexperience';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<div><HomePage /><BlogPage /><Education /><AwardPage /><JobExperience /></div>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/education" element={<div><Education /></div>} />
          <Route path="/award" element={<div><AwardPage /></div>} />
          <Route path="/job" element={<JobExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
