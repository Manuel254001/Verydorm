import { Container, Paper, Avatar, Box, Typography, Grid } from '@mui/material'
import services from '../../assets/images/services.jpg'

const Team = () => {
    const team=[
        {
            name:"Emmanuel Muthomi",
            role:"CEO",
            desc:"Sir. Emmanuel Muthomi Muchui, CA. Blockchain, finance Expert, AI expert, driving secure property management. He has led successful innovative projects.",
            image:{src:services,alt:"Emma Smith"}
        },
    
        {
            name:"Avishek J",
            role:"CTO",
            desc:"vishek J, a web3  developer from India, offers web development, . He has worked on multiple blockchain and web3 projects.",
            image:{src:services,alt:"Emma Smith"}
        },
        {
            name:"Brian Tanui",
            role:"Full Stack Developer",
            desc:"Builds complete web applications, handling both front-end interfaces and back-end systems.",
            image:{src:services,alt:"Brian Tanui"}
        },
        {
            name: "Gifton Isika",
            role:"Back-End Developer",
            desc:"Builds secure, scalable server-side systems, APIs, and databases. Focused on performance, reliability, and seamless integration with front-end and third-party services.",
            image:{src:services,alt:"Gifton Isika"}
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
      Our Team
    </Typography>
    <Grid container spacing={3} alignItems="center" width={"100vw"} padding={2} justifyContent="space-around">
      {team.map((member, index) => (
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
          <Paper
            elevation={6}
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
                {member.image.src ? (
                  <img
                    src={member.image.src}
                    alt={member.image.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <Typography variant="h6" color="text.secondary">
                    {member.name[0]}
                  </Typography>
                )}
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
                {member.desc}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}

export default Team
