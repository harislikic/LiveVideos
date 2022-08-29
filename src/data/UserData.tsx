

export enum Role {
  Moderator = 'moderator',
  User = 'user',
  map = "map"
}

const userData = [
  {
    id: 1,
    firstName: 'admin',
    lastName: 'admin',
    userName: 'admin',
    password: 'admin',
    email : 'haris.likic@hotmail.com',
    isAdmin: false,
    Role : Role.Moderator,
    colorName : '#fff'
  },
  {
    id: 2,
    firstName: 'user',
    lastName: 'user',
    userName: 'user',
    password: 'user',
    email : 'haris.likic@hotmail.com',
    isAdmin: false,
    Role : Role.User,
    colorName : '#fff'
  },
  {
    id: 3,
    firstName: 'haris',
    lastName: 'haris',
    userName: 'haris',
    password: 'haris',
    email : 'haris.likic@hotmail.com',
    isAdmin: true,
    Role : Role.User,
    colorName : '#fff'
  },
];

export function GetUsersData() {
  return userData;
}

export function GetUserById(id?: number) {
  return userData.find(x => x.id == id);
}

export function getByuserNameAndPassword(username: any, password: any) {
  return userData.find(x => x.userName == username && x.password == password);
}
