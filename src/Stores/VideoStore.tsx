import { makeAutoObservable } from 'mobx';
import { useParams } from 'react-router-dom';

class VideoStore {
  playVideo: boolean = false;
  videoId : any;


  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
   
  
  }
  play() {
    this.playVideo = true;
  }
  pause() {
    this.playVideo = false;
  }

  get id() {
    return (
      Number( this.videoId =
        window.location.href.split('video/').find(x=>x.includes('id='))?.replace('id=','')
        )
    )
  }

  imeidRoot()
  {
    return Number(
      window.location.href.split('video/').find(x=>x.includes('id='))?.replace('id=','')
      );
  }

  setID(id: number) {
    window.location.href = 'id=' + id;
  }
  
}

export default VideoStore;
