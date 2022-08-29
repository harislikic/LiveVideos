import { makeAutoObservable } from 'mobx';
import CompanieStore from './CompaniStore';
import MessageStore from './MessageStore';
import UserStore from './UserStore';
import VideoStore from './VideoStore';

class RootStore {
  constructor(
    public readonly userStore = new UserStore(),
    public readonly videoStore = new VideoStore(),
    public readonly messageStore = new MessageStore(videoStore),
    public readonly companieStore = new CompanieStore(),
  ) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
}

const rootStore = new RootStore();
export { rootStore };
