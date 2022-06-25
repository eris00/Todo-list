import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor:'#F89344'}}>
        <Toolbar>
         <Typography 
         variant='h2'
         color='#F4F4F4'
         >
            Todo List
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
