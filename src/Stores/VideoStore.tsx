import { get, makeAutoObservable } from 'mobx';
import { getData, privateVideoData } from '../data/data';

class VideoStore {
  playVideo: boolean = false;
  videoId: any;
  searchVideos: any;

  allVideos: any;
  private: boolean = false;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  play() {
    this.playVideo = true;
  }

  pause() {
    this.playVideo = false;
  }

  setId(id: number) {
    this.videoId = id;
  }

  getNextVideoId() {
    if (this.allVideos === undefined) return;
    const index = this.allVideos?.findIndex((x : any) => x.id == this.videoId);

    if (this.allVideos.length > index + 1) {
      return this.allVideos[index + 1].id;
    }
    return this.allVideos[0].id;
  }

  getPreviousVideoId() {
    if (this.allVideos === undefined) return;
    const index = this.allVideos?.findIndex((x: any) => x.id == this.videoId);

    if (index > 0  )  {

      return this.allVideos[index - 1].id;
    }
    return this.allVideos[this.allVideos.length - 1].id;
  }

  searchResult(search: string) {
    let temp = getData();
    this.searchVideos = temp.filter((x: any) =>
      x.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  loadVideoData() {
    if (this.private) this.allVideos = privateVideoData();
    if (!this.private) this.allVideos = getData();
  }
  togleButton() {
    this.private = !this.private;
    this.loadVideoData();
  }
}

export default VideoStore;
