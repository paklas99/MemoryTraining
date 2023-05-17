import { styled } from '@mui/system';
import { Typography, TextField, Button } from '@mui/material';

export const StyledRootContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const StyledTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const StyledForm = styled('form')`
  width: 100%;
  max-width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledSubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
