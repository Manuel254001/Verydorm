import { Box, Button,  Paper, TextField, Typography } from '@mui/material'
import backgroundImage from '../../assets/images/hero-img.jpg'
import React from 'react'

const Subscribe = () => {
  return (
    <Paper
    sx={{
     
      mx: 'auto',
      p: { xs: 2, sm: 4 },
      borderRadius: 3,
      boxShadow: 8,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 2,
        width: '100%',
        color: '#fff', // White text for contrast
      }}
    >
      <Typography
        variant='h5' // Changed from h4 for semantics
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          color: '#f28c38', // Specific orange shade
        }}
      >
        Subscribe
      </Typography>
      <Typography
        variant='body1'
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          color: '#fff',
          maxWidth: '80%',
          mx: 'auto',
        }}
      >
        Subscribe to our newsletter to receive the latest news and updates
      </Typography>
      <Box
        component='form'
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Column on xs, row on sm+
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 1.5, sm: 2 },
        }}
      >
        <TextField
          label='Enter Your Email'
          variant='outlined'
          type='email'
          required
          fullWidth
          sx={{
            '& .MuiInputBase-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 1,
              fontFamily: 'Roboto, sans-serif',
            },
            '& .MuiInputLabel-root': {
              fontFamily: 'Playfair Display, serif',
              color: '#f28c38',
              '&.Mui-focused': {
                color: '#f28c38',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.7)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f28c38',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f28c38',
            },
          }}
        />
        <Button
          type='submit'
          variant='contained'
          sx={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            py: 1.5,
            px: 3,
            borderRadius: 1,
            backgroundColor: '#f28c38',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e07b30', // Darker orange
            },
            width: { xs: '100%', sm: 'auto' }, // Full-width on xs
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  </Paper>
  )
}

export default Subscribe
