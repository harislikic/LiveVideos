import { makeAutoObservable } from 'mobx';

import { GetUsersData } from '../data/UserData';
import { Role } from '../data/UserData';


interface User  {
    id:number,
    firstName : string,
    lastName : string,
    userName : string,
    password : string,
    Role : Role,
    email : string 

}

class UserStore {
  moderator: boolean = false;
  companiesAllowed: boolean = false;

  loginData = GetUsersData();
   user: any;
 // user : User = [];
  allUsers: User[] = [];

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  isModerator() {
    this.moderator = !this.moderator;
  }

  getUserById(id: number) {
   
    return this.allUsers.find(x => x.id == id);
  }

  registration(data: any) {
  
    if (
      this.allUsers.find(
        x => x.userName == data.userName || x.email == data.email,
      )
    )
      alert('User name or email exist!');

    if (
      localStorage.getItem('Allusers') == null &&
      localStorage.getItem('Allusers') != undefined
    )
  
    data.Role = Role.User;
    data.id = Math.floor(Math.random() * 1000);
    this.allUsers.push(data);

    localStorage.setItem('Allusers', JSON.stringify(this.allUsers));
  }
  loadAllusers() {
    if (
      localStorage.getItem('Allusers') != undefined &&
      localStorage.getItem('Allusers') != null
    ) {
      return (this.allUsers = JSON.parse(
        localStorage.getItem('Allusers') as any,
      ));
    } else return (this.allUsers = GetUsersData());
  }
  loadUser() {
    if (localStorage.getItem('user') != 'undefined') {
      this.user = JSON.parse(localStorage.getItem('user') as any);
    }
    this.companiesAllowed = JSON.parse(localStorage.getItem('cPerm') as any);
  }
  checkDataForLogin(data: any) {

    let tempUser = this.allUsers.find(
      x => x.userName == data.userName && x.password == data.password,
    );
    if (tempUser != null) {
      this.user = {
        id: tempUser?.id,
        firstName: tempUser?.firstName,
        lastName: tempUser?.lastName,
        userName: tempUser?.userName,
        password: tempUser?.password,
        Role: tempUser?.Role,
        email: tempUser.email,
      };

      localStorage.setItem('user', JSON.stringify(this.user));
    }

    if (this.user != null) {
      alert('Login successful');
      window.location.href = '/';
    } else {
      alert('Login error');
    }
  }
  deleteUser(id: any) {
    this.allUsers = this.allUsers.filter((x: any) => x.id != id);
    localStorage.setItem('Allusers', JSON.stringify(this.allUsers));
  
  }

  editUser(id: any, newData: any) {
    const idx = this.allUsers.findIndex(x => x.id == id);
    this.allUsers[idx] = newData;
    localStorage.setItem('Allusers', JSON.stringify(this.allUsers));
  
  }

  logout() {
    this.user = undefined;
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Logged of successfuly!');
    window.location.href = '/';
  }

  toggleCompaniePermission() {
    this.companiesAllowed = !this.companiesAllowed;
    localStorage.setItem('cPerm', JSON.stringify(this.companiesAllowed));
  }
}

export default UserStore;
