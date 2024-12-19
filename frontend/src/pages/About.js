import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#f1faee', minHeight: '100vh', padding: { xs: '20px', sm: '40px' } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#1d3557', 
              marginBottom: '20px', 
              fontWeight: 'bold', 
              fontSize: { xs: '2rem', sm: '3rem' } 
            }}>
            About QP Generator
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#457b9d', 
              marginBottom: '40px', 
              fontSize: { xs: '1rem', sm: '1.25rem' },
              lineHeight: '1.6', 
              textAlign: 'justify' 
            }}>
            The QP Generator is an intuitive and AI-powered platform designed to help educators and professionals quickly generate customized question papers. With seamless integration of various question types and automated content suggestions, QP Generator streamlines the process, saving valuable time and effort for teachers, examiners, and content creators.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: '40px', textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#457b9d', 
              fontWeight: 'bold', 
              marginBottom: '20px', 
              fontSize: { xs: '1.5rem', sm: '2rem' }
            }}>
            About Me
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#1d3557', 
              fontSize: { xs: '1rem', sm: '1.2rem' }, 
              lineHeight: '1.6', 
              textAlign: 'justify',
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
            Hello! I'm Swayam Khandelwal, a Computer Science Engineer from BMS Institute of Technology and Management in Bengaluru. I have a deep passion for coding, AI, and problem-solving. Over the years, I've had the privilege of working on exciting projects that combine technology with real-world applications. In my spare time, I enjoy exploring new tech, building innovative solutions, and participating in hackathons to challenge myself and collaborate with like-minded individuals.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#1d3557', 
              marginBottom: '20px', 
              fontSize: { xs: '1rem', sm: '1.2rem' }, 
              lineHeight: '1.6' 
            }}>
            Want to know more about my work? Visit my personal website:
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#d62828', 
              color: 'white', 
              padding: '6px 12px', 
              fontSize: { xs: '.7rem', sm: '1rem' }, 
              '&:hover': { backgroundColor: '#d63030' }
            }} 
            component="a" 
            href="https://swayamkhandelwal.live" 
            target="_blank" 
            rel="noopener noreferrer">
            Visit My Website
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

