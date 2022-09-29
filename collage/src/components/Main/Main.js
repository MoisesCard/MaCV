import { Grid } from '@mui/material'
import React from 'react'
import "./main.css"
import IMG2 from '/Users/moisescardenas/Desktop/MaCV/collage/src/assets/2022/IMG2.jpeg'


// THIS SHOULD BE THE AREA IN MAIN PAGE FILLED WITH PHOTOS
const Main = () => {
  return (
    <Grid id="grid" container  justifyContent="center" alignItems="center">
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
      <img src={IMG2} alt='Truck in field' height={200} width={200}/>
    </Grid>
  )
}

export default Main