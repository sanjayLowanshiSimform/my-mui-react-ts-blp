import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface ThemeToggleProps {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, toggleColorMode }) => {
  return (
    <IconButton onClick={toggleColorMode} aria-label="Toggle color mode">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
