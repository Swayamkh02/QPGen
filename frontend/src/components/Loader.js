import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '55vh', 
        backgroundColor: '#f1faee' 
      }}
    >
      <CircularProgress sx={{ color: '#457b9d' }} />
    </Box>
  );
};

export default Loader;
