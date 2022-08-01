import React from 'react';
import { Link } from 'react-router-dom';
import ReactHlsPlayer from './video';

function Videos() {
  const playerRef = React.useRef<any>();

  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get('term');
  console.log(term);

  const data = {
    id: 1,
    link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  };

  return (
    <div className="container mx-auto grid h-screen place-items-center">
      <ReactHlsPlayer
        className="content-center"
        playerRef={playerRef}
        src={data.link}
        autoPlay={false}
        controls={true}
        width="50%"
        height="auto"
      />
      <Link to="/">Back to homepage!</Link>
    </div>
  );
}

export default Videos;
