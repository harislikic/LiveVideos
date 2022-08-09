import { makeAutoObservable } from 'mobx';
import MessageStore from './MessageStore';
import UserStore from './UserStore';
import VideoStore from './VideoStore';

class RootStore {
  constructor(
     
      public readonly userStore = new UserStore(),
      public readonly videoStore = new VideoStore(),
      public readonly messageStore = new MessageStore(videoStore),
    ) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
}

const rootStore = new RootStore();
export { rootStore };
