import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1d3557',  // Using deep blue from palette for footer background
        color: '#f1faee',  // Light background color for text
        py: 2,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: '#f1faee' }}>
        Swayam Khandelwal
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {/* GitHub Link */}
        <IconButton
          color="inherit"
          component={Link}
          href="https://github.com/swayamkh02"
          target="_blank"
          aria-label="GitHub"
          sx={{ color: '#f1faee' }}  // Light color for icons
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        {/* Email Link */}
        <IconButton
          color="inherit"
          component={Link}
          href="mailto:swayamkhandelwal02@gmail.com"
          aria-label="Email"
          sx={{ color: '#f1faee' }}  // Light color for icons
        >
          <EmailIcon fontSize="large" />
        </IconButton>

        {/* Website Link */}
        <IconButton
          color="inherit"
          component={Link}
          href="https://swayamkhandelwal.live"
          target="_blank"
          aria-label="Website"
          sx={{ color: '#f1faee' }}  // Light color for icons
        >
          <Typography variant="body2" sx={{ color: '#ffffff', fontSize: '1.5rem' }}>
            🌐
          </Typography>
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 1, color: '#f1faee' }}>
        © {new Date().getFullYear()} Swayam Khandelwal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
