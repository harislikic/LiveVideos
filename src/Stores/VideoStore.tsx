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

  get id() {
    return (
      window.location.search
        .slice(1)
        .split('&')
        .find(x => x.includes('id='))
        ?.replace('id=', '') ?? ''
    );
  }
}

export default VideoStore;
