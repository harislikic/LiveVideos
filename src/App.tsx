import React from 'react';
import Home from './pages/Home';
import { getData } from '/Users/indiigo_o/Desktop/valens-player/src/data/data';
import ReactHlsPlayer from './video';
import MissingVideo from './pages/MissingVideo';

function App() {
  const playerRef = React.useRef<any>();
  let params: any = window.location.search
    .slice(1)
    .split('&')
    .find(x => x.includes('id='))
    ?.replace('id=', '');
  let data = getData();
  let movie = data.find(x => x.id == params);
  console.log(movie);
  let check: boolean = window.location.search.includes('id=');

  if (check == false) {
    return <Home></Home>;
  }
  return movie ? (
    <Videos playerRef={playerRef} movie={movie} />
  ) : (
    <MissingVideo />
  );
}

export default App;

interface VideoProps {
  movie: {
    id: string;
    link: string;
    name: string;
  };
  playerRef: any;
}
function Videos({ movie, playerRef }: VideoProps) {
  console.log('UlaziLi', movie, playerRef);

  return (
    <div className="container mx-auto grid h-screen place-items-center">
      <div>{movie.name}</div>
      <ReactHlsPlayer
        className="content-center"
        playerRef={playerRef}
        src={movie.link}
        autoPlay={false}
        controls={true}
        width="50%"
        height="auto"
      />
      <a href="/">Back to homepage!</a>
    </div>
  );
}
