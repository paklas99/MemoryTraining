import { StyledAppBar, StyledToolbar, StyledButton } from "./NavbarStyles";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledButton>
        <Link to="/">Home</Link>
        </StyledButton>
        <StyledButton  >
          <Link to="/login">Login</Link>
        </StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};
