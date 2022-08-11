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

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="video/id=:id" element={<Videos movie={movie} playerRef={playerRef} />} />
        
        <Route path="Not-found" element={<MissingVideo />} />
      </Routes>
    </div>
  );
}

/*interface VideoProps {
  movie: {
    id: number;
    link: string;
    name: string;
  };
  playerRef: any;
}
function Videos({ movie, playerRef }: VideoProps) {
  const { videoStore } = rootStore;
  useEffect(() => {
    playerRef.current.addEventListener('play', videoStore.play);
    playerRef.current.addEventListener('pause', videoStore.pause);
    return () => {
      playerRef.current.removeEventListener('play', videoStore.play);
      playerRef.current.removeEventListener('pause', videoStore.pause);
    };
  }, []);

  return (
    <div className="place-content-center">
      <div className="divide-y-8 bg-gray-100 text-blue-600 visited:text-purple-600 w-20 content-center ">
        <a href="/home" className="text-l my-3 justify-center">
          Back to homepage!
        </a>
      </div>
      <div className="flex flex-row justify-center items-center">
        <a href={`?id=${videoStore.videoId - 1}`}>
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={() => videoStore.imeidRoot()}
            size={40}
          />
        </a>

        <ReactHlsPlayer
          id="player"
          className="content-center"
          playerRef={playerRef}
          src={movie.link}
          autoPlay={false}
          controls={true}
          width="50%"
          height="auto"
          muted
          
        />

        <a href={`?id=${videoStore.id + 1}`}>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={40}
          />
        </a>
      </div>
    </div>
  );
}

*/
export default observer(App);
