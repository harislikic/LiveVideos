import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { getDataById } from '../data/data';
import { rootStore } from '../Stores/RootStore';
import ReactHlsPlayer from '../video';
import Messages from './Messages';

interface VideoProps {
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
    <>
      <div className="place-content-center">
        <div className="flex flex-row justify-center items-center">
        <a href={'id=' + String(videoStore.id-1)}>
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
         
          <a href={'id=' + String(videoStore.id+1)}>
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={40}
            />
          </a>
         
        </div>
        <Messages />
      </div>
    </>
  );
}

export default observer(Videos);
