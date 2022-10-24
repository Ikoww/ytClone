import React from 'react'
import { Box, Stack, } from '@mui/material'

import {VideoCard, ChannelCard} from './';

function Videos( {videos, direction }) {

  

  return (
    <Stack 
     direction={direction || 'row'}
     flexWrap='wrap'
     justifyContent='start'
     gap={2}
    //  marginLeft='20px'
     >

        {videos?.map((video, i) => (
            <Box key={i}>
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard channelDetail={video}/>}

            </Box> ))}
        

    </Stack>
  )
}

export default Videos