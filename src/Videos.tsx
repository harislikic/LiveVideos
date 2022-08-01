import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import ReactHlsPlayer from "./video";


function Videos() {
    const playerRef = React.useRef<any>();
  
    console.log('current URL 👉️', window.location.href);
    console.log('current Pathname 👉️', window.location.pathname);

   
    const data = {
      id : 1,
      link:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }
   

    return(
    <div className="container mx-auto grid h-screen place-items-center">
      <ReactHlsPlayer  className="content-center"
        playerRef={playerRef}
        src={data.link}
        autoPlay={false}
        controls={true}
        width="50%"
        height="auto"
      />
    </div>
    );
 
  }
  
  
  export default Videos;

function useRouter() {
    throw new Error("Function not implemented.");
}
  