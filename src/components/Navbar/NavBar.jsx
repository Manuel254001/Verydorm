import { AppBar, Avatar, Button,  Drawer,  IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery,useTheme } from '@mui/material'
import React, { useState } from 'react'
import Logo from "../../assets/images/logo2.png"
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import MenuIcon from '@mui/icons-material/Menu';




const NavBar = () => {
  const [drawerOpen, setDrawerOpen]= useState(false)
  const theme =useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const navigate = useNavigate()
  const location = useLocation()
  const navItems= [   
    {label:"Home",path:"/"},
    {label:"Listings",path:"/listings"},
    {label: "Management", path:"/management"},
    {label:"Records", path:"/records"},
    {label:"About", path:"/#about"},
    {label:"services",path:"/#services"},
    {label:"Blog", path:"/blog"},
    {label:"Contact",path:"/#contact"},
  ]
  const handleNavClick = (path) => {
    if (path === '/#about') {
      
      if (location.pathname === '/') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        
        navigate('/#about');
      }
    } else {
      navigate(path);
    }
    setDrawerOpen(false)
  };

  const toggleDrawer =() =>{
    setDrawerOpen(!drawerOpen)
  }

  const drawerContent=(
    <List>
      {
        navItems.map((item)=>(
          <ListItem button key={item.label} onClick={ () => handleNavClick(item.path)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))
      }
     <ListItem button component={Link} to="/signup" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Register" />
      </ListItem>
      <ListItem button component={Link} to="/login" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Login" />
      </ListItem>
    </List>

  );
  return (
    <AppBar>
        <Toolbar>
          {
            isMobile &&(
              <IconButton edge="end" color='inherit' onClick={toggleDrawer} sx={{mr:2}}>
                  <MenuIcon />
              </IconButton>
            )
          }
            <IconButton  >                                
                <Avatar 
                src={Logo}
                sx={{width: 64, height: 64}}
                alt='logo'
            />
            </IconButton>
            <Typography  component={Link} to={"/"} sx={{
              color:'inherit',
              flexGrow:1
            }}>
                Verydom
            </Typography>
            { 
            !isMobile &&
              navItems.map((item)=>(
                <Button onClick={() => handleNavClick(item.path)} key={item.label} color={"white"} component={Link} to={item.path}>{item.label}</Button>
              ))
            }
            {}
            {
              !isMobile &&(
                <>
                  <Button color={"white"} component={Link} to={"/signup"}   sx={{
            
          }}>
            Register         
          </Button>

          <Button startIcon={<CiLogin />} color={"white"}  component={Link} to={'/login'} sx={{
            backgroundColor:'#000'
          }}>
            Login            
          </Button>
                </>
              )
            }
          
        </Toolbar> 
        <Drawer anchor='right' open={drawerOpen} onClose={()=> setDrawerOpen(false)}>
            {drawerContent}
        </Drawer>        
    </AppBar>
  )
}

export default NavBar
