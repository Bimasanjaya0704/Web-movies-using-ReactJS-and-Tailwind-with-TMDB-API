import React from 'react';
import Home from './Pages/Home';
import NowPlaying from './Pages/NowPlaying';
import Upcoming from './Pages/Upcoming';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import WatchMovie from './Pages/WatchMovie';
import DownloadMovie from './Pages/DownloadMovie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/watchmovie" element={<WatchMovie />} />
        <Route path="/download" element={<DownloadMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
