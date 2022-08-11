import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { getData, getDataById } from '../data/data';
import { rootStore } from '../Stores/RootStore';
import ReactHlsPlayer from '../video';
import Messages from './Messages';
import { IoClose } from 'react-icons/io5';
import MissingVideo from './MissingVideo';
import { useParams } from 'react-router-dom';

interface VideoProps {
  movie: {
    id: number;
    link: string;
    name: string;
  };
  playerRef: any;
  videoDataLenght : number;
}
function Videos({ movie, playerRef ,videoDataLenght }: VideoProps) {
  const {videoStore  } = rootStore;
  let  {id} = useParams();
  console.log('use params',id)

  const handleClick = (newId: number) => {
    if (newId > videoDataLenght) {
      
      return videoStore.setID(1);
    }
    if (newId < 1) {
      return videoStore.setID(videoDataLenght);
    }
    videoStore.setID(newId);
  };
  useEffect(() => {
    playerRef.current?.addEventListener('play', videoStore.play);
    playerRef.current?.addEventListener('pause', videoStore.pause);
    return () => {
      playerRef.current?.removeEventListener('play', videoStore.play);
      playerRef.current?.removeEventListener('pause', videoStore.pause);
    };
  }, []);

  return movie ? (
    <>
    <div>
      {videoStore.playVideo &&(
        <div className='flex justify-center'>
          <p>Video is playing!</p>
        </div>
      )}
    </div>
      <div className="place-content-center flex flex-col justify-center items-center  w-full ">
        <a className=" place-items-end" href="/">
          <IoClose className="place-items-end" />
        </a>
        <div className="flex flex-row justify-center items-center w-1/2">
        
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={() => handleClick(Number(id) -1 )}
              size={40}
            />
         

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

         
            
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={40}
              onClick={() => handleClick(Number(id) +1 )}
            />
          
        </div>
       
        <Messages />
      </div>
    </>
  ) : (
    <MissingVideo />
  );
}

export default observer(Videos);
