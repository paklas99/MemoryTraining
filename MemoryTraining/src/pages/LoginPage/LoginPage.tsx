import React, { useState, FormEvent, useEffect } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { StyledRootContainer, StyledTitle, StyledForm, StyledSubmitButton } from './LoginPageStyles';
import { auth } from '../../Auth/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated, then redirect
    if (auth.currentUser) {
      navigate('/dashboard'); // Replace with your desired page URL
    }
  }, [navigate]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Replace with your desired page URL
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login Error:', error);
    }
  };

  const handleCreateAccount = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Replace with your desired page URL
    } catch (error) {
      setError('Error creating account');
      console.error('Account Creation Error:', error);
    }
  };

  return (
    <StyledRootContainer>
      <StyledTitle variant="h4">
        Login or Create an Account
      </StyledTitle>
      <StyledForm onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        <StyledSubmitButton type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </StyledSubmitButton>
      </StyledForm>
      <StyledForm onSubmit={handleCreateAccount}>
        <StyledSubmitButton type="submit" variant="outlined" color="primary" fullWidth>
          Create Account
        </StyledSubmitButton>
      </StyledForm>
    </StyledRootContainer>
  );
};
