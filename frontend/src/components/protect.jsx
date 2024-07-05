// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Protect = ({ children, role }) => {
  const userInfo = localStorage.getItem('userInfo');
  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (userInfo.role !== role) {
    return children;
  }

  return children;
};

export default Protect;
