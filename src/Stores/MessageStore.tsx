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
   //this.listMessages= JSON.parse(localStorage.getItem('message') as any);
    this.listMessages.push(new MessageStore(message,movieId));
    //localStorage.removeItem('message');
    localStorage.setItem('message',JSON.stringify(this.listMessages))
   
   
   this.loadMessages(movieId);
    
  }
  loadMessages(movieId:any) {
    if (localStorage.getItem('message') !== null) {
      this.listMessages = JSON.parse(localStorage.getItem('message')as any).filter((x:any)=>x.moveiId.includes(movieId));
    }
   
  //var newlist=JSON.parse(localStorage.getItem('message') as any);
  //this.listMessages= newlist.filter((x:any)=>x.moveiId.includes(movieId));
  }
  deleteMessage(id : any)
  {
    this.listMessages.splice(this.listMessages.indexOf(id),1)
    localStorage.setItem('message',JSON.stringify(this.listMessages))
  }
}
const message = new Messages();
export default message;
