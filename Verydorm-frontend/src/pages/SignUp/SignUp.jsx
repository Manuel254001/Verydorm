import { Box, Paper, Avatar,Grid, Typography, TextField, FormControlLabel, FormControl, Checkbox, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Box
      sx={{
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        
        alignItems: 'center',
      
        background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)',
        padding: { xs: 2, sm: 2 },
        width: '100vw',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 2,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #ffffff 30%, #f5f7fa 90%)',
          width: '100%',
          maxWidth: 600,
          textAlign: 'center',
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
          S
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
          SignUp
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Enter Your FirstName"
            variant="outlined"
            required
            fullWidth
            sx={{
              mt: 2,
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
            label="Enter Your LastName"
            variant="outlined"
            required
            fullWidth
            sx={{
              mt: 2,
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
            label="Enter Your Email Address"
            variant="outlined"
            required
            fullWidth
            type='email'  
            sx={{
              mt: 2,
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
            label="Enter Your UserName"
            variant="outlined"
            required
            fullWidth
            sx={{
              mt: 2,
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
            label="Enter Your Phone Number"
            variant="outlined"
            required
            fullWidth
            type='phone number'
            sx={{
              mt: 2,
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
            label="Enter your Password"
            variant="outlined"
            required
            fullWidth
            type='password'
            sx={{
              mt: 2,
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
            label="Confirm  Password"
            variant="outlined"
            required
            fullWidth
            type='password'
            sx={{
              mt: 2,
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
          label="I confirm am 18years old and above and agree to verydorm terms and conditions."
          required
          />
          <Button type='submit' fullWidth variant="contained" color="primary">
            Register
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography>
                Already have an account? 
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={Link} to='/login'>SignIn</Typography>
            </Grid>
          </Grid>        

        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;