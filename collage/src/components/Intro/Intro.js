import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./intro.css"

const Intro = () => {
  return (
    <Box id="box">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography fontFamily={'Montserrat'} my={2} variant='h5'>WElCOME TO</Typography>
        <Typography fontFamily={'Montserrat'} variant='h1'>MaCV</Typography>
        <Typography fontFamily={'Montserrat'} my={2} variant='h5'>MY PERSONAL PHOTO ALBUM</Typography>
        <Button color="secondary" variant="text">ENTER</Button>
      </Grid>
    </Box>
  )
}

export default Intro