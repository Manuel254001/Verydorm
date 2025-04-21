import { Checkbox, FormControlLabel, Grid, Button, TextField, Typography, Card, CardContent, Box,  FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact'>
        <Typography sx={{fontSize:{xs:"1.5rem",sm:"2rem",md:"3rem"}, textAlign:"center", fontFamily:"Playfair Display", fontWeight:"700",}}>
            Contact Us
        </Typography> 
        <Grid  container sx={{alignItems: 'center',          
          justifyContent: "space-around",
          display:"flex",
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2, md: 4 },}}   
          boxShadow={"3"}   
          borderRadius={"2"}    
          >
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box boxShadow={"3"} borderRadius={"2"}  mt={2} component={"form"}  sx={{p:2, maxWidth:"sm"}}>
                    <TextField 
                    label="Enter Your Name"
                    variant="outlined"
                    fullWidth
                    required
                    type='text'
                    sx={{mb:2}}
                    />
                    <TextField 
                    label="Enter Your Email"
                    variant="outlined"
                    fullWidth
                    type='email'
                    sx={{minBlockSize:2}}
                    required
                    />
                    <TextField 
                    label="Enter Your Phone Number"

                    variant="outlined"
                    fullWidth  
                    sx={{my:2}}                  
                    />
                     <TextField 
                    label="Enter Your Address"
                    variant="outlined"
                    fullWidth
                    multiline
                    
                    sx={{mb:2}}
                    />
                   <FormControl fullWidth sx={{mb:2}}>
                    <InputLabel>Select Your Subject</InputLabel>
                    <Select>
                        <MenuItem value="1">I want to be A developer</MenuItem>
                        <MenuItem value="2">I want to be an Investor</MenuItem>
                        <MenuItem value="3">I want to be a Partner</MenuItem>
                        <MenuItem value="4">I to own a property</MenuItem>
                        <MenuItem value="5">I want to list my property</MenuItem>
                        <MenuItem value="6">I want to be Implement Verydom In my country</MenuItem>
                        <MenuItem value="7">I want consultation services</MenuItem>
                        <MenuItem value="8">I Am a media person. I would like to write about Verydom</MenuItem>
                        <MenuItem value="9">I want to invite the team as a speaker</MenuItem>
                    </Select>
                   </FormControl>
                    <TextField 
                    label="Enter Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={4}
                    sx={{mb:2}}
                    />
                    <TextField 
                    type='file'
                    variant="outlined"
                    fullWidth
                    sx={{mb:2}}                   
                    />
                   
                 <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the Terms and Conditions of VeryDorm."
                    required
                    mb={2}
                 /> 
                 <Button type='submit' variant='contained' fullWidth sx={{my:2}}>
                    Submit
                 </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card
            sx={{
              width: { xs: '100%', sm: 345 }, 
              maxWidth: '400px', 
              mx: 'auto',
              borderRadius: 3,
              boxShadow: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 12,
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography
                variant='h5' 
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  textAlign: 'center',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                Get In Touch With Us
              </Typography>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  gap: 2,
                  mt: 2,
                }}
              >
                <Grid item>
                  <Typography
                    variant='subtitle1'
                    sx={{
                      fontSize: '1rem',
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600,
                      color: '#333',
                    }}
                  >
                    Phone Number: +254 123 456 789
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                        fontSize: '1rem',
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 600,
                        color: '#333',
                      }}
                  >
                    Address: Nyeri, Kenya 1670-10100, Africa
                  </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    component={MdOutlineMail}
                    sx={{
                      fontSize: '1.5rem',
                      color: 'primary.main',
                    }}
                  />
                  <Typography
                    variant='subtitle1' 
                    sx={{
                      fontSize: '1rem',
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600,
                      color: '#333',
                    }}
                  >
                    Email Address: info@verydorm.com
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ mt: 2 }}>
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: '1rem',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600,
                    color: '#333',
                  }}
                >   
                  Follow Us On Social Media
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 1,
                  }}
                >
                  <Box
                    component={FaFacebookF}
                    sx={{
                      fontSize: '1.5rem',
                      color: 'primary.main',
                    }}
                  />
                  <Box
                    component={FaXTwitter}
                    sx={{
                      fontSize: '1.5rem',
                      color: 'primary.main',
                    }}
                  />
                  <Box
                    component={FaInstagram}
                    sx={{
                      fontSize: '1.5rem',
                      color: 'primary.main',
                    }}
                  />
                  <Box
                    component={FaLinkedinIn}
                    sx={{
                      fontSize: '1.5rem',
                      color: 'primary.main',
                    }}
                  />
                </Box>

              </Grid>
            </CardContent>
          </Card>
            </Grid>
         </Grid>   
                
    </div>
  )
}

export default Contact
