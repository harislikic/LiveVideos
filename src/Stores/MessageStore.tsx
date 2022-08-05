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
const messageobject = {
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

class Messages {
  //lista objekata
  //listMessages: any[] = [];

  listMessages : any = {};
  messages = [];

  
  
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.loadMessages();
  }

  addMessage(message: any, movieId: any) {
    //this.listMessages.push(messageobject.newMessage(message, movieId));
    
    this.listMessages[movieId ] = this.messages;
    this.listMessages[movieId].push(message);

   console.log('poruka koju saljem',message);
   console.log('this.messages dictionarz',this.messages);
   console.log('diksneri data: ',this.listMessages);
    localStorage.setItem('message', JSON.stringify(this.messages));

    this.loadMessages();
  }

  loadMessages() {
    if (localStorage.getItem('message') !== null) {
      this.listMessages = JSON.parse(localStorage.getItem('message') as any);
    }
  }

  deleteMessage(id: any) {
    this.listMessages.splice(this.listMessages.indexOf(id), 1);
    localStorage.setItem('message', JSON.stringify(this.listMessages));
  }
}

const message = new Messages();
export default message;
