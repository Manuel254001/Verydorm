import { Paper, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Paper sx={{p:2, textAlign:"center", color:"white", backgroundColor:"black"}}>
        <Typography>
            Copyright © 2025 Verydorm.com. All Rights Reserved.
        </Typography>
    </Paper>
  )
}

export default Footer
