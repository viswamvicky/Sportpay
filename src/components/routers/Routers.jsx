// src/components/routers/Routers.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';



function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Routers;
