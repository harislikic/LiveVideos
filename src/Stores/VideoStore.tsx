import { makeAutoObservable } from 'mobx';

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

  changeRoot(id:number)
  {
    <a href={`?id=${id}`}></a> 
    console.log('provjera rada funckije');
    console.log('poslani id', id);
  }
  
  
}

export default VideoStore;
