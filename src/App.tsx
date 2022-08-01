import React from "react";
import ReactHlsPlayer from "./video";

function App() {
  const playerRef = React.useRef<any>();

  return (
    <div className="container mx-auto grid h-screen place-items-center">
      <ReactHlsPlayer
        className="content-center"
        playerRef={playerRef}
        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        autoPlay={false}
        controls={true}
        width="50%"
        height="auto"
      />
    </div>
  );
}

export default App;
