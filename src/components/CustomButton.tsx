// CustomButton.tsx
import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  children: React.ReactNode; // Define children prop
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'contained', color = 'primary', children }) => {
  return (
    <Button variant={variant} color={color}>
      {children}
    </Button>
  );
};

export default CustomButton;
