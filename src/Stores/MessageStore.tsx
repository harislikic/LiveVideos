import { makeAutoObservable } from 'mobx';
import { rootStore } from './RootStore';
import VideoStore from './VideoStore';

class MessageStore {
  showChat: boolean = false;

  listMessages: Record<string, string[]> = {};
  messages: string[] = [];

  constructor(private videoStore: VideoStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  ToogleChat() {
    var x = document.getElementById('myDIV') as any;

    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
    this.showChat = !this.showChat;
  }

  addMessage(message: string , id : number) {
  
    if(message == '')  return alert('empty message field!');
    this.listMessages[id].push(message);
    localStorage.setItem('message', JSON.stringify(this.listMessages));

  }

  loadMessages(id : number) {
    if (localStorage.getItem('message') == null)
      localStorage.setItem('message', JSON.stringify(this.listMessages));

    this.listMessages = JSON.parse(localStorage.getItem('message') as string);

    if (!this.listMessages[id]) {
      this.listMessages[id] = this.messages;
    }

    localStorage.setItem('message', JSON.stringify(this.listMessages));


    console.log('load message funkcija za id ', id);
    console.log('lista za trenutni id poruke ; ', this.listMessages[id], this.messages);
  }

  deleteMessage(message: string , id : number) {
    this.listMessages[id] = this.listMessages[id].filter((x: string) => x != message);
    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }
}

export default MessageStore;
