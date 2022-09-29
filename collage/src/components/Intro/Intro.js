import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";
import "./intro.css"

import {motion} from "framer-motion"



const Intro = () => {
    let navigate = useNavigate(); 
      const routeChange = () =>{ 
        let path = `/main`; 
        navigate(path);
    }   
    
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {duration: 1.0}}} exit={{opacity:0, transition: {duration: 1.0}}}>
      <Box id="box">
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Typography fontFamily={'Montserrat'} my={2} variant='h5'>WELCOME TO</Typography>
          <Typography fontFamily={'Montserrat'} variant='h1'>MaCV</Typography>
          <Typography fontFamily={'Montserrat'} my={2} variant='h6'>MY PERSONAL PHOTO ALBUM</Typography>
          <Button color="secondary" variant="text" onClick={routeChange}>ENTER</Button>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Intro