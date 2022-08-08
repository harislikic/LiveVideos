import React, { useEffect } from 'react';
import Home from './pages/Home';
import { getData } from './data/data';
import ReactHlsPlayer from './video';
import MissingVideo from './pages/MissingVideo';
import { observer } from 'mobx-react-lite';
import Messages from './pages/Messages';
import { rootStore } from './Stores/RootStore';

function App() {
  const { videoStore } = rootStore;
  /* const [videoToggle, setVideoToggle] = useState(false);
  function videoPlaying() {
    setVideoToggle(true);
  }
  function videoPaused() {
    setVideoToggle(false);
  }
*/
  const playerRef = React.useRef<any>();
  let params: any = window.location.search
    .slice(1)
    .split('&')
    .find(x => x.includes('id='))
    ?.replace('id=', '');
  let data = getData();
  let movie = data.find(x => x.id == params);
  let check: boolean = window.location.search.includes('id=');

  if (check == false) {
    return <Home></Home>;
  }
  return movie ? (
    <>
      {videoStore.playVideo && (
        <div className="flex justify-center">
          <p className="text-2xl">Video is playing</p>
        </div>
      )}
      <Videos
        playerRef={playerRef}
        movie={movie}
        // videoPlaying={videoPlaying}
        // videoPaused={videoPaused}
      />
      <br />
      <Messages />
    </>
  ) : (
    <MissingVideo />
  );
}

export default observer(App);

interface VideoProps {
  movie: {
    id: string;
    link: string;
    name: string;
  };
  playerRef: any;
  // videoPlaying: any;
  // videoPaused: any;
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
    <div>
      <a href="/" className="text-l my-3 justify-start">
        Back to homepage!
      </a>
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl my-6">{movie.name}...</div>
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
      </div>
    </div>
  );
}
