import { makeAutoObservable } from 'mobx';

class MessageStore{
  id : any =new Date();
  message;
  moveiId;

  constructor(message:any,movieId:any)
  {
   this.message =message;
   this.moveiId =movieId;
  }

}
class Messages {
  
   listMessages : any [] =[]
   
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  addMessage(message:any,movieId:any)
  {
    this.listMessages.push(new MessageStore(message,movieId));
  
    localStorage.setItem('message',JSON.stringify(this.listMessages))
    console.log('add mesage funkcija',this.listMessages)
    
    
  }
  updateMessages() {
    this.listMessages = JSON.parse(localStorage.getItem('message') as any);
  }
  deleteMessage(id : any)
  {
    this.listMessages.splice(this.listMessages.indexOf(id),1)
    localStorage.setItem('message',JSON.stringify(this.listMessages))
  }
}
const message = new Messages();
export default message;
