import { Box, Grid,Button, Typography } from '@mui/material'
import '@fontsource/playfair-display/700-italic.css';
import HeroImg from "../../assets/images/hero-img.jpg"
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <Box sx={{
        backgroundImage:"url("+HeroImg+")",
        backgroundSize:"cover",
        backgroundPosition:"center",   
        maxHeight:"60vh", 
        position:"relative",            
    }} >
        <Grid container sx={{alignItems:"center", minHeight:"60vh", color:"white", justifyContent:"center", display:"flex", flexDirection:"column"}}>
            <Grid>
                <Typography variant='h4' sx={{fontSize:{xs:"1rem",sm:"2rem",md:"3rem",lg:"4rem"}, textAlign:"center", fontFamily:"Playfair Display", fontWeight:"700",}}>
                    Step into the future of propety management with Verydorm
                </Typography>
            </Grid>
            <Grid>
                <Typography variant='h5' sx={{fontSize:{xs:"1rem",sm:"1rem",md:"1.5rem",lg:"2rem"}, fontFamily:"Playfair Display", fontWeight:"400", fontStyle:"italic", fontStretch:"expanded"}}>
                       where blockchain meets trust, security, and prosperity.
                </Typography>
            </Grid>
            <Grid  sx={{mt:2, gap:2, display:"flex", justifyContent:"center", flexDirection:{xs:"column",md:"row"}}} >
                <Grid>
                    <Button variant='contained' endIcon={<FaArrowRight />}>
                        Find a property
                    </Button>
                </Grid>
                <Grid>
                    <Button variant='contained' >
                        Manage Your Property
                    </Button>
                </Grid>
                <Grid>
                    <Button variant='outlined'>
                        Verify Land documents
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Hero
