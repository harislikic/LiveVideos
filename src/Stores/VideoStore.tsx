import { makeAutoObservable } from 'mobx';

class VideoStore {
  playVideo: boolean = false;
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  play() {
    this.playVideo = true;
  }
  pause() {
    this.playVideo = false;
  }
}
export default VideoStore;
