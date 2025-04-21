import { Container, Paper, Avatar, Box, Typography, Grid } from '@mui/material'


const Testimonials = () => {
    const team=[
       
{
    name:"Sarah Mwangi",
    role:"Property Owner, Kenya",
    quote:"VeryDorm transformed how I manage my properties. The blockchain records are transparent and secure, giving me peace of mind and eliminating disputes.",
    purpose:"Highlights security and transparency for property owners."
},
{
    name:"Rajesh Patel",
    role:"Real Estate Investor, India",
    quote:"Listing properties on VeryDorm is seamless, and the AI-driven insights help me make smarter investments. It’s a game-changer for real estate.",
    purpose:"Emphasizes ease of use and AI capabilities for investors."
},{
    name: "David Okoth",
    role: "Community Development Partner, Uganda",
    quote: "VeryDorm empowers our community with secure property ownership, driving economic growth and financial inclusion",
    purpose: "Underlines the platform’s broader social impact."
},{
    name: "Amina Yusuf",
    role: "First-Time Buyer, Nigeria",
    quote:"VeryDorm made my first home purchase affordable and transparent, with clear records ensuring a smooth, trustworthy process",
    purpose: "Showcases accessibility and trust for new buyers."
}












       
    ]
  return (
    <Container
    maxWidth={false} 
    sx={{
      
      width: '100vw', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: { xs: 4, md: 6 }, 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8f0fe 100%)', 
      px: { xs: 2, md: 4 }
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        fontSize: { xs: '2rem', md: '2.5rem' },
        color: 'primary.main',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
        mb: 4,
      }}
    >
      Testimonials
    </Typography>
    <Grid container spacing={3} alignItems="center" width={"100vw"} padding={2} justifyContent="space-around">
      {team.map((member, index) => (
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
          <Paper
            elevation={10}
            sx={{
              maxWidth: '20rem',
              mx: 'auto',
              borderRadius: 3,
              overflow: 'hidden', 
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: 12,
              },
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 3,
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  border: '2px solid #e0e0e0',
                  boxShadow: 2,
                  bgcolor: 'grey.200', 
                }}
              >                
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'primary.main',
                  textAlign: 'center',
                }}
              >
                {member.role}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '0.9rem',
                  color: '#555',
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}
              >
                {member.quote}
              </Typography>
              <Typography variant="h6" sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 400,
                fontSize: '1rem',
                textAlign: 'right',
                position:"relative",
                
                top:16
              }}>
                {member.purpose}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}

export default Testimonials
