import { styled } from '@mui/system';
import { AppBar, Toolbar, Button, Popover } from '@mui/material';


export const StyledToolbar = styled(Toolbar)(`
  display: flex;
  justify-content: center;
  gap: 10px;
`);



export const StyledPopover = styled(Popover)(`

`);

export const LogoutBtn = styled(Button)(`

`);


export const StyledButton = styled(Button)(`
    background-color: #f5f5f5;
    padding: 10px 30px;
    color: #333;

  &:hover {
    color: #0070f3;
    text-decoration: underline;
  }

  &.active { 
    color: #0070f3;
  }
  `);

export const StyledAppBar = styled(AppBar)(`

`);