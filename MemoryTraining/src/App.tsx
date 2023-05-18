import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './routes/appRoutes';
import { Navbar } from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import { Theme } from './themes/Themes';
import { auth } from './Auth/firebase';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    // You can render a loading indicator or placeholder while the authentication is being checked
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <AppRoutes isAuthenticated={isAuthenticated} />
    </ThemeProvider>
  );
}

export default App;
