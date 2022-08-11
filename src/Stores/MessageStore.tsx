import { makeAutoObservable } from 'mobx';
import { rootStore } from './RootStore';
import VideoStore from './VideoStore';

class MessageStore {
  listMessages: Record<string, string[]> = {};
  messages: string[] = [];

  constructor(private videoStore: VideoStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  addMessage(message: string) {
    this.listMessages = JSON.parse(localStorage.getItem('message') as string);

    this.listMessages[this.videoStore.id].push(message);
    localStorage.setItem('message', JSON.stringify(this.listMessages));

  }

  loadMessages() {
    if (localStorage.getItem('message') == null)
      localStorage.setItem('message', JSON.stringify(this.listMessages));

    this.listMessages = JSON.parse(localStorage.getItem('message') as string);

    if (!this.listMessages[this.videoStore.id] && this.videoStore.id) {
      this.listMessages[this.videoStore.id] = this.messages;
    }

    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }

  deleteMessage(message: string) {
    this.listMessages[this.videoStore.id] = this.listMessages[
      this.videoStore.id
    ].filter((x: string) => x != message);
    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }
  
}

export default MessageStore;
