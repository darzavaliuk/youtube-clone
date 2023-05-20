import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
// import { Feed } from '@mui/icons-material';
import { NavBar, Feed, VideoDetail, SearchFeed, ChannelDetail } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <NavBar />
          <Routes>
            <Route exact path='/youtube-clone' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
