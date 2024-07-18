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
          place with ease
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        sachith Estate will help you find your home fast, easy, and comfortable. Our expert support is always available.
      </Typography>
      <Link component={RouterLink}  sx={{ color: 'primary.main', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
        Let's Start now...
      </Link>
      <Greeting/>
      <Box sx={{ mt: 4 }}>
        <img src="https://lirp.cdn-website.com/bf4fe880/dms3rep/multi/opt/estate+vs+a+house+-+Ranger+Ridge-1920w.jpeg" alt="home page photo" style={{ width: '100%', borderRadius: '8px' }} />
      </Box>
    </Box>
  );
}