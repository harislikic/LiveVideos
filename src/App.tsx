import React, { useEffect } from 'react';
import Home from './pages/Home';
import { getData, getDataById } from './data/data';
import ReactHlsPlayer from './video';
import MissingVideo from './pages/MissingVideo';
import { observer } from 'mobx-react-lite';
import Messages from './pages/Messages';
import { rootStore } from './Stores/RootStore';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NavBar from './pages/NavBar';
import Videos from './pages/Video';

function App() {
  const { videoStore } = rootStore;

  const playerRef = React.useRef<HTMLVideoElement>();
  let movie = getDataById(Number(videoStore.id) ) as  any;
  let videoDataLenght = getData().length as number;
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="video/id=:id" element={<Videos movie={movie} playerRef={playerRef} videoDataLenght={videoDataLenght}/>} />
       
      
      </Routes>
    </div>
  );
}


export default observer(App);
