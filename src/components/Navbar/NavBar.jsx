import { AppBar, Avatar, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Logo from "../../assets/images/logo.jpg"
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

const NavBar = () => {
  const navItems= [   
    {label:"Listings",path:"/listings"},
    {label: "Management", path:"/management"},
    {label:"Records", path:"/records"},
    {label:"About", path:"/#about"},
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
  };
  return (
    <AppBar>
        <Toolbar>
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
              navItems.map((item)=>(
                <Button onClick={() => handleNavClick(item.path)} key={item.label} color={"white"} component={Link} to={item.path}>{item.label}</Button>
              ))
            }
            <Button color={"white"}   sx={{
            
          }}>
            Register         
          </Button>

          <Button startIcon={<CiLogin />} color={"white"}  component={Link} to={'/login'} sx={{
            backgroundColor:'#000'
          }}>
            Login            
          </Button>
          
        </Toolbar>      
    </AppBar>
  )
}

export default NavBar
