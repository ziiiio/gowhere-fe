// Chatgpt

import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface ErrorComponentProps {
  message: string;
  children?: ReactNode;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message,
  children,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <div>
        <Typography variant="h5" color="error" align="center">
          {message}
        </Typography>
        {children}
      </div>
    </Box>
  );
};

export default ErrorComponent;
