import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";

interface NavbarProps {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ mode, toggleColorMode }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" enableColorOnDark>
      <Container>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Button component={Link} to="/" color="inherit" sx={{ mr: 2 }}>
            Introduction
          </Button>
          <Button component={Link} to="/getting-started" color="inherit" sx={{ mr: 2 }}>
            Getting Started
          </Button>
          <Button
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            Customizing MUI
          </Button>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "menu",
            }}
          >
            <MenuItem
              component={Link}
              to="/component-props"
              onClick={handleClose}
            >
              1. Component Props
            </MenuItem>
            <MenuItem component={Link} to="/sx-props" onClick={handleClose}>
              2. SX Prop
            </MenuItem>
            <MenuItem
              component={Link}
              to="/css-functions"
              onClick={handleClose}
            >
              3. CSS Function
            </MenuItem>
            <MenuItem component={Link} to="/theming" onClick={handleClose}>
              4. Theming
            </MenuItem>
            <MenuItem
              component={Link}
              to="/best-practice"
              onClick={handleClose}
            >
              Best Practice?
            </MenuItem>
          </Menu>

          <Button onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
