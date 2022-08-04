import { makeAutoObservable } from 'mobx';

class Message{
  message;
  moveiId;

  constructor(_message:any,_movieId:any)
  {
   (this.message=_message),
    (this.moveiId=_movieId)
  }

}
class Messages {
  
   listMessages : any [] =[]
   
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  addMessage(message:any,movieId:any)
  {
    this.listMessages.push(new Message(message,movieId));
    localStorage.setItem('message',JSON.stringify(this.listMessages))
    console.log('add mesage funkcija',this.listMessages)
    let valueRaw = localStorage.getItem('message')
    let  value = JSON.parse(valueRaw as any)

   
  }
  
}
const message = new Messages();
export default message;
