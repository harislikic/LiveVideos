import { makeAutoObservable } from 'mobx';
import { GetUsersData } from '../data/UserData';

class UserStore {
  moderator: boolean = false;
  isLogged: boolean = false;
  username: string = 'hairs';
  loginData = GetUsersData();

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  isModerator() {
    this.moderator = !this.moderator;
  }

  checkDataForLogin(username: any, password: any) {
   if(this.loginData.find(x=>x.username == username && x.password == password))
   {
    alert("Login successful");
    console.log(this.isLogged);
    this.isLogged = true;
    
   
   }
  
   else
   alert('Login error');
  }
}

export default UserStore;
