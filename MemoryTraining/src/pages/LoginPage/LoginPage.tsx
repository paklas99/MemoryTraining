import React, { useState } from 'react';
import { StyledRootContainer, StyledTitle, StyledForm, StyledSubmitButton, StyledTextField } from './LoginPageStyles';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <StyledRootContainer>
      <StyledTitle variant="h4">
        Login
      </StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <StyledTextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <StyledSubmitButton type="submit" variant="contained" fullWidth>
          Sign In
        </StyledSubmitButton>
      </StyledForm>
    </StyledRootContainer>
  );
};

