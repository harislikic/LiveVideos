import { get, makeAutoObservable } from 'mobx';
import {getNextId} from '../data/data'
import {getPrevoiusId} from '../data/data'
class VideoStore {
  playVideo: boolean = false;
  videoId: any;
  
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  play() {
    this.playVideo = true;
  }
  pause() {
    this.playVideo = false;
  }
   
  setId(id : number)
  {
    this.videoId  = id;
  }
  getNextVideoId ()
  {
    return  getNextId(this.videoId)?.id ;
  }

  getPreviousVideoId ()
  {
     return getPrevoiusId(this.videoId)?.id ;
  }
}

export default VideoStore;
