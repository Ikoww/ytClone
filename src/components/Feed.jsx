import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import React from 'react'

import { Sidebar, Videos} from './';
import { fetchData } from '../utilities/fetchAPI';


function Feed() {

const [selectedCategory, setSelectedCategory] = useState('New');
const [videos, setVideos] = useState(null);


useEffect(() => {

       fetchData(`search?part=snippet&q=${selectedCategory}`)
       .then(data => setVideos(data.items))
       
}, [selectedCategory])
  
  
  return (
    <Stack sx={{ flexDirection: {sx: 'column', md: 'row'}}}>
       <Box sx={{ 
               height: {sx: 'auto', md: '90vh'},
               borderRight: '1px solid #3d3d3d',
               paddingX: {sx: 0, md: 2}}}
        >
         <Sidebar 
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
        />

         <Typography 
          variant='body2' 
          sx={{mt: 1.5, color: '#fff'}}>Copyright 2022 GogerTube</Typography>
       </Box>

       <Box padding={1.7} sx={{overflowY: 'auto', height: '90vh' ,flex: 2}}>
         <Typography 
          variant='h4' 
          fontWeight='bold' 
          marginBottom={2}
          marginLeft={3}
          // textAlign='center' 
          sx={{color: 'white'}}
         >  
            
            {selectedCategory} <span style={{color: '#FC1503 '}}>videos</span>

         </Typography>

         <Videos videos={videos} />
       </Box>
    </Stack>
  )
}

export default Feed