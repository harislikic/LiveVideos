import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { getData, getDataById } from '../data/data';
import { rootStore } from '../Stores/RootStore';
import ReactHlsPlayer from '../video';
import Messages from './Messages';
import { IoClose } from 'react-icons/io5';
import MissingVideo from './MissingVideo';
import { Link, useParams } from 'react-router-dom';
import MessageStore from '../Stores/MessageStore';

interface VideoProps {
  movie: {
    id: number;
    link: string;
    name: string;
  };
  playerRef: any;
  videoDataLenght: number;
}
function Videos() {
  const { videoStore } = rootStore;
  let { id } = useParams() ;
  videoStore.setId(Number(id));

  let videoDataLenght = getData().length;

  const playerRef = React.useRef<HTMLVideoElement>();
 
 if (Number(id) > videoDataLenght) id = JSON.stringify(1);
   if (Number(id) < 1) id = JSON.stringify(videoDataLenght);
  
  var Movie: VideoProps = {
    movie: getDataById(id as any) as any,
    playerRef: playerRef,
    videoDataLenght: videoDataLenght,
  };

  console.log('video data lenght', videoDataLenght);
  console.log('video id', id);
 
  useEffect(() => {
    playerRef.current?.addEventListener('play', videoStore.play);
    playerRef.current?.addEventListener('pause', videoStore.pause);
    return () => {
      playerRef.current?.removeEventListener('play', videoStore.play);
      playerRef.current?.removeEventListener('pause', videoStore.pause);
    };
  }, []);

  return Movie ? (
    <>
      <div>
        {videoStore.playVideo && (
          <div className="flex justify-center">
            <p>Video is playing!</p>
          </div>
        )}
      </div>
      <div className="place-content-center flex flex-col justify-center items-center  w-full ">
        <a className=" place-items-end" href="/">
          <IoClose className="place-items-end" />
          <p>{Movie.movie.name}</p>
        </a>
        <div className="flex flex-row justify-center items-center w-1/2">
          <Link to={`/video/${videoStore.getPreviousVideoId()}`}>
            <MdChevronLeft
            
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={40}
            />
          </Link>

          <ReactHlsPlayer
            id="player"
            className="content-center"
            playerRef={Movie.playerRef}
            src={Movie.movie.link}
            autoPlay={false}
            controls={true}
            width="50%"
            height="auto"
            muted
          />
         
          <Link to={`/video/${videoStore.getNextVideoId()}`}>
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={40}
            />
          </Link>
        </div>
         
         <Messages id={id} />
       
      </div>
    </>
  ) : (
    <MissingVideo />
  );
}

export default observer(Videos);
