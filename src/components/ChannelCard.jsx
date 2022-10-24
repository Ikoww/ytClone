import React from 'react'
import { CheckCircle } from '@mui/icons-material';
import {demoChannelUrl, demoChannelTitle, demoProfilePicture} from '../utilities/constants'
import { Link } from 'react-router-dom';
import {Box, Typography, Card, CardContent, CardMedia} from '@mui/material';


function ChannelCard( {channelDetail, marginTop }) {

  console.log('From: ChannelCard')
  // console.log(channelId)
  return (
    <Box sx={{
      boxShadow: 'none',
      bordeRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: {sx: '350px', md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop,
    }}>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff'
        }}>
           <CardMedia 
           image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
           alt={channelDetail?.snippet?.channelTitle} 
           sx={{
             borderRadius: '50%', 
             height: '180px', 
             width: '180px',
             marginBottom: 2,
             border: '1px solid #e3e3e3'}} 
           />
           <Typography variant='h6'>
            {channelDetail?.snippet?.title|| demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, color: 'gray' ,marginLeft: '5px'}} />
            </Typography>

            {channelDetail?.statistics?.subscriberCount && (
             <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
               {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
             </Typography>
        )}

        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard