

import React from "react";
import ReactHlsPlayer from "react-hls-player/dist";



function App() {

  const playerRef = React.useRef<any>();

  return <div className="container mx-auto bg-gray-200 rounded-xl ">
    <ReactHlsPlayer 
      playerRef={playerRef}
      src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      autoPlay={false}
      controls={true}

    />



  </div>;

}

export default App;
