import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Box
      sx={{
        mt:10,        
        width: '100%',         
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       
        background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)',
        padding: { xs: 2, sm: 3, md: 4 }, 
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: { xs: 2, sm: 3 }, 
          borderRadius: 2,
          background: 'linear-gradient(135deg, #ffffff 30%, #f5f7fa 90%)',
          width: '100%',
          maxWidth: 400, 
          minWidth: { xs: 280, sm: 320 }, 
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        }}
      >
        <Avatar
          sx={{
            width: 64,
            height: 64,
            margin: '0 auto',
            backgroundColor: 'primary.main',
            color: 'common.white',
            fontSize: '2rem',
          }}
        >
          <MdAccountCircle />
        </Avatar>
        <Typography
          variant="h5"
          sx={{
            my: 2,
            fontWeight: 600,
            color: '#1e3a8a',
            letterSpacing: '0.5px',
          }}
        >
          Sign In
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Enter Your Email Address or UserName"
            variant="outlined"
            required
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
                },
                '&.Mui-focused': {
                  boxShadow: '0 0 8px rgba(25, 118, 210, 0.3)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'text.secondary',
                fontWeight: 500,
              },
            }}
          />
          <TextField
            label="Enter Your Password"
            variant="outlined"
            required
            fullWidth
            type="password"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
                },
                '&.Mui-focused': {
                  boxShadow: '0 0 8px rgba(25, 118, 210, 0.3)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'text.secondary',
                fontWeight: 500,
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ alignSelf: 'flex-start' }} 
          />
          <Button type="submit" fullWidth variant="contained" sx={{ py: 1.5, fontSize: '1rem' }}>
            Login
          </Button>
        </Box>
        <Grid container alignItems="center" justifyContent="center" sx={{ mt: 2, gap: 1 }}>
          <Grid item>
            <Typography variant="body2">Don't have an account?</Typography>
          </Grid>
          <Grid item>
            <Typography
              component={Link}
              to="/signup"
              sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              Register here
            </Typography>
          </Grid>
        </Grid>
        <Typography
          component={Link}
          to="/resetPassword"
          sx={{
            mt: 2,
            display: 'block',
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Forgot password?
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;