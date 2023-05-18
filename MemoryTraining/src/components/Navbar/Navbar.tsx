import React, { useState, useEffect } from 'react';
import { StyledAppBar, StyledToolbar, StyledButton } from "./NavbarStyles";
import { Link } from "react-router-dom";
import { auth } from '../../Auth/firebase';

export const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledButton>
          <Link to="/">Home</Link>
        </StyledButton>
        {loggedIn ? (
          <StyledButton onClick={handleLogout}>
            Logout
          </StyledButton>
        ) : (
          <StyledButton>
            <Link to="/login">Login</Link>
          </StyledButton>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};
