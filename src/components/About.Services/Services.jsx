import {Typography, Box} from '@mui/material'
import ServicesImg from '../../assets/images/services.jpg'
import './About.css'

const Services = () => {
  return (
    <div id='services'>
        <Typography
                variant="h3"
                sx={{
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700, 
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
                  color: '#222', 
                  textAlign: 'center', 
                  margin: { xs: '2rem 0', md: '3rem 0' }, 
                  letterSpacing: 1, 
                  textTransform: 'uppercase', 
                }}
              >
                Our Services
              </Typography>
              <div className='about-container' >  
              <Box
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            maxWidth: { xs: "100%", sm: "80%", md: "40%" }, 
            maxHeight: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            padding: { xs: 2, md: 4 }, 
            backgroundColor: "rgba(255, 255, 255, 0.9)", 
            borderRadius: 2, 
            boxShadow: 2, 
            margin: { xs: "0 auto", md: "0" }, 
            transition: "box-shadow 0.3s ease-in-out", 
            "&:hover": {
              boxShadow: 4,
            },
          }}
        >
          <Typography
            variant="body1"
            width="100%"
            sx={{
              fontFamily: "Playfair Display, serif", 
              fontWeight: 400, 
              fontStyle: "italic", 
              fontStretch: "expanded",
              fontSize: { xs: "1rem", md: "1.2rem" }, 
              lineHeight: 1.8, 
              color: "#333",
              textAlign: { xs: "center", md: "left" }, 
              padding: { xs: 1, md: 2 }, 
            }}
          >
           VeryDorm offers:  <br />
           1. Property Listings and Search: Secure, transparent property listings. <br />
           2. Property Records on Blockchain: Immutable, fraud-proof ownership records. <br />
           3. Property Management: Streamlined management, leveraging blockchain for secure transactions and verification. <br />
          </Typography>
        </Box>
              <Box
          component={"img"}
          src={ServicesImg}
          alt="about us"
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%", lg: "60%" }, 
            objectFit: "cover", 
            height: { xs: "auto", md: 400 }, 
            borderRadius: 2, 
            boxShadow: 3, 
            border: "1px solid #e0e0e0", 
            display: "block", 
            margin: "0 auto", 
            transition: "transform 0.3s ease-in-out", 
            "&:hover": {
              transform: "scale(0.8)", 
            },
          }}
        />
                
       
            </div>
    </div>
  )
}

export default Services
