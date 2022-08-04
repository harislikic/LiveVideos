import { makeAutoObservable } from 'mobx';

class Message {
  
  movieId : any;
  Message : any;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  addMessage()
  {
    this.Message = 'mporuka';
    this.movieId = 1;
    console.log('djes', this.Message)
    localStorage.setItem(Message,);
  }
  
}
const message = new Message();
export default message;
