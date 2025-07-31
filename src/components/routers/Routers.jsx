// src/components/routers/Routers.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import AddStudent from '../pages/AddStudent'; // Import the AddStudent component



function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-student" element={<AddStudent />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default Routers;
