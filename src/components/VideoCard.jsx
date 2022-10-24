import React from 'react';
import { Link } from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia, CardActions, IconButton} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import {demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle} from '../utilities/constants'

function VideoCard( {video: {id: {videoId}, snippet}} ) {

  
//   console.log(videoId)
  // console.log(snippet)

  return (
    <Card sx={{width: { xs: '100%' ,md: '320px', sm: '350px'}, borderShadow: 'none', borderRadius: 0}}>

      <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
         <CardMedia 
         image={snippet?.thumbnails?.high?.url} 
         alt={snippet?.title}
         sx={{width: {xs: '100%', sm: '350px'}, height: 180}}/>
   
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold" color='#fff'>
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
        </Link>

        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight="bold" color='gray'>
                {snippet?.channelTitle || demoChannelTitle.slice(0, 60)}
                <CheckCircle sx={{fontSize: 12, color: 'gray' ,marginLeft: '5px'}} />
            </Typography>

            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
           </IconButton> */}
        </Link>

       
      </CardContent>
    </Card>
  )
}

export default VideoCard