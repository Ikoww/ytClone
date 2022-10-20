import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import SearchBar from './SearchBar';
import { logo } from '../utilities/constants';

function Navbar() {
  return (

    <Stack 
      direction ='row' 
      alignItems='center' 
      p={2}
      sx={{postion: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>

        <Link to='/' style ={{display: 'flex' , alignItems: 'center'}}>
            {/* <img src={logo} alt='logo' height={45} />
             */}

            <Typography sx={{color: '#FC1503'}}>WorkName</Typography> 
        </Link>

        <SearchBar />

    </Stack>
      
  )
}

export default Navbar