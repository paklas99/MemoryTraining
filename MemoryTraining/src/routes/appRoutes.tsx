import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/Home';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboard } from '../pages/Dashboard/dashboard';
import MemorizeNumbersPage from '../pages/Numbers/MemorizeNumbersPage';


interface AppRoutesProps {
  isAuthenticated: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated }) => {
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/') {
      // Redirect to the login page if not authenticated and not on the login page or homepage
      window.location.href = '/login';
    }
  }, [isAuthenticated, location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage message="Hello world" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/numbers" element={<MemorizeNumbersPage/>} />

    </Routes>
  );
};

export default AppRoutes;
