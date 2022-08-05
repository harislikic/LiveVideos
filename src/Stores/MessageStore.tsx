import { makeAutoObservable } from 'mobx';


// klasu ne koristim trenutno
class MessageStore {
  id: any = new Date();
  message;
  moveiId;

  constructor(message: any, movieId: any) {
    this.message = message;
    this.moveiId = movieId;
  }
}

// objekat
const messageobject = {
  id: 0,
  message: '',
  moveiId: '',
 
  newMessage : function(mesage:any , movieId:any)
  {
    messageobject.id = Math.floor(Math.random()*10000);
    messageobject.message = mesage;
    messageobject.moveiId= movieId;
    return messageobject;
  }
};


class Messages {
   //lista objekata 
  listMessages: any[] = [];
  
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.loadMessages();
  }

  addMessage(message: any, movieId: any) {
    this.listMessages.push(messageobject.newMessage(message, movieId)); 
    localStorage.setItem('message', JSON.stringify(this.listMessages));

    this.loadMessages();
  }
  
  loadMessages() {
    if (localStorage.getItem('message') !== null)
    {
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
