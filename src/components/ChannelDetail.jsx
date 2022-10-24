import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {Videos, ChannelCard} from './';
import {fetchData} from '../utilities/fetchAPI'

function ChannelDetail() {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  
  console.log('From: ChannelDetail')



  useEffect(() => {
   fetchData(`channels?part=snippet&id=${id}`)
   .then(data => setChannel(data?.items[0]));

   fetchData(`search?channelId=${id}&part=snippet&order=date`)
   .then(data => setVideos(data?.items));
  }, [id])


  return (
    <Box minHeight='95vh'>
      <Box>

      <div style={{
        background: 'linear-gradient(90deg, rgba(180,9,9,1) 0%, rgba(48,135,214,1) 50%, rgba(69,252,166,1) 100%)',
        zIndex: 10,
        height: '300px',
      }}/>
        
      
        <ChannelCard channelDetail={channel} marginTop='-95px' />
    </Box>
    <Box display="flex" padding= '2'>
      <Box sx={{mr: { sm: '100px'}}} />
      <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail;