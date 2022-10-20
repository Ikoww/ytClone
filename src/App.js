import { Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';

import {ChannelDetail, Feed, SearchFeed, VideoDetail, Navbar} from './components';


function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>

      <Navbar />
      <Routes>
        
         <Route path='/' exact element={<Feed />} />
         <Route path='/video/:id' exact element={<VideoDetail/>} />
         <Route path='/channel/:id' exact element={<ChannelDetail />} />
         <Route path='/search/:searchTerm' exact element={<SearchFeed />} />

      </Routes>
    </Box>
  );
}

export default App;
