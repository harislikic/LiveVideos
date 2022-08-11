import { makeAutoObservable } from 'mobx';

class UserStore {
  moderator: boolean = false;
  
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  isModerator() {
    this.moderator = !this.moderator; 
  }
 
}

export default UserStore;
