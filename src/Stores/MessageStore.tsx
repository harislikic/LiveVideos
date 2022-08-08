import { makeAutoObservable } from 'mobx';


// klasu ne koristim trenutno
/*class MessageStore {
  id: any = new Date();
  message;
  moveiId;

  constructor(message: any, movieId: any) {
    this.message = message;
    this.moveiId = movieId;
  }
}
*/

// objekat
/*const messageobject = {
  id: 0,
  message: '',
  moveiId: '',

  newMessage: function (mesage: any, movieId: any) {
    messageobject.id = Math.floor(Math.random() * 10000);
    messageobject.message = mesage;
    messageobject.moveiId = movieId;
    return messageobject;
  },
};
*/

class MessageStore {
  //lista objekata
  //listMessages: any[] = [];

  listMessages: any = {};
  messages = [];
  movieParams: any;


  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
   
    this.movieParams = window.location.search
    .slice(1)
    .split('&')
    .find(x => x.includes('id='))
    ?.replace('id=', '') as any;
    this.loadMessages();

  }

  addMessage(message: string) {
    this.listMessages = JSON.parse(localStorage.getItem('message') as any);
   
    this.listMessages[this.movieParams].push(message);
    localStorage.setItem('message', JSON.stringify(this.listMessages));

    console.log('poruka koju saljem', message);
    console.log('diksneri data: ', this.listMessages);
  }

  loadMessages() {
    if (localStorage.getItem('message') == null)
    localStorage.setItem('message', JSON.stringify(this.listMessages));

  this.listMessages = JSON.parse(localStorage.getItem('message') as any);
  
  if (!this.listMessages[this.movieParams] && this.movieParams) {
    this.listMessages[this.movieParams] = this.messages;
  }

  localStorage.setItem('message', JSON.stringify(this.listMessages) as any);
  }

  deleteMessage(message: any) {

    this.listMessages[this.movieParams] = this.listMessages[this.movieParams].filter((x : any) => x != message)
    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }
  
}

export default MessageStore;
