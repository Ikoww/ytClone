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
  
  // console.log(channel);
  console.log(videos);

  useEffect(() => {
   fetchData(`channels?part=snippet&id=${id}`)
   .then(data => setChannel(data?.items[0]));

   fetchData(`search?channelId=${id}&part=snippet&order=date`)
   .then(data => setVideos(data?.items));
  }, [id])


  return (
    <div>{id}</div>
  )
}

export default ChannelDetail