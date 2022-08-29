import { makeAutoObservable } from 'mobx';
import VideoStore from './VideoStore';

class MessageStore {
  showChat: boolean = false;

  listMessages: Record<string, any[]> = {};
  messages: string[] = [];

  constructor(private videoStore: VideoStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  ToogleChat() {
    const x = document.getElementById('myDIV') as any;

    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
    this.showChat = !this.showChat;
  }

  addMessage(message: string, id: number, username:string) {
    if (message == '') return alert('empty message field!');
    let newMessage={
      id:(Math.random()+1).toString(36).substring(7),
      message:message,
      userName:username
    }

    this.listMessages[id].push(newMessage);
    console.log('message',newMessage);
    console.log('list messasges',this.listMessages[id]);
    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }

  loadMessages(id: number) {
    if (localStorage.getItem('message') == null)
      localStorage.setItem('message', JSON.stringify(this.listMessages));

    this.listMessages = JSON.parse(localStorage.getItem('message') as string);

    if (!this.listMessages[id]) {
      this.listMessages[id] = this.messages;
    }

    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }

  deleteMessage(message: string, id: number) {
    this.listMessages[id] = this.listMessages[id].filter(
      (x: string) => x != message,
    );
    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }
}

export default MessageStore;
