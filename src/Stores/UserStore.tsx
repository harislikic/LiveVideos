import { makeAutoObservable } from 'mobx';
import { getByuserNameAndPassword, GetUsersData } from '../data/UserData';

class UserStore {
  moderator: boolean = false;

  loginData = GetUsersData();
  user: any;
  allUsers: any[] = [];

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  isModerator() {
    this.moderator = !this.moderator;
  }

  registration(data: any) {
    this.allUsers.push(data);

    localStorage.setItem('Allusers', JSON.stringify(this.allUsers));
  }
  loadAllusers() {
    if (
      localStorage.getItem('Allusers') != undefined &&
      localStorage.getItem('Allusers') != null
    ) {
      console.log('new user data', localStorage.getItem('Allusers'));
      return (this.allUsers = JSON.parse(
        localStorage.getItem('Allusers') as any,
      ));
    } else return (this.allUsers = GetUsersData());
  }
  loadUser() {
    if (localStorage.getItem('user') != 'undefined') {
      this.user = JSON.parse(localStorage.getItem('user') as any);
    }
  }
  checkDataForLogin(username: any, password: any) {
    this.loadAllusers();

    let tempUser = this.allUsers.find(
      x => x.userName == username && x.password == password,
    );
    
    this.user = {
      firstName: tempUser.firstName,
      lasttName: tempUser.lasttName,
      userName: tempUser.userName,
      email: tempUser.email,
    };

    localStorage.setItem('user', JSON.stringify(this.user));
    
    if (this.user != null) {
      alert('Login successful');

      window.location.href = '/';
    } else alert('Login error');
  }

  logout() {
    this.user = undefined;
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Logged of successfuly!');
  }
}

export default UserStore;
