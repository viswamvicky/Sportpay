// src/components/routers/Routers.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterPage from '../pages/RegisterPage';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Routers;
