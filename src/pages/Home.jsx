import React, { theme } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Greeting from '../components/Greeting';
import Timer from '../components/Timer';



export default function Home() {

  

  return (

    <Box sx={{ py: 7, px: 5 }}>
      <Timer/>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            Find your next{' '}
          </Typography>
          <Typography component="span" sx={{ color: 'text.primary' }}>
            perfect
          </Typography>
        </Typography>
        <Typography variant="h3" component="div" sx={{ color: 'text.secondary', fontWeight: 'bold', mb: 2 }}>
          Learning Projects
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
      Welcome to landing page

Discover a world of possibilities with our comprehensive solutions. 
At landing page, we are committed to providing you with the best experience, tailored to meet your needs.
 Explore our offerings, learn more about our mission, and get in touch with our team. Your journey to learn more starts here.


      </Typography>
      <Link component={RouterLink}  sx={{ color: 'primary.main', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
        Let's Start now...
      </Link>
      <Greeting/>
      <Box sx={{ mt: 4 }}>
        <img src="https://wallpaperaccess.com/full/198053.jpg" alt="home page photo" style={{ width: '100%', borderRadius: '8px' }} />
      </Box>
    </Box>
  );
}