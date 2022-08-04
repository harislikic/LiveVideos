import { makeAutoObservable } from 'mobx';

class User {
  isModerator: boolean = false;
  isViewer :  boolean = true;
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  isModeratortrue() {
    this.isModerator = true;
    console.log('user store is true ', this.isModerator)
  }
  isViewertrue(){
    this.isModerator=false;
  }
}
const UserStore = new User();
export default UserStore;
