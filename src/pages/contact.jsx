import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button, Box, Alert } from '@mui/material';

export default function Contact() {
  const [error,setError] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
  
    if (!username || !email || !message) {
      setError("All fields are required");
      return;
    }
  };
  
  return (
    <div className='min-h-screen mt-20'>
      <Box className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <Box className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <Box>
              <TextField 
                fullWidth
                label="Your username" 
                type="text" 
                placeholder="Username" 
                id="username" 
              />
            </Box>
            <Box>
              <TextField 
                fullWidth
                label="Your email" 
                type="email" 
                placeholder="name@company.com" 
                id="email" 
              />
            </Box>
            <Box>
              <TextField 
                fullWidth
                label="Your password" 
                type="text" 
                placeholder="Message" 
                id="message" 
              />
            </Box>
            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              className='mt-3'

              sx={{ 
                background: 'linear-gradient(90deg, rgba(106,17,203,1) 0%, rgba(37,117,252,1) 100%)' 
              }}
            >
              Submit
            </Button>
          </form>
          <Box className='flex gap-2 text-sm mt-5'>
            <Typography variant="body2" component="span">
              Have an account?
            </Typography>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </Box>
          {
            error && (
              <Alert className='mt-5 text-red-500'>
                {error}
              </Alert>
            )
          }
        </Box>
      </Box>
    </div>
  );
}
