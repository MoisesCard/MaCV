import React from 'react'
import { Button, Grid} from '@mui/material';


const Header = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" mt={2} padding={2}>
        <Button color="inherit">2022</Button>
        <Button color="inherit">2021</Button>
        <Button color="inherit">2020</Button>
        <Button color="inherit">2019</Button>
        <Button color="inherit">Polaroids</Button>
    </Grid>
  )
}

export default Header