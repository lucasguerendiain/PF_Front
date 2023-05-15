import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function LoadingComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress sx={{ width: '50rem', height: '50rem' }} />
    </Box>
  );
}
